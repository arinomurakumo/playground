const { injectAxe, getViolations, checkA11y } = require('axe-playwright')
const fs = require('fs')

module.exports = {
  setup() {
    fs.mkdir(
      process.cwd() + '/__accessibility__/',
      { recursive: true },
      err => {
        if (err) throw err
      }
    )
  },
  // Axeをストーリーに注入し、レンダリングしたらアクセシビリティテストを実行
  async preRender(page, context) {
    await injectAxe(page)
  },
  async postRender(page, context) {
    const violations = await getViolations(page, '#root', {
      detailedReport: true
    })

    // DOMツリーを横断して問題をチェックするようにAxeを設定
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true
      }
    })

    // アクセシビリティツリーをスナップショットしてページ構造を確認する
    const accessibilityTree = await page.accessibility.snapshot()
    expect(accessibilityTree).toMatchSnapshot()

    // 違反を書き込み
    await new Promise((resolve, reject) => {
      fs.writeFile(
        process.cwd() + `/__accessibility__/${context.id}.json`,
        JSON.stringify(violations, null, 2),
        err => {
          if (err) reject(err)
          resolve()
        }
      )
    })
  }
}
