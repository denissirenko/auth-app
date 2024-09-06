import {
  Outlet,
  Link,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { Heading } from "@radix-ui/themes";
import MainLayout from "../../shared/layouts/mainLayout";
import { AuthContext } from "../../shared/hooks/useAuth";

type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  notFoundComponent: () => (
    <div className="flex flex-col items-center gap-6">
      <Heading as="h1">This page doesn't exist!</Heading>
      <Link to="/" className="underline text-blue-500 hover:text-blue-700">
        Go Home
      </Link>
    </div>
  ),
});
