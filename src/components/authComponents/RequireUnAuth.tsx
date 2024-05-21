import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalStates } from "@/providers/globalStates-provider";

function RequireUnAuth({ children }: { children: ReactNode }) {
  const { user } = useGlobalStates();

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RequireUnAuth;
