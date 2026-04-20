import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({
  className,
  showWordmark = true,
  size = 32,
}) => {
  const gradId = React.useId();
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`${gradId}-stroke`}
            x1="4"
            y1="4"
            x2="36"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="hsl(258 90% 66%)" />
            <stop offset="55%" stopColor="hsl(280 85% 62%)" />
            <stop offset="100%" stopColor="hsl(190 95% 55%)" />
          </linearGradient>
          <linearGradient
            id={`${gradId}-fill`}
            x1="4"
            y1="4"
            x2="36"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="hsl(258 90% 66%)" stopOpacity="0.18" />
            <stop
              offset="100%"
              stopColor="hsl(190 95% 55%)"
              stopOpacity="0.08"
            />
          </linearGradient>
        </defs>
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="11"
          fill={`url(#${gradId}-fill)`}
          stroke={`url(#${gradId}-stroke)`}
          strokeWidth="1.5"
        />
        <path
          d="M12 28V12L28 28V12"
          stroke={`url(#${gradId}-stroke)`}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="1.75" fill="hsl(258 90% 66%)" />
        <circle cx="28" cy="28" r="1.75" fill="hsl(190 95% 55%)" />
      </svg>
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          KULTUR
        </span>
      )}
    </div>
  );
};

export default Logo;
