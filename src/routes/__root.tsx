import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NotFound } from "@/uiUtilities/notFound";
import { ErrorBoundary } from "@/uiUtilities/errorBoundary";

export const Route = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <Outlet />,
    </ErrorBoundary>
  ),
  notFoundComponent: () => <NotFound />,
});
