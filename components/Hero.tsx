'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Community Manager &{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Social Media Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Soy Diego Ezequiel Sidlouski. Ayudo a emprendimientos y comercios locales a mejorar su imagen y atraer más clientes a través de un diseño profesional y una presencia efectiva en redes sociales.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Trabajemos juntos
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-900/20 transition-colors"
            >
              Ver servicios
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-full h-96 md:h-[500px]">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl opacity-20 blur-3xl"
            />
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden bg-white/10 flex items-center justify-center p-2">
                  <Image
                    src="/logo.png"
                    alt="Logo Diego Sidlouski"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
                <p className="text-gray-300 font-medium text-lg">Diego Sidlouski</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
