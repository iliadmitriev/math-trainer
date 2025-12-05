module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  transform: {
    ".*\\.(js)$": "babel-jest",
    ".*\\.vue$": "@vue/vue3-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!vue-awesome).+\\.js$"
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/dist/',
    '<rootDir>/coverage/'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 25,
      lines: 50,
      statements: 50
    }
  },
}
