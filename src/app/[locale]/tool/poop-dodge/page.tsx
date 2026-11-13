import MiniGamePage, { miniGameMetadata } from "@/components/mini-game/MiniGamePage";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return miniGameMetadata(params, "poop-dodge");
}

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  return <MiniGamePage params={params} slug="poop-dodge" />;
}
