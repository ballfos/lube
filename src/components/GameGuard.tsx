import { useGameContext } from "@/contexts/GameContext";
import { Navigate, Outlet } from "react-router";

export default function GameGuard() {
  const { isGameStarted } = useGameContext();
  if (!isGameStarted) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
