import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { isAxiosError } from "axios";
import config from "@/config";
import useLogin from "@/hooks/useLogin";
import { signupFormSchema } from "@/schemas";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, PasswordInput } from "@/components/ui/input";
import { ApiResponseType } from "@/@types/res";

function SignupComponent({ successRedirect }: { successRedirect: string }) {
  const handleLogin = useLogin();

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    try {
      const { data }: { data: ApiResponseType } = await axios.post(
        `${config.apiBaseUrl}/auth/signup`,
        {
          userName: values.userName,
          email: values.email,
          password: values.password,
        }
      );
      if (data.success) {
        await handleLogin(values.email, values.password, successRedirect);
      } else {
        console.log("error in signup", data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <CardHeader>
        <CardTitle>Signup with Podstar</CardTitle>
        <CardDescription>
          To signup fill the form with proper credentials.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      autoComplete="off"
                      placeholder="Enter your username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
}

export default SignupComponent;
