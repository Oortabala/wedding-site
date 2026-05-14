import { CalendarDays, Clock, MapPin } from "lucide-react";
import { wedding } from "@/data/wedding";
import { AnimatedSection } from "./AnimatedSection";

export function DateBlock() {
  return (
    <section className="bg-white px-6 py-24 text-[#2B2118]">
      <AnimatedSection className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-[#FAF7F2] p-8 text-center shadow-sm">
            <CalendarDays className="mx-auto mb-5 h-8 w-8 text-[#C9A76A]" />
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#9A7A45]">
              Күні
            </p>
            <h3 className="font-serif text-3xl">{wedding.event.displayDate}</h3>
            <p className="mt-2 text-[#7A6A58]">{wedding.event.weekday}</p>
          </div>

          <div className="rounded-3xl bg-[#FAF7F2] p-8 text-center shadow-sm">
            <Clock className="mx-auto mb-5 h-8 w-8 text-[#C9A76A]" />
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#9A7A45]">
              Уақыты
            </p>
            <h3 className="font-serif text-3xl">{wedding.event.time}</h3>
            <p className="mt-2 text-[#7A6A58]">Қонақтарды күтеміз</p>
          </div>

          <div className="rounded-3xl bg-[#FAF7F2] p-8 text-center shadow-sm">
            <MapPin className="mx-auto mb-5 h-8 w-8 text-[#C9A76A]" />
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#9A7A45]">
              Қала
            </p>
            <h3 className="font-serif text-3xl">{wedding.event.city}</h3>
            <p className="mt-2 text-[#7A6A58]">{wedding.venue.name}</p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}