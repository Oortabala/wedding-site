import { MapPin } from "lucide-react";
import { wedding } from "@/data/wedding";
import { AnimatedSection } from "./AnimatedSection";

export function Venue() {
  return (
    <section id="venue" className="bg-[#FAF7F2] px-6 py-24 text-[#2B2118]">
      <AnimatedSection className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#9A7A45]">
          Мекенжай
        </p>

        <MapPin className="mx-auto mb-6 h-10 w-10 text-[#C9A76A]" />

        <h2 className="mb-4 font-serif text-4xl md:text-6xl">
          {wedding.venue.name}
        </h2>

        <p className="mb-8 text-lg text-[#7A6A58]">
          {wedding.venue.address}
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={wedding.venue.gisLink}
            target="_blank"
            className="rounded-full bg-[#2B2118] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#3B2D21]"
          >
            2GIS арқылы ашу
          </a>

          <a
            href={wedding.venue.googleMapsLink}
            target="_blank"
            className="rounded-full border border-[#C9A76A] px-7 py-4 text-sm font-medium text-[#2B2118] transition hover:bg-white"
          >
            Google Maps арқылы ашу
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}