import { createContext, useContext, useState, type ReactNode } from "react";

export type BackgroundVariant =
  | "home" // タイトル画面
  | "intro" // ゲーム説明画面
  | "waiting" // カードを引く前
  | "thinking" // 思考タイム
  | "interviewing" // 面接タイム
  | "result"; // 結果発表

type BackgroundContextType = {
  variant: BackgroundVariant;
  setVariant: (variant: BackgroundVariant) => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined,
);

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState<BackgroundVariant>("home");

  return (
    <BackgroundContext.Provider value={{ variant, setVariant }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBackgroundContext = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error(
      "useBackgroundContext must be used within a BackgroundProvider",
    );
  }
  return context;
};
