/**
 * 受け取った文字列を連結し、WordPress用のCSSカスタムプロパティ名の形式にして返す。
 * @param  {...string} names
 * @returns {string}
 */
export const getProp = (...names) => {
  const propName = names.join('--')
  return `var(--wp--custom--${propName})`
}
