"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue, useTransform, useReducedMotion } from "framer-motion";

export interface AnimatedCounterProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  trigger?: boolean;
  onComplete?: () => void;
  className?: string;
}

function isNumberValue(value: number | string): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  trigger = true,
  onComplete,
  className,
}: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayedNumber, setDisplayedNumber] = useState(0);
  const [lettersVisible, setLettersVisible] = useState(0);
  const startedRef = useRef(false);
  const completedRef = useRef(false);

  const isStringFallback = !isNumberValue(value);
  const stringValue = String(value);
  const targetValue = isNumberValue(value) ? value : 0;

  useEffect(() => {
    if (!trigger || startedRef.current) {
      return;
    }

    startedRef.current = true;

    if (shouldReduceMotion) {
      if (isStringFallback) {
        setLettersVisible(stringValue.length);
      } else {
        setDisplayedNumber(targetValue);
      }

      completedRef.current = true;
      onComplete?.();
      return;
    }

    if (isStringFallback) {
      setLettersVisible(0);

      const controls = animate(0, stringValue.length, {
        duration: Math.max(0.8, Math.min(duration, 1.6)),
        ease: "easeOut",
        onUpdate(latest) {
          const visibleCount = Math.min(stringValue.length, Math.floor(latest));
          setLettersVisible(visibleCount);

          if (visibleCount >= stringValue.length && !completedRef.current) {
            completedRef.current = true;
            onComplete?.();
          }
        },
      });

      return () => controls.stop();
    }

    if (targetValue === 0) {
      setDisplayedNumber(0);
      completedRef.current = true;
      onComplete?.();
      return;
    }

    const controls = animate(motionValue, targetValue, {
      duration,
      ease: "easeOut",
    });

    const unsubscribe = roundedValue.on("change", (latest) => {
      setDisplayedNumber(latest);

      if (latest >= targetValue && !completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [duration, motionValue, onComplete, roundedValue, shouldReduceMotion, stringValue, targetValue, trigger, isStringFallback]);

  if (isStringFallback) {
    return (
      <span className={className} aria-label={stringValue}>
        {prefix ? <span className="mr-1">{prefix}</span> : null}
        <span className="inline-flex">
          {stringValue.split("").map((character, index) => (
            <span
              key={`${character}-${index}`}
              className="inline-block"
              style={{
                opacity: index < lettersVisible ? 1 : 0,
                transform: index < lettersVisible ? "translateY(0)" : "translateY(0.35em)",
                transition: "opacity 180ms ease, transform 180ms ease",
              }}
            >
              {character}
            </span>
          ))}
        </span>
        {suffix ? <span className="ml-1">{suffix}</span> : null}
      </span>
    );
  }

  return (
    <span className={className} aria-label={`${prefix}${displayedNumber}${suffix}`}>
      {prefix ? <span className="mr-1">{prefix}</span> : null}
      <span>{displayedNumber}</span>
      {suffix ? <span className="ml-1">{suffix}</span> : null}
    </span>
  );
}