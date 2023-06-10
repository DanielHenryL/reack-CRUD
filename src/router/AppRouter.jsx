import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { UsersApp } from "../Users/UsersApp";
import { About } from "../components/About";
import { Users } from "../components/Users";
import { ListUser } from "../components/ListUser";

const router = createBrowserRouter([
    {
      path: "/",
      element: <UsersApp/>,
      children:[
        {
            path:'/about/',
            element:<About/>,
        },
        {
            path:'/users/create/',
            element:<Users/>
        },
        {
          path:'/users/list/',
          element:<ListUser/>
        },
        {
            path:'/',
            element:<Navigate to={'/users/create/'}/>
        }
      ]
    },
  ]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
