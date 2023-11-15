import Home from "./Pages/Home/Home";
import Password from "./Pages/Login/Password";
import Number from "./Pages/Login/Number";
import Otp from "./Pages/Login/otp";
import LoginPages from "./Pages/Login/LoginPages";

const routes  =  [
    { path: '/', element: <Home /> },
    { path: '/login', element: <LoginPages /> },
    { path: '/password-set', element: <Password /> },
    { path: '/number-set', element: <Number /> },
    { path: '/otp', element: <Otp /> },
]

export default routes