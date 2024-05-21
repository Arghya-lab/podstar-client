import { useGlobalStates } from "@/providers/globalStates-provider";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

function RequireUnverifiedUser({ children }: { children: ReactNode }) {
  const { user } = useGlobalStates();

  if ((user && user.isVerified) || !user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RequireUnverifiedUser;
