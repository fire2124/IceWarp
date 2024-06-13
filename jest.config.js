module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testMatch: ['**/src/**/*.test.ts'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    collectCoverage: true,
    detectOpenHandles: false,
    coverageReporters: ['text', 'lcov'],
    coverageDirectory: 'coverage',
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
  };
  