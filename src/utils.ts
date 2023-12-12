export const extractAdvisoryData = (json: any): any[] => {
  const advisories = json.advisories;
  const tableData = [];
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

export const generateMarkdownTable = (
  json: any,
  level: string,
  input: string
): string | undefined => {
  const tableHeaders = ["Module Name", "Version", "Severity", "URL"];
  const data = extractAdvisoryData(json);
  // Add a mapping of severity levels to numbers
  // Filter out vulnerabilities with a lower severity level than the one specified
  interface SeverityLevels {
    low: number;
    moderate: number;
    high: number;
    critical: number;
  }

  const severityLevels: SeverityLevels = {
    low: 1,
    moderate: 2,
    high: 3,
    critical: 4,
  };

  const filteredData = data.filter(
    ([_, __, severity]: [any, any, string]) =>
      severityLevels[severity as keyof SeverityLevels] >=
      severityLevels[level as keyof SeverityLevels]
  );
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
  const summary = `The following security vulnerabilities with a warning level of ${level} or above were found in your dependencies:\n\n`;
  const footnote = `\n\nPlease run \`npm audit fix\` to fix them.\n\n`;
  const inputText = `The following command was used to generate this table:\n\n\`\`\`\n${input}\n\`\`\``;
  if (vulnCount === 0) {
    return;
  }
  return `${headline}${summary}${headerRow}${separatorRow}${contentRows}${footnote}${inputText}`;
};
