import { useNavigate, useSearchParams } from "react-router-dom";
import axios, { isAxiosError } from "axios";
import config from "@/config";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VerifyEmailResType } from "@/@types/res";

function VerifyEmailRoute() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const handleVerifyBtnClick = async () => {
    try {
      const { data }: { data: VerifyEmailResType } = await axios.get(
        `${config.apiBaseUrl}/auth/verify-email`,
        {
          params: {
            token,
          },
          withCredentials: true,
        }
      );

      if (data.isTokenExpired === false) {
        navigate("/login");
      } else {
        navigate("/resend-verify-email");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.message);
      }
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center p-4">
      <Card className="w-full max-w-sm h-min">
        <CardHeader>
          <CardTitle className="text-center">
            Verify your email address
          </CardTitle>
          <CardDescription className="text-center">
            To verify your email address click below.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-12 pb-8">
          <Button className="w-full" onClick={handleVerifyBtnClick}>
            Click To Verify
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default VerifyEmailRoute;
