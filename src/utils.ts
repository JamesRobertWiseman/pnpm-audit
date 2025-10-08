interface AdvisoryFinding {
  version?: string;
}

interface Advisory {
  module_name?: string;
  findings?: AdvisoryFinding[];
  severity?: string;
  url?: string;
}

interface AuditError {
  message?: string;
}

export interface AuditJson {
  advisories?: Record<string, Advisory>;
  error?: AuditError;
}

const mergeAuditJson = (target: AuditJson, source: AuditJson): AuditJson => ({
  advisories: source.advisories ?? target.advisories,
  error: source.error ?? target.error,
});

export const parseAuditStdout = (stdout: string): AuditJson | undefined => {
  const trimmed = stdout.trim();
  if (trimmed === "") {
    return undefined;
  }

  const lines = trimmed.split(/\r?\n/).map((line) => line.trim());
  let parsed: AuditJson | undefined;

  for (const line of lines) {
    if (line === "") {
      continue;
    }

    try {
      const json = JSON.parse(line) as AuditJson;
      parsed = parsed == null ? json : mergeAuditJson(parsed, json);
    } catch {
      // Some pnpm versions emit multi-line JSON objects; fall back to parsing the
      // entire stdout string instead of individual lines if we encounter one.
      parsed = undefined;
      break;
    }
  }

  if (parsed != null) {
    return parsed;
  }

  try {
    return JSON.parse(trimmed) as AuditJson;
  } catch {
    return undefined;
  }
};

type TableRow = [string, string, string, string];

export const extractAdvisoryData = (json: AuditJson): TableRow[] => {
  if (json?.advisories == null) {
    return [];
  }

  const tableData: TableRow[] = [];
  for (const advisoryId of Object.keys(json.advisories)) {
    const advisory = json.advisories[advisoryId];
    const moduleName = advisory.module_name ?? "unknown";
    const version = advisory.findings?.[0]?.version ?? "unknown";
    const severity = advisory.severity ?? "unknown";
    const url = advisory.url ?? "";

    tableData.push([moduleName, version, severity, url]);
  }
  return tableData;
};

interface SeverityLevels {
  low: number;
  moderate: number;
  high: number;
  critical: number;
}

type Severity = keyof SeverityLevels;

const getSeverityValue = (
  severity: string,
  severityLevels: SeverityLevels
): number => {
  const severityKey = severity.toLowerCase() as Severity;
  return severityLevels[severityKey] ?? 0;
};

export const generateMarkdownTable = (
  json: AuditJson,
  level: string
): string | undefined => {
  const tableHeaders = ["Module Name", "Version", "Severity", "URL"];
  const data = extractAdvisoryData(json);

  const severityLevels: SeverityLevels = {
    low: 1,
    moderate: 2,
    high: 3,
    critical: 4,
  };

  const normalizedLevel = (
    level.toLowerCase() in severityLevels
      ? (level.toLowerCase() as Severity)
      : "critical"
  ) as Severity;
  const threshold = severityLevels[normalizedLevel];

  const filteredData = data.filter(([, __, severity]) => {
    const severityValue = getSeverityValue(severity, severityLevels);
    return severityValue >= threshold;
  });

  const vulnCount = filteredData.length;

  const maxLengths = filteredData.reduce(
    (acc, [moduleName, version, severity, url]) => [
      Math.max(acc[0] as number, moduleName.length as number),
      Math.max(acc[1] as number, version.length as number),
      Math.max(acc[2] as number, severity.length as number),
      Math.max(acc[3] as number, url.length as number),
    ],
    [
      tableHeaders[0].length,
      tableHeaders[1].length,
      tableHeaders[2].length,
      tableHeaders[3].length,
    ]
  );

  const headerRow = `| ${tableHeaders[0].padEnd(
    maxLengths[0] as number
  )} | ${tableHeaders[1].padEnd(
    maxLengths[1] as number
  )} | ${tableHeaders[2].padEnd(
    maxLengths[2] as number
  )} | ${tableHeaders[3].padEnd(maxLengths[3] as number)} |\n`;
  const separatorRow = `| ${"-".repeat(maxLengths[0] as number)} | ${"-".repeat(
    maxLengths[1] as number
  )} | ${"-".repeat(maxLengths[2] as number)} | ${"-".repeat(
    maxLengths[3] as number
  )} |\n`;
  const contentRows = filteredData
    .map(
      ([moduleName, version, severity, url]) =>
        `| ${moduleName.padEnd(maxLengths[0])} | ${version.padEnd(
          maxLengths[1]
        )} | ${severity.padEnd(maxLengths[2])} | ${url.padEnd(maxLengths[3])} |`
    )
    .join("\n");

  const headline = `## :warning: Security Vulnerabilities Found :warning:\n\n`;
  const summary = `The following security vulnerabilities with a warning level of ${normalizedLevel} or above were found in your dependencies:\n\n`;
  const footnote = `\n\nPlease run \`npm audit fix\` to fix them.\n\n`;

  if (vulnCount === 0) {
    return;
  }
  return `${headline}${summary}${headerRow}${separatorRow}${contentRows}${footnote}`;
};
