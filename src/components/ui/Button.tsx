import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  // ベーススタイル

  "relative group overflow-hidden inline-flex items-center justify-center font-black text-white tracking-widest uppercase transition-all duration-150 ease-out border-b-[6px] active:border-transparent active:translate-y-[6px] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none box-border font-c",
  {
    variants: {
      variant: {
        pink: "bg-rose-400 border-rose-600 hover:bg-rose-300",
        green: "bg-green-400 border-green-600 hover:bg-green-300",
        blue: "bg-sky-400 border-sky-600 hover:bg-sky-300",
        orange: "bg-orange-400 border-orange-600 hover:bg-orange-300",
        purple: "bg-purple-500 border-purple-700 hover:bg-purple-400",
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

type ShinyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ className, children, variant, onClick, ...props }, ref) => {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    await new Promise((resolve) => setTimeout(resolve, 200));
    onClick(e);
  };

  return (
    <button
      ref={ref}
      type="button"
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
    </button>
  );
});

ShinyButton.displayName = "ShinyButton";
