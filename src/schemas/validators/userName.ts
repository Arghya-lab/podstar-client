import { z } from "zod";

const validateUserName = () =>
  z
    .string()
    .min(4, { message: "user name must be at least 4 characters." })
    .max(16, { message: "user name should not be more than 16 characters." });

export default validateUserName;
