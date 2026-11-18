module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['dist/', 'coverage/'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'function-declaration' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.jsx',
          'src/setupTests.js',
          '*.config.js',
          '*.config.cjs',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.cjs', 'vite.config.js'],
      env: { node: true },
    },
    {
      files: ['**/*.test.jsx', 'src/setupTests.js'],
      env: { jest: true },
    },
  ],
};
