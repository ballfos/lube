import { useBackgroundContext } from "@/contexts/BackgroundContext";
import { useGameContext } from "@/contexts/GameContext";
import { useEffect } from "react";
import PointingPng from "@/assets/pointing.png";
import { ShinyButton } from "@/components/ui/Button";
import { useNavigate } from "react-router";

export default function ResultPage() {
  const navigate = useNavigate();
  const { setVariant } = useBackgroundContext();
  const { playLogs } = useGameContext();

  useEffect(() => {
    setVariant("result");
  }, [setVariant]);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      {/* TODO: 指差し投票を促す画像とテキストを配置 */}
      <div className="relative flex min-h-svh flex-col items-center justify-center gap-4">
        <img src={PointingPng} alt="指差し画像" className="w-100 max-w-dvw" />
        <p className="font-n text-lg text-gray-700">
          一番上手だった人を指差して投票しよう！
        </p>
        <ShinyButton
          variant="purple"
          onClick={() => {
            navigate("/");
          }}
        >
          タイトルに戻る
        </ShinyButton>

        <h4 className="font-n absolute bottom-10 text-2xl text-gray-500">
          ↓↓↓模範解答↓↓↓
        </h4>
      </div>

      {/* TODO: 振り返りようにお題と模範解答をリストで表示 */}
      {/* TODO: コンポーネント(ExampleCard.tsx)に切り出し */}
      <div className="flex flex-col items-center justify-center gap-4">
        {playLogs.map((log, index) => (
          <div
            key={index}
            className="rounded-2xl border-8 border-purple-300 bg-white p-4"
          >
            <h3 className="font-n text-lg font-bold text-gray-800">
              {log.topic} ({index + 1}番のお題)
            </h3>
            <p className="font-n text-sm text-gray-600">{log.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
