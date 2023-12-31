import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import AddJewelry from "../Component/AddJewelry/AddJewelry";
import AllJewelry from "../Component/AllJewelry/AllJewelry";
import Details from "../Component/Details/Details";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/Signup";
import MyJewelry from "../Component/MyJewelry/MyJewelry";
import PrivateRoute from "./PrivateRoute";
import Error from "../Component/Error/Error";
import Blogs from "../Component/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addJewelry",
        element: <PrivateRoute><AddJewelry></AddJewelry></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allJewelry",
        element: <AllJewelry></AllJewelry>,
        loader: () => fetch('https://gemstone-jewelry-server.vercel.app/jewelry')
      },
      {
        path: "/myJewelry",
        element: <MyJewelry></MyJewelry>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/details/:_id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) =>fetch(`https://gemstone-jewelry-server.vercel.app/jewelry/${params._id}`),
      },
      
    ],
    errorElement: <Error></Error>
  },
]);
export default router;