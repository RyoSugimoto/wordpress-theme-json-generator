/**
 * settings.custom
 * 全体で使用するCSSカスタムプロパティを設定する。
 * カスタムプロパティ名は、
 * `--wp-preset--[customのプロパティ名]--[子プロパティ名](--[孫プロパティ名])`
 * のように展開される。
 * 例: custom.typography['font-size'].huge => --wp-preset--typography--font-size--huge
 */
export default {
  spacing: {
    small: 'max(1.25rem, 5vw)',
  },
  typography: {
    'font-size': {
      huge: 'clamp(2.25rem, 4vw, 2.75rem)'
    },
  },
}
