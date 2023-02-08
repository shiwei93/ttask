const base = require('./jest.config.base');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    ...base,
    verbose: true,
    silent: true,
    roots: ['<rootDir>'],
    projects: ['<rootDir>/packages/nflask'],
    collectCoverage: true,
    collectCoverageFrom: ['!**/node_modules/**', '!**/dist/**', '**/src/**'],
    coverageReporters: [['json', { file: 'report.json' }], 'lcov'],
    coverageThreshold: {
        global: {
            statements: 70,
            functions: 100,
            branches: 100,
            lines: 80,
        },
    },
};
