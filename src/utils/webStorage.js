/**
 * 检测 localStorage 是否同时受支持和可用的函数
 * @param {*} type
 */
function storageAvailable(type) {
  var storage
  try {
    storage = window[type]
    var x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    )
  }
}

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
} else {
  // Too bad, no localStorage for us
}

// 保存数据到 sessionStorage
const SetSessionStorage = (key, value) => sessionStorage.setItem(key, JSON.stringify(value))

// 从 sessionStorage 获取数据
const GetSessionStorage = (key) => JSON.parse(sessionStorage.getItem(key))

// 从 sessionStorage 删除保存的数据
const removeSessionStorage = (key) => sessionStorage.removeItem(key)

// 从 sessionStorage 删除所有保存的数据
const ClearAllSessionStorage = () => sessionStorage.clear()

// 保存数据到 sessionStorage
const SetLocalStorage = (key, value) => localStorage.setItem(key, value)

// 从 LocalStorage 获取数据
const GetLocalStorage = (key) => localStorage.getItem(key)

// 从 LocalStorage 删除保存的数据
const removeLocalStorage = (key) => localStorage.removeItem(key)

// 从 LocalStorage 删除所有保存的数据
const ClearAllLocalStorage = () => localStorage.clear()

export default {
  SetSessionStorage,
  GetSessionStorage,
  removeSessionStorage,
  ClearAllSessionStorage,
  SetLocalStorage,
  GetLocalStorage,
  removeLocalStorage,
  ClearAllLocalStorage
}
