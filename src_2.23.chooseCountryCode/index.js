import React from "react";
import ReactDom from "react-dom";
// 因为只需要调用以下而不是拿到什么,所以直接引入即可
import "./utils/fixed";

import App from "./App";
ReactDom.render(<App />, document.getElementById("root"));
