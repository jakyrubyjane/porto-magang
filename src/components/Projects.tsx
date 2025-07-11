"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Mastani Project – Fullstack Developer",
      description:
        "Proyek studi independen bersama PT Akselerasi Edukasi Internasional. Saya membangun backend dengan Django dan frontend menggunakan Tailwind CSS secara terpadu dalam satu sistem.",
      tech: ["Django", "Tailwind CSS", "Fullstack"],
      link: "https://github.com/jakyrubyjane/Mastani-Project",
    },
    {
      title: "InspectaTech – Frontend Developer",
      description:
        "Website katalog produk milik PT Adiwarna Pratama. Saya fokus pada pengembangan antarmuka berbasis Next.js dan Tailwind CSS dengan desain responsif dan pengalaman pengguna yang optimal.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://github.com/RiogaNatayudha/InspectaTech",
    },
    {
      title: "Paradisonesia – Vue.js Hotel Ticketing",
      description:
        "Aplikasi pemesanan tiket hotel untuk proyek kampus. Saya mengembangkan antarmuka menggunakan Vue.js dan Tailwind CSS, serta merancang tampilan modern yang mudah digunakan pengguna.",
      tech: ["Vue.js", "Tailwind CSS"],
      link: "https://github.com/jakyrubyjane/paradisonesia",
    },
  ];

  const cardVariant = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-blue-700 dark:text-blue-300"
      >
        💼 Project
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            {...cardVariant}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">
                {project.title}
              </h3>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              ↗ Lihat di GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
