import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function LoginBtnCard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBtnClick = () => {
    navigate("/login", {
      state: { from: location },
    });
  };

  return (
    <div className="p-4 w-full flex justify-center">
      <Card className="w-full h-min max-w-md">
        <CardHeader>
          <CardTitle>You are not Login</CardTitle>
          <CardDescription>
            Please login to continue@/components
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center pt-6">
          <Button onClick={handleBtnClick}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginBtnCard;
