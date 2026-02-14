import { BrowserRouter, Route, Routes } from "react-router";

import Home from "@/pages/Home";
import BackgroundPattern from "@/components/BackgroundPattern";
import { GameProvider } from "@/contexts/GameContext";
import GameGuard from "@/components/GameGuard";
import BeginnerIntroPage from "@/pages/BeginnerIntro";
import BeginnerGamePage from "@/pages/BeginnerGame";
import ResultPage from "@/pages/Result";
import { BackgroundProvider } from "@/contexts/BackgroundContext";

function App() {
  return (
    <BrowserRouter basename="/lube/">
      <BackgroundProvider>
        <GameProvider>
          {/* 背景 */}
          <BackgroundPattern />

          {/* ルーティング */}
          <Routes>
            <Route index element={<Home />} />

            <Route path="beginner">
              <Route index element={<BeginnerIntroPage />} />
              <Route element={<GameGuard />}>
                <Route path="game" element={<BeginnerGamePage />} />
                <Route path="result" element={<ResultPage />} />
              </Route>
            </Route>
          </Routes>
        </GameProvider>
      </BackgroundProvider>
    </BrowserRouter>
  );
}

export default App;
