import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";

const schema = yup.object().shape({
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

const SignUpForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();
  const navigate = useNavigate({ from: "/login" });

  const onSubmit = (data: { username: string; password: string }) => {
    const { username, password } = data;

    if (username === "admin" && password === "Test1234!") {
      setErrorMessage("");
      signIn();
      navigate({ to: "/profile" });
    } else {
      setErrorMessage("This user does not exist");
    }
  };

  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>

      <Form.Field name="username" className="mb-4">
        <Form.Label
          className="block mb-2 text-sm font-medium"
          htmlFor="username"
        >
          Login
        </Form.Label>
        <TextField.Root
          id="username"
          {...register("username")}
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.username && (
          <Form.Message className="text-red-500 text-sm mt-1">
            {errors.username.message}
          </Form.Message>
        )}
      </Form.Field>

      <Form.Field name="password" className="mb-4">
        <Form.Label
          className="block mb-2 text-sm font-medium"
          htmlFor="password"
        >
          Password
        </Form.Label>
        <TextField.Root
          id="password"
          {...register("password")}
          type="password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <Form.Message className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </Form.Message>
        )}
      </Form.Field>

      {errorMessage && (
        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
      )}

      <Form.Submit asChild>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Sign in
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default SignUpForm;
