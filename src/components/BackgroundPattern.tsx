import { useBackgroundContext } from "@/contexts/BackgroundContext";
import type { ReactNode } from "react";

const ICON_SCALE = 3;
const ICON_SPAN = 100;
const ICON_OFFSET = 20;

const PATTERN_COLOR_MAP: Record<string, [string, string]> = {
  default: ["#fef3c7", "#fde68a"],
  home: ["#fef3c7", "#fde68a"],
  intro: ["#dbeafe", "#bfdbfe"],
  waiting: ["#d1fae5", "#a7f3d0"],
  thinking: ["#ede9fe", "#c4b5fd"],
  interviewing: ["#fee2e2", "#fecaca"],
  result: ["#e0e7ff", "#c7d2fe"],
};

const PATTERN_ICONS_MAP: Record<string, ReactNode[]> = {
  // TODO: パターンの追加
  default: [
    <g key="default-1">
      <rect width="20" height="14" x="2" y="6" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </g>,
    <g key="default-2">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </g>,
    <g key="default-3">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </g>,
  ],
  thinking: [
    <g key="t1">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2v1" />
      <path d="M12 14c-4 0-4-8 0-8 3 0 4 3 4 5 0 2-2 3-2 3" />
    </g>, // 電球(簡易)
    <g key="t2">
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </g>, // ハテナ
    <g key="t3">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </g>, // ペン
  ],
  interview: [
    <g key="i1">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    </g>, // マイク
    <g key="i2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </g>, // 吹き出し
    <g key="i3">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </g>, // 目
  ],
  result: [
    <g key="v1">
      <path d="M14 9L9 9" />
      <path d="M10 15.5L9 9L3 9" />
    </g>, // 簡易矢印
    <g key="v2">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </g>, // チェック
    <g key="v3">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </g>, // 矢印
  ],
};

export default function BackgroundPattern() {
  const { variant } = useBackgroundContext();

  const [bgColor, patternColor] =
    PATTERN_COLOR_MAP[variant] || PATTERN_COLOR_MAP["default"];
  const patternIcons =
    PATTERN_ICONS_MAP[variant] || PATTERN_ICONS_MAP["default"];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute h-full w-full"
        style={{ backgroundColor: bgColor }}
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="dynamic-pattern"
            x="0"
            y="0"
            width={ICON_SPAN * patternIcons.length}
            height={ICON_SPAN * patternIcons.length}
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-30)" // 全体を傾ける
          >
            {patternIcons.map((icon, index) => (
              <g
                key={index}
                stroke={patternColor}
                fill="none"
                strokeWidth="2"
                transform={`translate(${index * ICON_SPAN + ICON_OFFSET}, ${
                  Math.floor(index) * ICON_SPAN + ICON_OFFSET
                }) scale(${ICON_SCALE})`} // アイコンのサイズを調整
              >
                {icon}
              </g>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dynamic-pattern)" />
      </svg>
    </div>
  );
}
