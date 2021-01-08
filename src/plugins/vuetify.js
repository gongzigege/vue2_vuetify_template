import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import SvgIcon from '@/components/Icons'

// 由Vuetify（javascript）提供的翻译
import zhHans from 'vuetify/es5/locale/zh-Hans'

import i18n from '@/locales/i18n'

Vue.use(Vuetify)

const options = {
  breakpoint: {
    // TODO: update to MD2 spec in v3 - 1280
    mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    }
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
      variations: true
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      }
    }
  }
}

console.log(i18n.messages)
export default new Vuetify({
  ...options,
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  },
  icons: {
    iconfont: 'mdi' || 'md' || 'mdiSvg',
    values: SvgIcon
  }
})
