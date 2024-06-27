module.exports = {
  extends: [
    '@wonse/eslint-config-next',
    'plugin:storybook/recommended',
    'plugin:vitest-globals/recommended',
  ],
  env: {
    'vitest-globals/env': true,
  },
};
