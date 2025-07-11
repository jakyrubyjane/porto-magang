"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";


const words = ["Fullstack", "Software Engineer", "Web Developer"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 120);

    if (!reverse && subIndex === words[index].length) {
      setTimeout(() => setReverse(true), 1000);
    } else if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[85vh] px-6 py-20 max-w-6xl mx-auto gap-10"
    >
      {/* Keterangan */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
          Halo, saya Dzaki 👋
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-xl leading-8">
          Seorang{" "}
          <span className="text-blue-500 font-semibold">
            {words[index].substring(0, subIndex)}
            <span className="blinking-cursor">|</span>
          </span>{" "}
          yang antusias dalam membangun aplikasi web modern. Berpengalaman menggunakan
          Next.js, Tailwind CSS, Laravel, Django, Vue.js, dan MySQL untuk membangun sistem
          yang efisien dan user-friendly.
        </p>
      </motion.div>

      {/* Foto Profil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-lg ring-4 ring-zinc-200 dark:ring-zinc-700"
      >
        <Image
          src="/profile.jpg"
          alt="Foto Dzaki"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
    </section>
  );
}
