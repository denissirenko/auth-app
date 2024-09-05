import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { Heading } from "@radix-ui/themes";
import MainLayout from "../../shared/layouts/mainLayout";

export const Route = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  notFoundComponent: () => (
    <div className="flex flex-col items-center gap-6">
      <Heading as="h1">This page doesn't exist!</Heading>
      <Link href="/">Go Home</Link>
    </div>
  ),
});
