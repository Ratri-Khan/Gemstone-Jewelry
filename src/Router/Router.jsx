import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import AddJewelry from "../Component/AddJewelry/AddJewelry";
import AllJewelry from "../Component/AllJewelry/AllJewelry";

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
          path: "/allJewelry",
          element: <AllJewelry></AllJewelry>,
          loader: () =>fetch('http://localhost:3000/jewelry')
      },
      ],
    },
  ]);
  export default router;