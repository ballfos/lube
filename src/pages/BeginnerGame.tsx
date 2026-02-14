import { SpeechBubble } from "@/components/SpeechBubble";
import { TopicCard } from "@/components/TopicCard";
import { ShinyButton } from "@/components/ui/Button";
import { useBackgroundContext } from "@/contexts/BackgroundContext";
import { useGameContext } from "@/contexts/GameContext";
import useTopic from "@/hooks/useTopic";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type Phase = "waiting" | "thinking" | "interviewing";

/**
 * ビギナーモードのゲーム画面
 *
 * 画面構成
 * - 吹き出し（「お題を引こう」「思考タイム」「面接タイム」）
 * - お題カード
 * - お題を引くボタン+残りリロール回数
 * - 進行ボタン（「面接に進む」「次のプレイヤーへ」「投票に進む」のどれか）
 */
export default function BeginnerGamePage() {
  const navigate = useNavigate();
  const { addPlayLog, playLogs, playerCount } = useGameContext();
  const { topicData, isLoading, error, fetchTopic, clearTopic } = useTopic();
  const [phase, setPhase] = useState<Phase>("waiting");
  const { setVariant } = useBackgroundContext();

  useEffect(() => {
    switch (phase) {
      case "waiting":
        setVariant("waiting");
        break;
      case "thinking":
        setVariant("thinking");
        break;
      case "interviewing":
        setVariant("interviewing");
        break;
    }
  }, [setVariant, phase]);

  const { content: speechBubbleContent, variant: speechBubbleVariant } =
    DataForSpeechBubble(phase);

  const { content: proceedButtonContent, variant: proceedButtonVariant } =
    DataForProceedButton(phase, playerCount, playLogs.length);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <SpeechBubble variant={speechBubbleVariant}>
        {speechBubbleContent}
      </SpeechBubble>
      <TopicCard
        topic={topicData?.topic || "-----"}
        isLoading={isLoading}
        error={error || undefined}
      />
      <ShinyButton
        variant={proceedButtonVariant}
        onClick={() => {
          if (phase === "waiting") {
            fetchTopic();
            setPhase("thinking");
          } else if (phase === "thinking") {
            addPlayLog({
              topic: topicData?.topic || "-----",
              example: topicData?.example || "-----",
            });
            setPhase("interviewing");
          } else if (phase === "interviewing") {
            if (playLogs.length >= playerCount) {
              navigate("/beginner/result");
            } else {
              setPhase("waiting");
              clearTopic();
            }
          }
        }}
      >
        {proceedButtonContent}
      </ShinyButton>
    </div>
  );
}

function DataForSpeechBubble(phase: Phase) {
  switch (phase) {
    case "waiting":
      return {
        content: "お題を引こう",
        variant: "yellow" as const,
      };
    case "thinking":
      return {
        content: "思考タイム",
        variant: "blue" as const,
      };
    case "interviewing":
      return {
        content: "面接タイム",
        variant: "red" as const,
      };
    default:
      return {
        content: "",
        variant: "blue" as const,
      };
  }
}

function DataForProceedButton(
  phase: Phase,
  totalPlayers: number,
  currentPlayer: number,
) {
  switch (phase) {
    case "waiting":
      return {
        content: "お題を引く",
        variant: "yellow" as const,
      };
    case "thinking":
      return {
        content: "面接に進む",
        variant: "blue" as const,
      };
    case "interviewing":
      return {
        content:
          currentPlayer >= totalPlayers ? "投票に進む" : "次のプレイヤーへ",
        variant: "pink" as const,
      };
    default:
      return {
        content: "",
        variant: "blue" as const,
      };
  }
}
