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

export const passwordForgotEmailSchema = z.object({
  email: validateEmail(),
});

export const passwordForgotPasswordSchema = z
  .object({
    password: validatePassword(),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const otpTokenFormSchema = z.object({
  token: z
    .string()
    .min(6, {
      message: "Your otp token must be 6 characters.",
    })
    .max(6, {
      message: "Your otp token must be 6 characters.",
    }),
});

export const updatePasswordFormSchema = z
  .object({
    password: validatePassword(),
    newPassword: validatePassword(),
    confirmNewPassword: z.string(),
  })
  .refine(
    ({ newPassword, confirmNewPassword }) => newPassword === confirmNewPassword,
    {
      message: "Passwords don't match",
      path: ["confirmNewPassword"],
    }
  );
