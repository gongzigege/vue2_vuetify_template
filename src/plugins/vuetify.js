import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import SvgIcon from '@/components/Icons'

// 由Vuetify（javascript）提供的翻译
import zhHans from 'vuetify/es5/locale/zh-Hans'

import i18n from '@/locales/i18n'

Vue.use(Vuetify)

console.log(i18n.messages)
export default new Vuetify({
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  },
  icons: {
    iconfont: 'mdi' || 'md' || 'mdiSvg',
    values: SvgIcon
  }
})
