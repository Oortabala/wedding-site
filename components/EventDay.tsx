import { CalendarDays, Clock } from "lucide-react";
import { wedding } from "@/data/wedding";
import { AnimatedSection } from "./AnimatedSection";

export function EventDay() {
  return (
    <section id="event-day" className="bg-white px-6 py-24 text-[#2B2118]">
      <AnimatedSection className="mx-auto max-w-[430px] text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#9A7A45]">
          Той күні
        </p>

        <div className="mx-auto mb-10 rounded-[2rem] bg-[#FAF7F2] p-8 shadow-sm">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#9A7A45]">
            {wedding.event.month}
          </p>

          <div className="mb-3 font-serif text-8xl leading-none text-[#2B2118]">
            {wedding.event.day}
          </div>

          <p className="text-lg text-[#6F5C49]">{wedding.event.weekday}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl bg-[#FAF7F2] p-6">
            <Clock className="mx-auto mb-4 text-[#C9A76A]" />
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#9A7A45]">
              Басталу уақыты
            </p>
            <p className="font-serif text-3xl">{wedding.event.time}</p>
          </div>

          <div className="rounded-3xl bg-[#FAF7F2] p-6">
            <CalendarDays className="mx-auto mb-4 text-[#C9A76A]" />
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#9A7A45]">
              Салтанат
            </p>
            <p className="font-serif text-2xl">Той</p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}