import { HomeNoResp } from "@/features/home/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return <HomeNoResp />;
}
