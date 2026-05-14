"use client";

import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";

export function Timeline() {
  return (
    <section className="bg-white px-6 py-24 text-[#2B2118]">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#9A7A45]">
            Бағдарлама
          </p>

          <h2 className="font-serif text-4xl md:text-6xl">
            Той күні
          </h2>
        </motion.div>

        <div className="space-y-5">
          {wedding.timeline.map((item, index) => (
            <motion.div
              key={`${item.time}-${item.title}`}
              className="flex items-center gap-5 rounded-3xl bg-[#FAF7F2] p-5 shadow-sm"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-2xl bg-white font-serif text-2xl text-[#C9A76A]">
                {item.time}
              </div>

              <p className="text-lg text-[#5F5143]">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}