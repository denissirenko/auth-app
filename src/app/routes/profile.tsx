import { createFileRoute, redirect } from "@tanstack/react-router";
import ProfilePage from "../../pages/profile";

export const Route = createFileRoute("/profile")({
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context.authentication;
    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: () => <ProfilePage />,
});
