import { ShinyButton } from "@/components/ui/Button";
import { PopDialog } from "@/components/ui/Dialog";
import { useBackgroundContext } from "@/contexts/BackgroundContext";
import { useGameContext } from "@/contexts/GameContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function BeginnerIntroPage() {
  const navigate = useNavigate();
  const { startGame } = useGameContext();
  const { setVariant } = useBackgroundContext();

  useEffect(() => {
    setVariant("intro");
  }, [setVariant]);
  return (
    <div className="flex min-h-svh items-center justify-center">
      <PopDialog isOpen={true} onClose={() => {}} className="gap-4">
        {/* ゲーム説明 */}
        <h2 className="font-n text-2xl font-bold text-rose-500 drop-shadow-sm">
          ビギナーモードの特徴
        </h2>
        {/* TODO: 説明の追加 */}
        <p className="font-n text-sm text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          dolore, dolor reiciendis minus blanditiis nemo nobis sit alias quia
          nam sint culpa quae aut, ducimus saepe. Recusandae provident vero
          facere.
        </p>

        {/* ゲーム設定 */}
        <h2 className="font-n text-2xl font-bold text-rose-500 drop-shadow-sm">
          ゲーム設定
        </h2>
        {/* TODO: プレイヤー人数のNumberInput追加 */}
        <p className="font-n text-sm text-gray-700">プレイヤー人数: 3人</p>

        {/* ゲーム開始ボタン */}
        <ShinyButton
          variant="orange"
          onClick={() => {
            startGame(3);
            navigate("/beginner/game");
          }}
        >
          ゲーム開始
        </ShinyButton>
      </PopDialog>
    </div>
  );
}
