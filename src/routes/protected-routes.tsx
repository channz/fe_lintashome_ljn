import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const authProtected = [`/login`, `/register`];
  const protectedByToken = [`/`];

  //   if (authProtected.includes(pathname)) {
  //     return <Navigate to={"/"} />;
  //   }

  //   if (protectedByToken.includes(pathname)) {
  //     return <Navigate to={"login"} />;
  //   }

  return <Outlet />;
};

export default ProtectedRoutes;
