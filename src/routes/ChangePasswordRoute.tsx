import { zodResolver } from "@hookform/resolvers/zod";
import axios, { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import config from "@/config";
import { updatePasswordFormSchema } from "@/schemas";
import { useNavigate } from "react-router-dom";
import { ApiResponseType } from "@/@types/res";
import { ScrollArea } from "@/components/ui/scroll-area";

function ChangePasswordRoute() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof updatePasswordFormSchema>>({
    resolver: zodResolver(updatePasswordFormSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof updatePasswordFormSchema>) {
    try {
      const { data }: { data: ApiResponseType } = await axios.post(
        `${config.apiBaseUrl}/auth/change-password`,
        {
          password: values.password,
          newPassword: values.newPassword,
        },
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        console.log(data.message);
        navigate("/");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
  }

  return (
    <ScrollArea className="w-full">
      <main className="flex-1 flex justify-center px-4 pt-12 pb-8">
        <Card className="w-full max-w-md m-4">
          <CardHeader>
            <CardTitle>Signup with Podstar</CardTitle>
            <CardDescription>
              To signup fill the form with proper credentials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8">
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
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          autoComplete="off"
                          placeholder="Enter your new password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmNewPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
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
        </Card>
      </main>
    </ScrollArea>
  );
}

export default ChangePasswordRoute;
