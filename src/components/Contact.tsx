"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  MapPin,
  GraduationCap,
  ClipboardCopy,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("dzaki.abimanyu@mail.ugm.ac.id");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-6xl mx-auto text-center relative z-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-zinc-900 dark:text-white"
      >
        📬 Contact
      </motion.h2>

      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-8 max-w-2xl mx-auto">
        Saya selalu terbuka untuk berdiskusi, berkolaborasi, atau menjalin koneksi
        baru. Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan,
        peluang kerja, atau hanya ingin menyapa.
      </p>

      <div className="flex flex-col gap-2 items-center text-sm text-zinc-600 dark:text-zinc-400 mt-6 mb-10">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>Yogyakarta, Indonesia</span>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap size={16} />
          <span>Universitas Gadjah Mada – Software Engineering</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <a
          href="mailto:dzaki.abimanyu@mail.ugm.ac.id"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Mail size={18} />
          Email Saya
        </a>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-100 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          <ClipboardCopy size={18} />
          {copied ? "Email Tersalin!" : "Salin Alamat Email"}
        </button>
      </div>

      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/dzakiachmad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition"
        >
          <Github size={18} />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/namalinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
