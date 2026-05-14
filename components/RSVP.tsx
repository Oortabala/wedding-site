import { AnimatedSection } from "./AnimatedSection";

export function RSVP() {
  return (
    <section id="rsvp" className="bg-[#F8F1E8] px-6 py-24 text-[#2B2118]">
      <AnimatedSection className="mx-auto max-w-[430px]">
        <div className="mb-10 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#9A7A45]">
            Анкета
          </p>

          <h2 className="mb-5 font-serif text-5xl leading-tight">
            Тойға қатысуыңызды растауыңызды сұраймыз
          </h2>

          <p className="text-base leading-7 text-[#6F5C49]">
            Қуанышымызға ортақ болыңыздар!
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white/70 p-3 shadow-sm backdrop-blur">
          <iframe
            src="https://tally.so/embed/7R1640?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="760"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="RSVP form"
            className="rounded-[1.5rem] bg-transparent"
          >
            Жүктеу…
          </iframe>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-[#8A7A69]">
          Егер жұбыңызбен келетін болсаңыз, екеуіңіздің де есімдеріңізді жазыңыз.
        </p>
      </AnimatedSection>
    </section>
  );
}