'use client';

import { motion, useInView, type HTMLMotionProps } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'viewport' | 'transition'> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.6,
  className,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type CountUpProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const durationMs = duration * 1000;

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

type TypewriterProps = {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  className?: string;
};

export function Typewriter({
  text,
  speedMs = 32,
  startDelayMs = 150,
  className,
}: TypewriterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf = 0;
    let startedAt = 0;

    const tick = (now: number) => {
      if (!startedAt) startedAt = now + startDelayMs;
      if (now < startedAt) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startedAt;
      const next = Math.min(text.length, Math.floor(elapsed / speedMs));
      setCount((prev) => (next > prev ? next : prev));
      if (next < text.length) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, speedMs, startDelayMs]);

  // Render the full text as a single continuous string, splitting only
  // visual styling (opacity) at the caret. No inline element is inserted
  // between revealed and hidden text so word-wrap points never change.
  const revealedEnd = count;

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">
        {text.split('').map((char, i) => (
          <span
            key={i}
            style={{
              opacity: i < revealedEnd ? 1 : 0,
              transition: 'opacity 120ms linear',
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
}
