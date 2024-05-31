import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function VerifyEmailCard() {
  return (
    <div className="pb-4 w-full">
      <Card className="w-full flex flex-col sm:flex-row items-center justify-between">
        <CardHeader>
          <CardTitle>Your email is not verified</CardTitle>
          <CardDescription>
            We send verification link in your email. Please verify your email.
            If you did not got email then create another one by clicking button.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between sm:pb-0">
          <Button asChild>
            <Link to="/resend-verify-email">Resend verification link</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default VerifyEmailCard;
