import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function ProtectedRouter({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, fetchStatus } = useUser();

  if (!isAuthenticated && fetchStatus !== "fetching") {
    return navigate("/login");
  }

  if (isAuthenticated) return children;
}

export default ProtectedRouter;
