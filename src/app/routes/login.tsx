import { createFileRoute, redirect } from "@tanstack/react-router";
import LoginPage from "../../pages/login";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context.authentication;
    if (isAuthenticated) {
      throw redirect({
        to: "/profile",
      });
    }
  },
  component: () => <LoginPage />,
});
