const {
  override,
  fixBabelImports,
  addPostcssPlugins,
} = require("customize-cra");

// antd-mobile按需加载
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  // rem适配,将px改为rem
  // remUnit 如果这个值的结果是100表示使用第一种rem适配方案
  // remUnit 如果这个值的结果是37.5表示使用第二种rem适配方案
  // 注意:设置根标签字体大小的代码要和这里的使用方式保持一致

  addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })])
);
