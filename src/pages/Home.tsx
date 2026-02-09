import { ShinyButton } from "@/components/ui/Button";
import { useNavigate } from "react-router";

const COMMON_BUTTON_CLASSES = "w-52 ";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex h-svh w-screen flex-col items-center justify-center gap-4">
      <h1 className="font-c text-4xl font-bold">Lube</h1>
      <h2 className="font-m mb-6 text-center text-sm font-medium">
        「あなたをモノに例えるとなんですか？」
        <br /> から始まる即興面接ゲーム
      </h2>
      <ShinyButton
        variant="purple"
        className={COMMON_BUTTON_CLASSES}
        onClick={() => {}}
      >
        ルールせつめい
      </ShinyButton>
      <ShinyButton
        variant="orange"
        className={COMMON_BUTTON_CLASSES}
        onClick={() => {
          navigate("/game?mode=easy");
        }}
      >
        ビギナーモード
      </ShinyButton>
      <ShinyButton
        variant="orange"
        className={COMMON_BUTTON_CLASSES}
        onClick={() => {
          navigate("/game?mode=normal");
        }}
      >
        ノーマルモード
      </ShinyButton>
      <ShinyButton
        variant="orange"
        className={COMMON_BUTTON_CLASSES}
        onClick={() => {
          alert("準備中です");
        }}
        disabled
      >
        カオスモード
      </ShinyButton>
    </div>
  );
}
