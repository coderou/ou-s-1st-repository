import Home from "../pages/Home";
import Login from "../pages/Login";
import registerPhone from '../pages/Register/Registerphone'
import RegisterCode from '../pages/Register/RegisterCode';
import RegisterPassword from '../pages/Register/RegisterPassword';
import Country from '../pages/Country';

const routersArr = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/Home",
    component: Home,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/register/phone",
    component: registerPhone,
  },
  {
    path: "/register/code",
    component: RegisterCode,
  },
  {
    path: "/register/password",
    component: RegisterPassword,
  },
  {
    path: "/country",
    component: Country,
  },
];

export default routersArr;
