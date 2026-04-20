"use client";
import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
  "aria-label"?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className,
  icon,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        "border border-border bg-surface-2/80 text-foreground backdrop-blur",
        "transition hover:border-primary/50 hover:bg-surface-3 hover:text-white active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
