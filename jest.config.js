const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  preset: "ts-jest",
};

module.exports = createJestConfig(config);
