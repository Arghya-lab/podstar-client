import { z } from "zod";
import MailChecker from "mailchecker";

const validateEmail = () =>
  z
    .string()
    .min(1, { message: "email is required." })
    .refine((val) => MailChecker.isValid(val), {
      message: "email is not valid.",
    });

export default validateEmail;
