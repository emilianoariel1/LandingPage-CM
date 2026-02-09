'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const templates = [
  {
    id: 1,
    image: '/Page1.png',
    title: 'Pagina para Tiendas de Comida',
    description: 'Tienda online. Incluye catálogo de productos, carrito de compras y checkout personalizado.',
    link: 'https://hamburgueseria-template.vercel.app/',
  },
  {
    id: 2,
    image: '/Page2.png',
    title: 'Portfolios',
    description: 'Portfolio creativo para diseñadores y desarrolladores. Galería de proyectos con animaciones suaves y diseño responsive.',
    link: 'https://portfolio-template-sandy.vercel.app/',
  },
];

export default function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % templates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);
  };

  return (
    <section id="courses" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Creacion de{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Paginas Web
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explora nuestros diseños web profesionales listos para usar
          </p>
        </motion.div>

        <div className="relative">
          {/* Carrusel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {templates.map((template) => (
                <div key={template.id} className="min-w-full px-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
                  >
                    {/* Imagen del template */}
                    <div className="relative w-full h-64 md:h-96 bg-gray-800">
                      <Image
                        src={template.image}
                        alt={template.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    </div>

                    {/* Contenido */}
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {template.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                        {template.description}
                      </p>
                      <motion.a
                        href={template.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                      >
                        Ver demostración →
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            aria-label="Template anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Siguiente template"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir al template ${index + 1}`}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 w-8'
                    : 'bg-gray-600 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
