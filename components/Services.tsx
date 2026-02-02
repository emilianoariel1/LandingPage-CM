'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Community Management',
    description: 'Gestión integral de redes sociales, creación de contenido y estrategias de engagement.',
    icon: '📱',
    features: ['Gestión de RRSS', 'Calendario de contenido', 'Análisis de métricas', 'Respuesta a comentarios'],
  },
  {
    id: 2,
    title: 'Diseño Gráfico',
    description: 'Creación de diseños únicos para redes sociales, branding y materiales publicitarios.',
    icon: '🎨',
    features: ['Posts para RRSS', 'Identidad visual', 'Banners y flyers', 'Diseño editorial'],
  },
  {
    id: 3,
    title: 'Estrategia de Contenido',
    description: 'Desarrollo de estrategias personalizadas para aumentar tu presencia digital.',
    icon: '📊',
    features: ['Análisis de audiencia', 'Plan de contenidos', 'Copywriting', 'Optimización SEO'],
  },
  {
    id: 4,
    title: 'Branding',
    description: 'Construcción y fortalecimiento de identidad de marca que conecta con tu público.',
    icon: '✨',
    features: ['Logo y manual de marca', 'Paleta de colores', 'Tipografía', 'Guía de estilo'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Servicios{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Profesionales
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Soluciones creativas y estratégicas para impulsar tu marca en el mundo digital
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(service.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow h-full border border-gray-700"
              >
                <motion.div
                  animate={{
                    scale: hoveredId === service.id ? 1.1 : 1,
                    rotate: hoveredId === service.id ? 5 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="text-5xl mb-4"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
