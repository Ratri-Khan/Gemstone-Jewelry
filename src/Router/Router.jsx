import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import AddJewelry from "../Component/AddJewelry/AddJewelry";
import AllJewelry from "../Component/AllJewelry/AllJewelry";
import Details from "../Component/Details/Details";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/Signup";
import MyJewelry from "../Component/MyJewelry/MyJewelry";

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
        element: <AddJewelry></AddJewelry>,
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
        loader: () => fetch('http://localhost:3000/jewelry')
      },
      {
        path: "/myJewelry",
        element: <MyJewelry></MyJewelry>
      },
      {
        path: "/details/:_id",
        element: <Details></Details>,
        loader: ({ params }) =>fetch(`http://localhost:3000/jewelry/${params._id}`),
      },
      
    ],
  },
]);
export default router;