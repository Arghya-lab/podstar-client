import { z } from "zod";
import passwordValidator from "password-validator";

const validatePassword = () =>
  z
    .string()
    .min(8, { message: "password must be at least 8 characters." })
    .max(32, { message: "password should not be more than 32 characters." })
    .refine((val) => new passwordValidator().has().uppercase().validate(val), {
      message: "password must have a uppercase letter.",
    })
    .refine((val) => new passwordValidator().has().lowercase().validate(val), {
      message: "password must have a lowercase letter.",
    })
    .refine((val) => new passwordValidator().has().digits().validate(val), {
      message: "password must have a digit.",
    })
    .refine(
      (val) => new passwordValidator().has().not().spaces().validate(val),
      {
        message: "password should not have space.",
      }
    )
    .refine((val) => new passwordValidator().has().symbols().validate(val), {
      message: "password must have a symbol.",
    });

export default validatePassword;
