"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F1E8] px-6 py-24 text-center text-[#2B2118]"
    >
      <motion.div
        className="absolute -top-16 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#EEDBC5] blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[-80px] top-24 opacity-70"
        initial={{ opacity: 0, rotate: -10, x: -20 }}
        animate={{ opacity: 0.75, rotate: 0, x: 0 }}
        transition={{ duration: 1.3 }}
      >
        <Image
          src={wedding.images.petals}
          alt=""
          width={220}
          height={220}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-[-70px] opacity-70"
        initial={{ opacity: 0, rotate: 10, x: 20 }}
        animate={{ opacity: 0.75, rotate: 0, x: 0 }}
        transition={{ duration: 1.3, delay: 0.2 }}
      >
        <Image
          src={wedding.images.birds}
          alt=""
          width={230}
          height={230}
          className="object-contain"
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[430px]">
        <motion.p
          className="mb-5 text-xs uppercase tracking-[0.35em] text-[#9A7A45]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {wedding.event.type}
        </motion.p>

        <motion.div
          className="mx-auto mb-8 h-52 w-52 overflow-hidden rounded-full border border-white bg-white p-2 shadow-2xl"
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={wedding.images.couple}
              alt={wedding.couple.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          className="mb-5 font-serif text-6xl leading-none text-[#2B2118]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {wedding.couple.groom}
          <span className="block text-4xl text-[#C9A76A]">&</span>
          {wedding.couple.bride}
        </motion.h1>

        <motion.div
          className="mx-auto mb-6 h-px w-28 bg-[#C9A76A]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
        />

        <motion.p
          className="mb-8 text-base text-[#6F5C49]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {wedding.event.displayDate} • {wedding.event.city}
        </motion.p>

        <motion.a
          href="#rsvp"
          className="inline-flex rounded-full bg-[#2B2118] px-8 py-4 text-sm font-medium text-white shadow-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Қатысатынымды растау
        </motion.a>
      </div>
    </section>
  );
}