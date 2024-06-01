import Homepage from "@/pages";
import Login from "@/pages/authentication/login";
import Register from "@/pages/authentication/register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./protected-routes";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
