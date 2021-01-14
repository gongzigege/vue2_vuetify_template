// https://prettier.io/docs/en/options.html
module.exports = {
  // 代码单行最大长度
  printWidth: 100,
  tabWidth: 2,
  // 缩进使用 tabs 代替 空格
  useTabs: false,
  // 语句末尾是否添加分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象中至少有一个属性需要用引号引起来，则所有属性用引号引起来
  quoteProps: 'consistent',
  // JSX 中使用单引号
  jsxSingleQuote: false,
  // 没有尾随逗号
  trailingComma: 'none',
  // 在对象文字中的括号之间添加空格
  bracketSpacing: true,
  // 将非闭合的多行JSX元素的 > 放在下一行
  jsxBracketSameLine: false,
  // 箭头函数参数周围包括括号
  arrowParens: 'always',
  // 在文件顶部添加特俗注释表示格式化文件
  requirePragma: false,
  insertPragma: false
}
