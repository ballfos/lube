import { useSearchParams } from "react-router";

export default function Game() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  return <div>Game Mode: {mode}</div>;
}
