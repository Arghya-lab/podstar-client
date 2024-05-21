import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographySpan } from "@/components/ui/typography";
import { useGlobalStates } from "@/providers/globalStates-provider";
import LoginComponent from "@/components/authComponents/LoginComponent";
import SignupComponent from "@/components/authComponents/SignupComponent";
import { ScrollArea } from "@/components/ui/scroll-area";

function LoginRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useGlobalStates();

  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from);
  }

  const [formType, setFormType] = useState<"login" | "signup">("login");

  return (
    <ScrollArea className="w-full">
      <main className="flex-1 flex justify-center px-4 pt-12 pb-8">
        <Card className="w-full max-w-md">
          {formType === "login" ? (
            <LoginComponent successRedirect={from} />
          ) : (
            <SignupComponent successRedirect={from} />
          )}
          <CardFooter className="flex-col items-start">
            {formType === "login" && (
              <Button variant="link" className="px-0" asChild>
                <a href="/forgot-password">Forgot password</a>
              </Button>
            )}
            <div>
              <TypographySpan>
                {formType === "login"
                  ? "Don’t have an account?"
                  : "Have an account?"}
              </TypographySpan>
              <Button
                variant="link"
                onClick={() =>
                  setFormType((pre) => (pre === "login" ? "signup" : "login"))
                }>
                {formType === "login" ? "Signup" : "Login"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </ScrollArea>
  );
}

export default LoginRoute;
