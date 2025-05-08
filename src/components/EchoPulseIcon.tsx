
import { useState, useEffect } from "react";
import { MicRegular, MicFilled } from "@fluentui/react-icons";
import { cn } from "@/lib/utils";

export type BotState = "idle" | "listening" | "speaking";

interface EchoPulseIconProps {
  state?: BotState;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const EchoPulseIcon = ({
  state = "idle",
  size = "md",
  className,
}: EchoPulseIconProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Sizes based on the selected size prop
  const sizes = {
    sm: {
      container: "w-8 h-8",
      icon: 16,
      bar: "w-0.5 mx-[1px]"
    },
    md: {
      container: "w-12 h-12",
      icon: 24,
      bar: "w-1 mx-[1px]"
    },
    lg: {
      container: "w-16 h-16",
      icon: 32,
      bar: "w-1.5 mx-[1px]"
    }
  };

  // When the state changes, start animation
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [state]);
  
  // Render audio waveform bars
  const renderWaveformBars = () => {
    const bars = [];
    const totalBars = 9;
    
    for (let i = 0; i < totalBars; i++) {
      // Create variation in animations by alternating classes
      const animClass = i % 3 === 0 ? "animate-wave-fast" : 
                       i % 3 === 1 ? "animate-wave-normal" : "animate-wave-slow";
      
      // Add a delay based on position
      const delay = `${i * 0.1}s`;
      
      bars.push(
        <div
          key={i}
          className={cn(
            sizes[size].bar,
            "h-1/2 rounded-full transform origin-bottom bg-purple-600",
            state === "speaking" && animClass
          )}
          style={{ 
            animationDelay: delay,
            height: state === "speaking" ? `${30 + Math.random() * 40}%` : "30%"
          }}
        />
      );
    }
    return bars;
  };

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center rounded-full bg-fluent-background",
        sizes[size].container,
        isAnimating && "scale-105 transition-transform duration-300",
        state === "listening" && "animate-pulse-gentle",
        className
      )}
    >
      {/* Ripple effect for listening state */}
      {state === "listening" && (
        <div className="absolute inset-0 rounded-full border-2 border-purple-600 animate-ripple"></div>
      )}
      
      {/* Icon changes based on state */}
      {state === "speaking" ? (
        <div className="flex items-center justify-center h-full space-x-[1px]">
          {renderWaveformBars()}
        </div>
      ) : (
        state === "listening" ? (
          <MicFilled 
            fontSize={sizes[size].icon} 
            className="text-purple-600"
          />
        ) : (
          <MicRegular
            fontSize={sizes[size].icon} 
            className="text-purple-600"
          />
        )
      )}
    </div>
  );
};
