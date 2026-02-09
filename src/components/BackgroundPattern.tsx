export default function BackgroundPattern() {
  const iconColor = "#fbefa4";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute h-full w-full" width="100%" height="100%">
        <defs>
          <pattern
            id="lucide-pattern"
            x="0"
            y="0"
            width="270"
            height="270"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-30)" // 全体を傾ける
          >
            <g
              transform="translate(15, 15) scale(3)"
              fill="none"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="6" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </g>

            <g
              transform="translate(105, 105) scale(3)"
              fill="none"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" x2="9.01" y1="9" y2="9" />
              <line x1="15" x2="15.01" y1="9" y2="9" />
            </g>

            <g
              transform="translate(195, 195) scale(3)"
              fill="none"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lucide-pattern)" />
      </svg>
    </div>
  );
}
