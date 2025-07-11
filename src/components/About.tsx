import { motion } from "framer-motion";

export default function About() {
  const cardVariant = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-blue-700 dark:text-blue-300"
      >
        🧭 About Me
      </motion.h2>

      {/* Mind Map Center */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-blue-100 dark:bg-blue-900 text-center text-blue-900 dark:text-blue-100 px-8 py-4 rounded-full text-lg font-semibold shadow-lg mb-12"
        >
          Dzaki Achmad Abimanyu<br />
          👨‍💻 Mahasiswa Software Engineering UGM
        </motion.div>

        {/* Cabang Mind Map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pendidikan */}
          <motion.div
            {...cardVariant}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">🎓 Pendidikan</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Mahasiswa aktif di Universitas Gadjah Mada pada program studi Software Engineering. Aktif dalam berbagai kegiatan kampus dan inisiatif teknologi.
            </p>
          </motion.div>

          {/* Pengalaman */}
          <motion.div
            {...cardVariant}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-300 mb-2">📌 Pengalaman</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Terlibat dalam proyek-proyek pengembangan antarmuka, sistem backend, serta pengalaman studi independen sebagai developer.
            </p>
          </motion.div>

          {/* Minat */}
          <motion.div
            {...cardVariant}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-2">💡 Minat</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Menyukai pembangunan antarmuka pengguna yang interaktif, sistem efisien, serta eksplorasi teknologi baru untuk pengembangan produk digital.
            </p>
          </motion.div>

          {/* Nilai Personal */}
          <motion.div
            {...cardVariant}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-300 mb-2">🌱 Nilai Personal</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Disiplin, kolaboratif, dan memiliki semangat belajar yang tinggi. Percaya bahwa teknologi seharusnya memudahkan hidup dan membangun solusi nyata.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
