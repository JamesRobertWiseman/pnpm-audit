import { extractAdvisoryData, generateMarkdownTable } from './utils';

describe('extractAdvisoryData', () => {
  it('should extract advisory data correctly', () => {
    const json = {
      advisories: {
        '1': {
          module_name: 'module1',
          findings: [{ version: '1.0.0' }],
          severity: 'high',
          url: 'http://example.com/1',
        },
        '2': {
          module_name: 'module2',
          findings: [{ version: '2.0.0' }],
          severity: 'low',
          url: 'http://example.com/2',
        },
      },
    };

    const result = extractAdvisoryData(json);
    expect(result).toEqual([
      ['module1', '1.0.0', 'high', 'http://example.com/1'],
      ['module2', '2.0.0', 'low', 'http://example.com/2'],
    ]);
  });
});

describe('generateMarkdownTable', () => {
  it('should generate markdown table correctly', () => {
    const json = {
      advisories: {
        '1': {
          module_name: 'module1',
          findings: [{ version: '1.0.0' }],
          severity: 'high',
          url: 'http://example.com/1',
        },
        '2': {
          module_name: 'module2',
          findings: [{ version: '2.0.0' }],
          severity: 'low',
          url: 'http://example.com/2',
        },
      },
    };

    const result = generateMarkdownTable(json, 'low');
    const expected = `## :warning: Security Vulnerabilities Found :warning:

The following security vulnerabilities with a warning level of low or above were found in your dependencies:

| Module Name | Version | Severity | URL |
| ----------- | ------- | -------- | --- |
| module1     | 1.0.0   | high     | http://example.com/1 |
| module2     | 2.0.0   | low      | http://example.com/2 |

Please run \`npm audit fix\` to fix them.

`;
    expect(result).toBe(expected);
  });

  it('should return undefined if no vulnerabilities are found', () => {
    const json = {
      advisories: {},
    };

    const result = generateMarkdownTable(json, 'low');
    expect(result).toBeUndefined();
  });
});
