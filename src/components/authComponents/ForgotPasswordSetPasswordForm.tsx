import { Dispatch, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, PasswordInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { passwordForgotPasswordSchema } from "@/schemas";
import config from "@/config";
import { StateType } from "@/routes/ForgotPasswordRoute";
import { ApiResponseType } from "@/@types/res";

function ForgotPasswordSetPasswordForm({
  state,
  setState,
}: {
  state: StateType;
  setState: Dispatch<SetStateAction<StateType>>;
}) {
  const form = useForm<z.infer<typeof passwordForgotPasswordSchema>>({
    resolver: zodResolver(passwordForgotPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof passwordForgotPasswordSchema>
  ) {
    try {
      const {
        data,
      }: {
        data: ApiResponseType;
      } = await axios.get(
        `${config.apiBaseUrl}/auth/send-forgotPassword-token`,
        {
          params: { email: state.email },
        }
      );
      if (data.success) {
        setState((prev) => ({ ...prev, newPassword: values.password }));
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
    <Card className="w-full max-w-md m-4">
      <CardHeader>
        <CardTitle>Reset account password</CardTitle>
        <CardDescription>
          Enter a new password for {state.email}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      autoComplete="off"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="off"
                      placeholder="Re enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Reset Password
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default ForgotPasswordSetPasswordForm;
