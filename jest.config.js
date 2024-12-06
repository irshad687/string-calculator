module.exports = {
    testEnvironment: "node", // Can be 'jsdom' for browser-like environments
    verbose: true,           // Optional: Provides detailed test results
    collectCoverage: true,   // Optional: Collects code coverage info
    coverageDirectory: "coverage", // Optional: Output directory for coverage info
    testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"], // Custom test file patterns
  };
  