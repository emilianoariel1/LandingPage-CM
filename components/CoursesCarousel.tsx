'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    image: '/curso-3.jpg',
    title: 'Excel',
    description: 'Aprende a manejar paso a paso Microsoft Excel, uno de los programas de computación básicos de la era digital.',
    link: 'https://www.mercadolibre.com.ar/curso-completo-de-excel-con-salida-laboral/up/MLAU239796355',
  },
  {
    id: 2,
    image: '/curso-4.jpg',
    title: 'Tecnico en Refrigeracion',
    description: 'Ideal para personas que deseen insertarse al mercado laboral de la refrigeración con conocimientos profesionales totalmente actualizados.',
    link: 'https://www.mercadolibre.com.ar/curso-de-refrigeracion-facil-y-con-rapida-salida-laboral/up/MLAU237684680',
  },
  {
    id: 3,
    image: '/curso-1.jpg',
    title: 'Barista',
    description: 'Con una duración aproximada de 2 horas, adquirirás habilidades prácticas y teóricas que te permitirán destacarte en el mundo del café.',
    link: 'https://www.mercadolibre.com.ar/curso-barista-con-salida-laboral/up/MLAU3766282319',
  },
  {
    id: 4,
    image: '/curso-2.jpg',
    title: 'Porcelanato Liquido',
    description: 'Descubre como puedes construir un negocio rentable y de rápida salida laboral aprendiendo técnicas y métodos para crear pisos 3D y hacer mesas encapsuladas.',
    link: 'https://www.mercadolibre.com.ar/curso-de-porcelanato-liquido-resina-epoxi-con-salida-laboral/up/MLAU232746916',
  },
];

export default function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
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
            Cursos{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Disponibles
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Aprende las mejores estrategias de redes sociales y diseño
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
              {courses.map((course) => (
                <div key={course.id} className="min-w-full px-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
                  >
                    <div className="grid md:grid-cols-[2fr,1fr] gap-0">
                      <div className="relative w-full h-96 md:h-[500px] bg-gray-800 p-4">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {course.title}
                        </h3>
                        <p className="text-gray-300 mb-6">
                          {course.description}
                        </p>
                        <motion.a
                          href={course.link}
                          target="_blank"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow text-center text-sm"
                        >
                          Más información
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
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
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 w-8'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
