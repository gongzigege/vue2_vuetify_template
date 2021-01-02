import Vue from 'vue'
import lowerFirst from 'lodash/lowerFirst'
import camelCase from 'lodash/camelCase'

import SvgIcon from './SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const requireSvg = require.context('./svg', false, /\.svg$/)
requireSvg.keys().map(requireSvg)

const SvgName = requireSvg.keys().map((fileName) => {
  // 获取 SVG 文件名 的 PascalCase 命名
  return lowerFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
})

const IconFont = SvgName.reduce((ret, icon) => {
  ret[icon] = {
    component: SvgIcon,
    props: {
      iconClass: icon,
      className: icon
    }
  }
  return ret
}, {})

export default IconFont
