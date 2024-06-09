import { useToken } from "@/utils/contexts/token";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { token } = useToken();

  const authProtected = [`/login`, `/register`];
  const protectedByToken = [`/`];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to={"/"} />;
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) {
      toast("You need to login first");
      return <Navigate to={"login"} />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
