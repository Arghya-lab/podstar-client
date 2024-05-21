import { ApiResponseType } from "@/@types/res";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import config from "@/config";
import axios, { isAxiosError } from "axios";

function ResendVerifyEmailRoute() {
  const handleSendVerificationEmail = async () => {
    try {
      const { data }: { data: ApiResponseType } = await axios.get(
        `${config.apiBaseUrl}/auth/resend-verify-email`,
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        console.log(data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("user not login");
      }
    }
  };

  return (
    <ScrollArea className="w-full">
      <main className="flex-1 flex justify-center px-4 pt-12 pb-8">
        <Card className="w-full max-w-sm h-min text-center">
          <CardHeader>
            <CardTitle>Please verify your email</CardTitle>
            <CardDescription>You almost there.</CardDescription>
          </CardHeader>
          <CardContent>
            <TypographyP>Your verification link has been expired.</TypographyP>
            <TypographyMuted>
              To get new verification link click on button below :
            </TypographyMuted>
          </CardContent>
          <CardFooter className="flex justify-center items-center pt-4">
            <Button onClick={handleSendVerificationEmail}>
              Resend Verification Email
            </Button>
          </CardFooter>
        </Card>
      </main>
    </ScrollArea>
  );
}

export default ResendVerifyEmailRoute;
