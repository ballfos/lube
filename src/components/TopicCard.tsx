import { motion } from "motion/react";
import { cn } from "@/utils";

type TopicCardProps = {
  topic: string;
  error?: string;
  isLoading?: boolean;
  className?: string;
};

export const TopicCard = ({
  topic,
  error,
  isLoading,
  className,
}: TopicCardProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 30, rotate: -2 }}
      animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={cn(
        "relative flex w-full max-w-md flex-col items-center overflow-hidden rounded-[3rem] border-8 border-slate-100 bg-white shadow-sm",
        className,
      )}
    >
      <div className="flex w-full flex-col items-center justify-center px-8 py-16">
        <span className="mb-6 rounded-full bg-slate-100 px-6 py-2 text-sm font-bold tracking-widest text-slate-400">
          お題
        </span>

        {isLoading ? (
          <h2 className="w-full animate-pulse text-center text-5xl leading-tight font-black tracking-wider break-words text-slate-300 md:text-6xl">
            読み込み中...
          </h2>
        ) : (
          <h2 className="w-full text-center text-5xl leading-tight font-black tracking-wider break-words text-slate-800 md:text-6xl">
            {topic}
          </h2>
        )}

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        {/* {isLoading && (
          <p className="mt-4 text-sm text-gray-500">読み込み中...</p>
        )} */}
      </div>
    </motion.div>
  );
};
