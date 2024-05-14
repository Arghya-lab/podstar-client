import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginFormSchema } from "@/schemas";
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
import Google from "@/components/ui/Google";
import { TypographyMuted } from "@/components/ui/typography";
import config from "@/config";
import useLogin from "@/hooks/useLogin";

function LoginComponent({ successRedirect }: { successRedirect: string }) {
  const handleLogin = useLogin();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    await handleLogin(values.email, values.password, successRedirect);
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl tracking-wider">
          Login with Podstar
        </CardTitle>
        <CardDescription>
          Continue with google or enter login credentials.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <a href={`${config.apiBaseUrl}/auth/google`}>
              <Google size={18} className="pr-3" />
              Login with Google
            </a>
          </Button>
        </div>
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center uppercase">
            <TypographyMuted className="bg-card px-2 text-xs">
              Or continue with
            </TypographyMuted>
          </div>
        </div>
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
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
}

export default LoginComponent;
