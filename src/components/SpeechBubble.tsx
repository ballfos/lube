import { motion, type HTMLMotionProps } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import React from "react";

const bubbleVariants = cva(
  "relative z-10 inline-flex items-center gap-4 px-8 py-4 rounded-full border-[6px] font-black tracking-widest shadow-[0_4px_0_rgba(0,0,0,0.1)] text-xl bg-white select-none",
  {
    variants: {
      variant: {
        blue: "border-sky-300 text-sky-500",
        red: "border-rose-300 text-rose-500",
        yellow: "border-yellow-400 text-yellow-600",
      },
    },
    defaultVariants: {
      variant: "blue",
    },
  },
);

const tailVariants = cva(
  "absolute top-full left-1/2 -translate-x-1/2 -mt-[16px] w-8 h-8 border-[6px] rotate-45 bg-white z-20",
  {
    variants: {
      variant: {
        blue: "border-sky-300 border-t-transparent border-l-transparent",
        red: "border-rose-300 border-t-transparent border-l-transparent",
        yellow: "border-yellow-400 border-t-transparent border-l-transparent",
      },
    },
    defaultVariants: {
      variant: "blue",
    },
  },
);

type SpeechBubbleProps = VariantProps<typeof bubbleVariants> & {
  children: React.ReactNode;
  isShaking?: boolean;
  className?: string;
};

export const SpeechBubble = ({
  children,
  isShaking = false,
  variant,
  className,
}: SpeechBubbleProps) => {
  const animationProps: HTMLMotionProps<"div"> = isShaking
    ? {
        animate: { x: [-2, 2, -2, 2, 0] },
        transition: { repeat: Infinity, duration: 0.4 },
      }
    : {
        animate: { y: [0, -6, 0] },
        transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
      };

  return (
    <motion.div
      {...animationProps}
      className={cn(
        "font-m relative inline-flex flex-col items-center",
        className,
      )}
    >
      <div className={cn(bubbleVariants({ variant }))}>
        {children}
        <div className={cn(tailVariants({ variant }))} />
      </div>
    </motion.div>
  );
};
