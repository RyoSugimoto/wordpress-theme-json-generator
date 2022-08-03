/**
 * templateParts
 * サイトエディターのテンプレートパーツページで
 * 各テンプレートパーツをわかりやすく表示するための設定。
 */

export default [
  {
    name: 'header',
    title: 'ヘッダー',
    // ヘッダー用のパーツは'header'を指定。
    area: 'header'
  },
  {
    name: 'footer',
    title: 'フッター',
    // ヘッダー用のパーツは'footer'を指定。
    area: 'footer'
  },
  {
    name: 'banner',
    title: 'バナー'
    // ヘッダーでもフッターでもないパーツはareaプロパティを指定しない。分類名は「一般」となる。
  },
]
