import { createFileRoute } from "@tanstack/react-router";
import { Heading } from "@radix-ui/themes";

export const Route = createFileRoute("/about")({
  component: () => (
    <Heading as="h1" align="center">
      About
    </Heading>
  ),
});
