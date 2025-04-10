import { AdminLogin } from "@/features/admin/login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AdminLogin />;
}
