import { createContext, useContext, useState, type ReactNode } from "react";

type PlayLog = {
  topic: string;
  example: string;
};

type GameContextType = {
  isGameStarted: boolean;
  startGame: (playerCount: number) => void;
  playLogs: PlayLog[];
  addPlayLog: (log: PlayLog) => void;
  playerCount: number;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playLogs, setPlayLogs] = useState<PlayLog[]>([]);
  const [playerCount, setPlayerCount] = useState(0);

  const addPlayLog = (log: PlayLog) => {
    setPlayLogs((prev) => [...prev, log]);
  };
  const startGame = (playerCount: number) => {
    setIsGameStarted(true);
    setPlayerCount(playerCount);
    setPlayLogs([]);
  };

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        playLogs,
        playerCount,
        addPlayLog,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
