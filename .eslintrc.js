module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['prettier', 'eslint-comments', 'jest', 'promise'],
  extends: [
    'airbnb/base',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      // "jsx": true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    es2020: true,
    // "mongo": true,
    jest: true,
    commonjs: true,
  },
  rules: {
    // enable additional rules
    'prettier/prettier': 'error',
    'comma-dangle': 'off',
    'no-underscore-dangle': ['error', {allow: ['_id']}],
    indent: ['error', 2],
    'no-spaced-func': 2,
    'linebreak-style': ['error', 'unix'],
    curly: ['error'],
    'no-else-return': ['error'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: [
      2,
      'always',
      {
        omitLastInOneLineBlock: true,
      },
    ],
    'no-extra-semi': 2,
    'no-cond-assign': ['error', 'always'],
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],
    // disable rules from base configurations
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
          '.tsx',
          '.test.ts',
          '.test.tsx',
          '.js',
          '.android.js',
          '.ios.js',
          '.ts',
          '.android.ts',
          '.ios.ts',
        ],
      },
    },
  },
  ignorePatterns: [
    '/node_modules/**',
    '/.git/**',
    '/.vscode/**',
    '/build/**',
    '/coverage/**',
    '/docs/**',
    '/jsdoc/**',
    '/templates/**',
    '/tests/bench/**',
    '/tests/fixtures/**',
    '/tests/performance/**',
    '/tmp/**',
    '/tools/internal-rules/node_modules/**',
    '!.eslintrc.js',
    'prettier.config.js',
  ],
};
