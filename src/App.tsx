import { Route, Routes } from "react-router";
import Game from "@/pages/Game";
import Home from "@/pages/Home";
import BackgroundPattern from "@/components/BackgroundPattern";

function App() {
  return (
    <>
      <BackgroundPattern />
      <Routes>
        <Route index element={<Home />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
