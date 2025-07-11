"use client";

import { Home, Info, Hammer, Folder, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const menuItems = [
    { label: "Beranda", href: "#hero", icon: <Home size={20} /> },
    { label: "Tentang", href: "#about", icon: <Info size={20} /> },
    { label: "Keahlian", href: "#tools", icon: <Hammer size={20} /> },
    { label: "Proyek", href: "#projects", icon: <Folder size={20} /> },
    { label: "Kontak", href: "#contact", icon: <Mail size={20} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-zinc-900 border-b border-zinc-800 shadow-sm sticky top-0 z-50"
    >
      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="font-bold text-2xl text-white">Portofolio</h1>
        <ul className="flex gap-6 text-sm font-medium text-zinc-100">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center justify-center hover:text-white transition duration-200 transform hover:scale-125"
                title={item.label}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full flex justify-around items-center px-4 py-3 bg-zinc-900 border-t border-zinc-800 text-zinc-100 text-xs">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center hover:text-white transition-colors duration-200"
          >
            {item.icon}
            <span className="text-[11px] mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
