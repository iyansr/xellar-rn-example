// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'import', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/prefer-default-export': 'off',
    'no-restricted-exports': [
      'warn',
      {
        restrictDefaultExports: {
          direct: true,
        },
      },
    ],
    overrides: [
      {
        files: ['app/**/*.{js,jsx,ts,tsx}'],
        rules: {
          'no-restricted-exports': 'off',
        },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
        json: 'always',
        svg: 'always',
        '': 'never',
      },
    ],
  },
};
