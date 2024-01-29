module.exports = {
  rules: {
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }],
    'no-unused-vars': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 3 }],
    'one-var': ['error', 'never'],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
    'eqeqeq': ['error', 'always'],
    'object-shorthand': ['error', 'properties'],
    'no-multiple-empty-lines': ['warn', { max: 3 }],

    // @stylistic
    '@stylistic/js/space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    '@stylistic/js/arrow-spacing': ['error', { 'before': true, 'after': true }],
    '@stylistic/js/comma-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/js/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/js/rest-spread-spacing': ['error', 'never'],
    '@stylistic/js/semi-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/js/space-before-blocks': ['error', { 'functions': 'always' }],
    '@stylistic/js/space-in-parens': ['error', 'never'],
    '@stylistic/js/spaced-comment': ['error', 'always'],

    // O:
    'import-helpers/order-imports': [
      'error',
      { // example configuration
        newlinesBetween: 'never',
        groups: ['module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },

  plugins: [
    '@stylistic/js',
    'eslint-plugin-import-helpers',
  ],
  ignorePatterns: ['**/vendor/**'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  root: true,
};
