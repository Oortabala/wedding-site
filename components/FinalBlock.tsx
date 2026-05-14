import { wedding } from "@/data/wedding";

export function FinalBlock() {
  return (
    <section className="bg-[#2B2118] px-6 py-24 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#C9A76A]">
          {wedding.event.displayDate}
        </p>

        <h2 className="mb-6 font-serif text-4xl md:text-6xl">
          Сіздерді асыға күтеміз!
        </h2>

        <p className="text-white/70">
          {wedding.couple.title} • {wedding.event.city}
        </p>
      </div>
    </section>
  );
}