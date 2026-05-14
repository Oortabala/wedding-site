import { wedding } from "@/data/wedding";
import { AnimatedSection } from "./AnimatedSection";

export function Invitation() {
  return (
    <section className="bg-[#FAF7F2] px-6 py-24 text-[#2B2118]">
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#9A7A45]">
          Шақыру
        </p>

        <h2 className="mb-8 font-serif text-3xl leading-tight md:text-5xl">
          {wedding.invitation.greeting}
        </h2>

        <p className="mb-8 text-lg leading-8 text-[#5F5143]">
          {wedding.invitation.text}
        </p>

        <p className="font-serif text-2xl text-[#2B2118]">
          {wedding.invitation.from}
        </p>
      </AnimatedSection>
    </section>
  );
}