import { getProp } from '../utilities.mjs'

/**
 * styles.blocks
 * 各ブロックにスタイルを適用するための設定。
 */
export default {
  'core/heading': {
    color: {
      text: getProp('color', 'foreground')
    }
  },
  'core/group': {
    // ブロック内の要素に適用するスタイル
    elements: {
      h2: {

      },
    }
  },
}
