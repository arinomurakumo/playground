const { injectAxe, checkA11y } = require('axe-playwright')

module.exports = {
  // Axeをストーリーに注入し、レンダリングしたらアクセシビリティテストを実行
  async preRender(page, context) {
    await injectAxe(page)
  },
  async postRender(page, context) {
    // ストーリーのルート要素から始めて、DOMツリーを横断して問題をチェックするようにAxeを設定
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true
      }
    })
  }
}
