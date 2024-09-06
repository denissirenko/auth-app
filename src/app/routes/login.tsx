import { createFileRoute } from "@tanstack/react-router";
import SignUpForm from "../../shared/components/signUpForm";
import { Heading } from "@radix-ui/themes";

export const Route = createFileRoute("/login")({
  component: () => (
    <>
      <Heading as="h1" align="center">
        Login
      </Heading>
      <SignUpForm />
    </>
  ),
});
