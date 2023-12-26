const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  preset: "ts-jest",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.{type, contant, story, test, spec}.{ts, tsx}",
  ],
  collectCoverage: true,
  coverageThreshold: {
    "src/**/*.{ts,tsx}": {
      branches: 90,
      lines: 90,
      functions: 90,
      statments: -10,
    },
  },
};

module.exports = createJestConfig(config);
