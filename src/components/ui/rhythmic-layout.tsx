"use client";

import React from "react";
import RhythmicRipplesBackground from "@/components/ui/rhythmic-ripples-background";

interface RhythmicLayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
  rippleColor?: string;
  rippleCount?: number;
  rippleSpeed?: number;
}

const RhythmicLayout: React.FC<RhythmicLayoutProps> = ({
  children,
  backgroundColor = "#ffffff",
  rippleColor = "rgba(99, 102, 241, 0.15)",
  rippleCount = 15,
  rippleSpeed = 0.3,
}) => {
  return (
    <RhythmicRipplesBackground
      backgroundColor={backgroundColor}
      rippleColor={rippleColor}
      rippleCount={rippleCount}
      rippleSpeed={rippleSpeed}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </RhythmicRipplesBackground>
  );
};

export default RhythmicLayout;
