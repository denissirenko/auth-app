import { Heading } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Heading as="h1" align="center">
        Home
      </Heading>
    </>
  ),
});
