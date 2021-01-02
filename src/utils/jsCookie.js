// https://github.com/js-cookie/js-cookie
import Cookies from 'js-cookie'

/**
 * 获取 Cookie
 * @param {string} CookieKey 选填。不填则获取所有可见 Cookie
 */
export function getCookie(CookieKey) {
  return Cookies.get(CookieKey)
}

/**
 * 设置 Cookie
 * @param {string} CookieKey 必填。
 * @param {string} CookieValue 必填。
 * @param {object} CookieOptions 选填。 expires:过期时间；path:页面路径；domain:域
 */
export function setCookie(CookieKey, CookieValue, CookieOptions) {
  return Cookies.set(CookieKey, CookieValue, CookieOptions)
}

/**
 * 删除 Cookie
 * @param {string} CookieKey 注意! 删除 Cookie 时，如果不依赖默认属性(CookieOptions),则必须传递用于设置Cookie的完全相同的路径和域属性
 */
export function removeCookie(CookieKey) {
  return Cookies.remove(CookieKey)
}
