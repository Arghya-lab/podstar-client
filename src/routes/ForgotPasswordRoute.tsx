import ForgotPasswordEmailForm from "@/components/authComponents/ForgotPasswordEmailForm";
import ForgotPasswordOtpTokenForm from "@/components/authComponents/ForgotPasswordOtpTokenForm";
import ForgotPasswordSetPasswordForm from "@/components/authComponents/ForgotPasswordSetPasswordForm";
import { ScrollArea } from "@/components/ui/scroll-area";
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
    <ScrollArea className="w-full">
      <main className="flex-1 flex justify-center px-4 pt-12 pb-8">
        {state.email === "" && <ForgotPasswordEmailForm setState={setState} />}
        {state.email && state.newPassword === "" && (
          <ForgotPasswordSetPasswordForm setState={setState} state={state} />
        )}
        {state.email && state.newPassword && (
          <ForgotPasswordOtpTokenForm state={state} />
        )}
      </main>
    </ScrollArea>
  );
}

export default ForgotPasswordRoute;
