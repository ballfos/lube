import { cn } from "@/utils";
import { AnimatePresence, motion } from "motion/react";

type PopDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string; // 枠の色などを変えたい時用
};

export const PopDialog = ({
  isOpen,
  onClose,
  children,
  className,
}: PopDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* --- 1. 背景（黒い幕） --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          />

          {/* --- 2. ダイアログ本体 --- */}
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              // ▼ 登場アニメーション（バネ）
              initial={{ scale: 0.5, opacity: 0, y: 50, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 50,
                transition: { damping: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15, // ここがプルプル感のキモ
              }}
              className={cn(
                "pointer-events-auto relative w-[90%] max-w-md",
                "bg-white p-8 shadow-2xl",
                "border-8 border-rose-400", // 極太ボーダー
                "rounded-[3rem]", // 超・角丸
                "text-center",
                className,
              )}
            >
              {/* コンテンツ */}
              <div className="relative z-10 font-bold text-slate-600">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
