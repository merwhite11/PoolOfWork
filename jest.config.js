module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(url-join)/)", // allow Jest to transform url-join
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  watchman: false
};