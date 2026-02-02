'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Diego Sidlouski
          </span>
        </motion.div>

        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
            Sobre mí
          </a>
          <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
            Servicios
          </a>
          <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
            Contacto
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
