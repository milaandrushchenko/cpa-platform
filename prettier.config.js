/** @type {import('prettier').Config} */
const config = {
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  singleQuote: true,
  bracketSameLine: false,
  arrowParens: 'always',
  printWidth: 80,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^react', '^@/', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  endOfLine: 'lf',
}

export default config