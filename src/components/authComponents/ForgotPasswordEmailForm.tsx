import { Dispatch, SetStateAction } from "react";
import axios, { isAxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { passwordForgotEmailSchema } from "@/schemas";
import config from "@/config";
import { StateType } from "@/routes/ForgotPasswordRoute";
import { ApiResponseType } from "@/@types/res";

function ForgotPasswordEmailForm({
  setState,
}: {
  setState: Dispatch<SetStateAction<StateType>>;
}) {
  async function onSubmit(values: z.infer<typeof passwordForgotEmailSchema>) {
    try {
      const {
        data,
      }: {
        data: ApiResponseType;
      } = await axios.get(
        `${config.apiBaseUrl}/auth/validateEmail-for-forgotPassword`,
        {
          params: { email: values.email },
        }
      );
      if (data.success) {
        setState((prev) => ({ ...prev, email: values.email }));
      } else {
        console.error(data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.message);
      }
    }
  }
  const form = useForm<z.infer<typeof passwordForgotEmailSchema>>({
    resolver: zodResolver(passwordForgotEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Card className="w-full max-w-md m-4">
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
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

export default ForgotPasswordEmailForm;
