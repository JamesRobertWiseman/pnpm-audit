/**
 * Interface representing the structure of an advisory.
 */
interface Advisory {
  module_name: string;
  findings: { version: string }[];
  severity: string;
  url: string;
}

/**
 * Interface representing the JSON data structure.
 */
interface AdvisoryData {
  advisories: { [key: string]: Advisory };
}

/**
 * Extracts advisory data from the given JSON object.
 * @param json - The JSON object containing advisory data.
 * @returns An array of advisory data.
 */
export const extractAdvisoryData = (json: AdvisoryData): [string, string, string, string][] => {
  const advisories = json.advisories;
  const tableData: [string, string, string, string][] = [];
  for (const advisoryId in advisories) {
    const advisory = advisories[advisoryId];
    const moduleName = advisory.module_name;
    const version = advisory.findings[0].version;
    const severity = advisory.severity;
    const url = advisory.url;

    tableData.push([moduleName, version, severity, url]);
  }
  return tableData;
};

/**
 * Interface representing the severity levels.
 */
interface SeverityLevels {
  low: number;
  moderate: number;
  high: number;
  critical: number;
}

/**
 * Generates a markdown table from the given JSON object.
 * @param json - The JSON object containing advisory data.
 * @param level - The severity level to filter the data.
 * @returns A markdown table as a string or undefined if no vulnerabilities are found.
 */
export const generateMarkdownTable = (
  json: AdvisoryData,
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

  const filteredData = data.filter(
    ([, , severity]) =>
      severityLevels[severity as keyof SeverityLevels] >=
      severityLevels[level as keyof SeverityLevels]
  );

  const vulnCount = filteredData.length;

  const maxLengths = filteredData.reduce(
    (acc, [moduleName, version, severity, url]) => [
      Math.max(acc[0], moduleName.length),
      Math.max(acc[1], version.length),
      Math.max(acc[2], severity.length),
      Math.max(acc[3], url.length),
    ],
    [
      tableHeaders[0].length,
      tableHeaders[1].length,
      tableHeaders[2].length,
      tableHeaders[3].length,
    ]
  );

  const headerRow = `| ${tableHeaders[0].padEnd(
    maxLengths[0]
  )} | ${tableHeaders[1].padEnd(
    maxLengths[1]
  )} | ${tableHeaders[2].padEnd(
    maxLengths[2]
  )} | ${tableHeaders[3].padEnd(maxLengths[3])} |\n`;
  const separatorRow = `| ${"-".repeat(maxLengths[0])} | ${"-".repeat(
    maxLengths[1]
  )} | ${"-".repeat(maxLengths[2])} | ${"-".repeat(maxLengths[3])} |\n`;
  const contentRows = filteredData
    .map(
      ([moduleName, version, severity, url]) =>
        `| ${moduleName.padEnd(maxLengths[0])} | ${version.padEnd(
          maxLengths[1]
        )} | ${severity.padEnd(maxLengths[2])} | ${url.padEnd(maxLengths[3])} |`
    )
    .join("\n");

  const headline = `## :warning: Security Vulnerabilities Found :warning:\n\n`;
  const summary = `The following security vulnerabilities with a warning level of ${level} or above were found in your dependencies:\n\n`;
  const footnote = `\n\nPlease run \`npm audit fix\` to fix them.\n\n`;

  if (vulnCount === 0) {
    return;
  }
  return `${headline}${summary}${headerRow}${separatorRow}${contentRows}${footnote}`;
};
