import React from "react"
import ReactDom from "react-dom"
import App from "./App"
// 不导入任何内容,只是为了让对应模块中的代码执行一次

import "./utils/fixed"

ReactDom.render(<App />, document.getElementById("root"))
