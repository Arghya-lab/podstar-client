import { z } from "zod";
import validateUserName from "@/schemas/validators/userName";
import validateEmail from "@/schemas/validators/email";
import validatePassword from "@/schemas/validators/password";

export const loginFormSchema = z.object({
  email: validateEmail(),
  password: validatePassword(),
});

export const signupFormSchema = z
  .object({
    userName: validateUserName(),
    email: validateEmail(),
    password: validatePassword(),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
