const INLINE_ANNOTATION_TITLE = "pnpm audit vulnerability";
const reportInlineVulnerabilities = (vulnerabilities) => {
    for (const [moduleName, version, severity, url] of vulnerabilities) {
        const messageParts = [
            `${moduleName}@${version}`,
            `Severity: ${severity}`,
        ];
        if (url !== "") {
            messageParts.push(`Details: ${url}`);
        }
        const message = messageParts.join(" - ");
        const annotationLevel = (0, utils_1.getAnnotationLevelForSeverity)(severity);
        if (annotationLevel === "error") {
            (0, core_1.error)(message, { title: INLINE_ANNOTATION_TITLE });
        }
        else if (annotationLevel === "warning") {
            (0, core_1.warning)(message, { title: INLINE_ANNOTATION_TITLE });
        }
        else {
            (0, core_1.notice)(message, { title: INLINE_ANNOTATION_TITLE });
        }
    }
};
    const inline = (0, core_1.getBooleanInput)("inline");
        const json = (0, utils_1.parseAuditStdout)(stdout);
        if (json == null) {
            (0, core_1.setFailed)("Failed to parse pnpm audit output.");
            return;
        }
        const { rows: vulnerabilities } = (0, utils_1.getVulnerabilitiesForLevel)(json, level);
        if (inline && vulnerabilities.length > 0) {
            reportInlineVulnerabilities(vulnerabilities);
        }
exports.generateMarkdownTable = exports.getAnnotationLevelForSeverity = exports.getVulnerabilitiesForLevel = exports.extractAdvisoryData = exports.parseAuditStdout = void 0;
const severityLevels = {
    low: 1,
    moderate: 2,
    high: 3,
    critical: 4,
};
const normalizeSeverityLevel = (level) => {
    const normalizedLevel = level.toLowerCase();
    return (normalizedLevel in severityLevels
        ? normalizedLevel
        : "critical");
};
const getSeverityValue = (severity) => {
const getVulnerabilitiesForLevel = (json, level) => {
    const normalizedLevel = normalizeSeverityLevel(level);
    const rows = data.filter(([, __, severity]) => {
        const severityValue = getSeverityValue(severity);
    return { rows, normalizedLevel };
};
exports.getVulnerabilitiesForLevel = getVulnerabilitiesForLevel;
const getAnnotationLevelForSeverity = (severity) => {
    const severityValue = getSeverityValue(severity);
    if (severityValue >= severityLevels.high) {
        return "error";
    }
    if (severityValue >= severityLevels.moderate) {
        return "warning";
    }
    return "notice";
};
exports.getAnnotationLevelForSeverity = getAnnotationLevelForSeverity;
const generateMarkdownTable = (json, level) => {
    const tableHeaders = ["Module Name", "Version", "Severity", "URL"];
    const { rows: filteredData, normalizedLevel } = (0, exports.getVulnerabilitiesForLevel)(json, level);
