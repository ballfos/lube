import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";
import React from "react";

const buttonVariants = cva(
  // ベーススタイル

  "relative group overflow-hidden inline-flex items-center justify-center font-black text-white tracking-widest uppercase duration-150 ease-out border-b-[6px] disabled:opacity-50 disabled:pointer-events-none font-n",
  {
    variants: {
      variant: {
        pink: "bg-rose-400 border-rose-600 hover:bg-rose-300",
        green: "bg-green-400 border-green-600 hover:bg-green-300",
        blue: "bg-sky-400 border-sky-600 hover:bg-sky-300",
        orange: "bg-orange-400 border-orange-600 hover:bg-orange-300",
        purple: "bg-purple-500 border-purple-700 hover:bg-purple-400",
        yellow: "bg-yellow-400 border-yellow-600 hover:bg-yellow-300",
        gray: "bg-slate-400 border-slate-600 hover:bg-slate-300",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-3 text-md rounded-xl",
        lg: "px-8 py-4 text-lg rounded-xl",
      },
    },
    defaultVariants: {
      variant: "pink",
      size: "md",
    },
  },
);

type ShinyButtonProps = Omit<HTMLMotionProps<"button">, "ref"> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
    delay?: number; // 出現までの遅延時間
  };

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ className, children, variant, onClick, delay = 0, ...props }, ref) => {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    await new Promise((resolve) => setTimeout(resolve, 200));
    onClick(e);
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay } }}
      whileTap={{
        scale: 0.9,
        y: 6,
        borderBottomWidth: "2px",
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
      className={cn(buttonVariants({ variant, className }))}
      onClick={handleClick}
      {...props}
    >
      {/* --- テカリ（ハイライト）層 --- */}
      <div className="pointer-events-none absolute inset-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/50 to-transparent opacity-80" />
      <div className="pointer-events-none absolute top-2 right-[6%] left-[6%] h-1/3 rounded-[inherit] bg-white/40" />

      {/* --- コンテンツ層 --- */}
      <span className="relative z-10 flex items-center gap-2 drop-shadow-md select-none">
        {children}
      </span>
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
