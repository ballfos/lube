import { ShinyButton } from "@/components/ui/Button";
import { PopDialog } from "@/components/ui/Dialog";
import { useBackgroundContext } from "@/contexts/BackgroundContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const COMMON_BUTTON_CLASSES = "w-52 ";

export default function Home() {
  const navigate = useNavigate();
  const { setVariant } = useBackgroundContext();

  useEffect(() => {
    setVariant("home");
  }, [setVariant]);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="flex min-h-svh w-screen flex-col items-center justify-center gap-4">
      <h1 className="font-m text-4xl font-bold">潤滑油</h1>
      <h2 className="font-m mb-6 text-center text-sm font-thin">
        「あなたをモノに例えるとなんですか？」
        <br /> から始まる即興面接ゲーム
      </h2>
      <ShinyButton
        variant="purple"
        className={COMMON_BUTTON_CLASSES}
        onClick={() => {
          setShowDialog(true);
        }}
        delay={0}
      >
        ルール説明
      </ShinyButton>
      <ShinyButton
        variant="orange"
        className={COMMON_BUTTON_CLASSES}
        onClick={() => {
          navigate("/beginner");
        }}
        delay={0.1}
      >
        ビギナーモード
      </ShinyButton>
      <ShinyButton
        variant="orange"
        className={COMMON_BUTTON_CLASSES}
        onClick={() => {
          navigate("/normal");
        }}
        delay={0.2}
      >
        ノーマルモード
      </ShinyButton>
      <ShinyButton
        variant="orange"
        className={COMMON_BUTTON_CLASSES}
        onClick={() => {
          alert("準備中です");
        }}
        delay={0.3}
      >
        カオスモード
      </ShinyButton>

      {/* ダイアログ */}
      <PopDialog
        isOpen={showDialog}
        title="ルール説明"
        onClose={() => setShowDialog(false)}
      >
        <p>ここにルール説明が入ります。</p>
      </PopDialog>
    </div>
  );
}
