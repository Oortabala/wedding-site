import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

const photos = [
  "/images/olzhas-aitolkyn/couple.webp",
  "/images/olzhas-aitolkyn/foto-1.webp",
  "/images/olzhas-aitolkyn/foto-2.webp",
  "/images/olzhas-aitolkyn/foto-3.webp",
  "/images/olzhas-aitolkyn/foto-4.webp",
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-white px-6 py-24 text-[#2B2118]">
      <AnimatedSection className="mx-auto max-w-[430px]">
        <div className="mb-12 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#9A7A45]">
            Фотоальбом
          </p>

          <h2 className="font-serif text-5xl leading-tight">
            Естелік суреттер
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[2rem] bg-[#FAF7F2] shadow-sm ${
                index === 0 ? "col-span-2 h-72" : "h-48"
              }`}
            >
              <Image
                src={photo}
                alt="Фотоальбом"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}