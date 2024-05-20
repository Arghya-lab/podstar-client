import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import config from "@/config";
import { StateType } from "@/routes/ForgotPasswordRoute";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { otpTokenFormSchema } from "@/schemas";
import { ApiResponseType } from "@/@types/res";

function ForgotPasswordOtpTokenForm({ state }: { state: StateType }) {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof otpTokenFormSchema>>({
    resolver: zodResolver(otpTokenFormSchema),
    defaultValues: {
      token: "",
    },
  });

  async function onSubmit(values: z.infer<typeof otpTokenFormSchema>) {
    try {
      const {
        data,
      }: {
        data: ApiResponseType;
      } = await axios.post(
        `${config.apiBaseUrl}/auth/resetPassword-withToken`,
        {
          email: state.email,
          password: state.newPassword,
          token: values.token,
        }
      );
      if (data.success) {
        console.log(data.message);
        navigate("/login");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.message);
      }
    }
  }

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>Password reset token</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                    Please enter the one time token sent to your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default ForgotPasswordOtpTokenForm;
