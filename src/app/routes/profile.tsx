import { Heading } from "@radix-ui/themes";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: () => (
    <>
      <Heading as="h1" align="center">
        Profile
      </Heading>
      <Heading as="h2" align="center">
        Hello world!!!
      </Heading>
    </>
  ),
});
