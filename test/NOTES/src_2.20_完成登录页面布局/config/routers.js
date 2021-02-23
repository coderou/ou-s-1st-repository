// 由于项目中可能有多个页面,手动定义Route组件就不是很方便了,所以定义一个数组,根据数组动态渲染Route组件
import Home from "../pages/Home";
import Login from "../pages/Login";
// 这个数组最终要渲染出来一个个的Route组件,所以这个数组又被人为的称为路由表
let routers = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];
export default routers;
