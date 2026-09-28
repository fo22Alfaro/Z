import { createFileRoute } from "@tanstack/react-router";
import { AotsLab } from "@/components/aots-lab";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <AotsLab />;
}
