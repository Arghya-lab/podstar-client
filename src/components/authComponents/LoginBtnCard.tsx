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
      <Card className="w-full h-min flex flex-col xs:flex-row justify-between">
        <CardHeader>
          <CardTitle>You are not Login</CardTitle>
          <CardDescription>Please login to Podstar</CardDescription>
        </CardHeader>
        <CardFooter className="xs:pt-6">
          <Button onClick={handleBtnClick}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginBtnCard;
