"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";
import { AnimatedSection } from "./AnimatedSection";

function getTimeLeft() {
  const target = new Date(wedding.event.date).getTime();
  const now = new Date().getTime();
  const difference = Math.max(target - now, 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Күн", value: timeLeft.days },
    { label: "Сағат", value: timeLeft.hours },
    { label: "Минут", value: timeLeft.minutes },
    { label: "Секунд", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="bg-[#F8F1E8] px-6 py-24 text-[#2B2118]">
      <AnimatedSection className="mx-auto max-w-[430px] text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#9A7A45]">
          Той салтанатына дейін
        </p>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.label} className="rounded-[2rem] bg-white p-6 shadow-sm">
              <p className="mb-2 font-serif text-5xl text-[#2B2118]">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#9A7A45]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}