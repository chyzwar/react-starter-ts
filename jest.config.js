
/**
 * Use jest with ts-jest to transform
 *
 * @see https://facebook.github.io/jest/docs/en/configuration.html
 * @see https://github.com/kulshekhar/ts-jest
 */
module.exports = {
  name: "react-starter-ts",
  transform: {
    "^.+\\.(ts?|tsx?)$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx",
  ],
};
