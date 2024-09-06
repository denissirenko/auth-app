import { createFileRoute, redirect } from "@tanstack/react-router";
import SignUpForm from "../../shared/components/signUpForm";
import { Heading } from "@radix-ui/themes";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context.authentication;
    if (isAuthenticated) {
      throw redirect({
        to: "/profile",
      });
    }
  },
  component: () => (
    <>
      <Heading as="h1" align="center">
        Login
      </Heading>
      <SignUpForm />
    </>
  ),
});
