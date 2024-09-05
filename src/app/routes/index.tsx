import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@radix-ui/themes";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <h1 className="text-center text-3xl font-bold underline">Home</h1>
      <Button>Let's go</Button>
    </>
  ),
});
