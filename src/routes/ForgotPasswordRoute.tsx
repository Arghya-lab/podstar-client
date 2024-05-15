import { useState } from "react";
import ForgotPasswordEmailForm from "@/components/ForgotPasswordEmailForm";
import ForgotPasswordSetPasswordForm from "@/components/ForgotPasswordSetPasswordForm";
import ForgotPasswordOtpTokenForm from "@/components/ForgotPasswordOtpTokenForm";

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
    <div className="flex-1 flex justify-center items-center">
      {state.email === "" && <ForgotPasswordEmailForm setState={setState} />}
      {state.email && state.newPassword === "" && (
        <ForgotPasswordSetPasswordForm setState={setState} state={state} />
      )}
      {state.email && state.newPassword && (
        <ForgotPasswordOtpTokenForm state={state} />
      )}
    </div>
  );
}

export default ForgotPasswordRoute;
