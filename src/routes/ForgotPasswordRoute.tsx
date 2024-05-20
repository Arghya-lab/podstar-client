import ForgotPasswordEmailForm from "@/components/authComponents/ForgotPasswordEmailForm";
import ForgotPasswordOtpTokenForm from "@/components/authComponents/ForgotPasswordOtpTokenForm";
import ForgotPasswordSetPasswordForm from "@/components/authComponents/ForgotPasswordSetPasswordForm";
import { useState } from "react";

export interface StateType {
  email: string;
  newPassword: string;
  forgotPasswordOtp: string;
}

function ForgotPasswordRoute() {
  const [state, setState] = useState<StateType>({
    email: "",
    newPassword: "",
    forgotPasswordOtp: "",
  });

  return (
    <main className="flex-1 flex justify-center items-center">
      {state.email === "" && <ForgotPasswordEmailForm setState={setState} />}
      {state.email && state.newPassword === "" && (
        <ForgotPasswordSetPasswordForm setState={setState} state={state} />
      )}
      {state.email && state.newPassword && (
        <ForgotPasswordOtpTokenForm state={state} />
      )}
    </main>
  );
}

export default ForgotPasswordRoute;
