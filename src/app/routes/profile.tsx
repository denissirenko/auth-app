import { Heading } from "@radix-ui/themes";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context.authentication;
    if (!isAuthenticated) {
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
