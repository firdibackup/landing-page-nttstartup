"use client";

import { useEffect, useState } from "react";

type CountdownGridProps = {
  targetDate: string;
};

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isComplete: boolean;
};

const initialTimeLeft: TimeLeft = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
  isComplete: false,
};

function getTimeLeft(targetDate: string): TimeLeft {
  const targetTime = new Date(targetDate).getTime();
  const now = Date.now();
  const distance = Math.max(targetTime - now, 0);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    isComplete: distance === 0,
  };
}

export function CountdownGrid({ targetDate }: CountdownGridProps) {
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 0);

    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [targetDate]);

  const items = [
    { label: "Days", value: timeLeft.days, accent: true },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface-soft)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className={[
              "rounded-[1.6rem] border p-6 sm:p-7",
              item.accent
                ? "border-[#223a67] bg-[linear-gradient(180deg,#0D1730_0%,#08101F_100%)]"
                : "border-[color:var(--line)] bg-[#0b1221]",
            ].join(" ")}
          >
            <div className="text-5xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">
              {item.value}
            </div>
            <div className="mt-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--text-muted)]">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {timeLeft.isComplete ? (
        <p className="mt-5 text-sm font-semibold text-[var(--ntt-blue-200)]">
          Registration day has arrived.
        </p>
      ) : null}
    </div>
  );
}
