import * as yup from "yup";

const LoginSchema = yup.object().shape({
  username: yup.string().required("Login is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a number")
    .matches(/[@$!%*?&]/, "Password must contain a special character"),
});

export { LoginSchema };
