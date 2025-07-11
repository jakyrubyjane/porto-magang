"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Tools & Frameworks
const tools = [
  { name: "HTML", icon: "/skills/html.png" },
  { name: "CSS", icon: "/skills/css.svg" },
  { name: "Bootstrap", icon: "/skills/bootstrap.png" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
  { name: "Laravel", icon: "/skills/laravel.svg" },
  { name: "Next.js", icon: "/skills/next.js.svg" },
  { name: "MySQL", icon: "/skills/mysql.svg" },
  { name: "Vue.js", icon: "/skills/vue.js.svg" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-24 px-6 max-w-6xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-white"
      >
        🧰 Tools
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            className="flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={tool.icon}
              alt={tool.name}
              width={96}
              height={96}
              className="object-contain"
            />
            <p className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {tool.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
