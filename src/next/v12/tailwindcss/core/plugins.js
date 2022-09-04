const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('optional', '&:optional')
      addVariant('peer-data-hoge', ':merge(.peer):data-hoge ~ &')
      addVariant('data-hoge', '&[data-hoge="true"]')
      addVariant('group-data-hoge', ':merge(.group)[data-hoge="true"] &')
      addVariant('peer-data-hoge', ':merge(.peer)[data-hoge="true"] ~ &')
      addVariant('peer-contents-1', ':merge(.peer).peer-tab-1:checked ~ [data-layout="contents-wrapper"] &')
      addVariant('peer-contents-2', ':merge(.peer).peer-tab-2:checked ~ [data-layout="contents-wrapper"] &')
      addVariant('peer-contents-3', ':merge(.peer).peer-tab-3:checked ~ [data-layout="contents-wrapper"] &')
    })
  ]
}
