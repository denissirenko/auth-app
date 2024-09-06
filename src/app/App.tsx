import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Theme } from "@radix-ui/themes";
import { useAuth } from "../shared/hooks/useAuth";

const router = createRouter({
  routeTree,
  context: { authentication: undefined! },
});

function App() {
  const authentication = useAuth();

  return (
    <Theme>
      <RouterProvider router={router} context={{ authentication }} />
    </Theme>
  );
}

export default App;
