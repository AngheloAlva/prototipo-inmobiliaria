
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Snowflake, Mountain, Heart, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const featuredProperties = [
    {
      id: '1',
      title: 'Parcela Vista Montaña',
      location: 'Santa Bárbara, Bío Bío',
      price: '35.000.000',
      area: '5.000',
      image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Hermosa parcela con impresionantes vistas a la montaña y acceso a senderos naturales.',
    },
    {
      id: '2',
      title: 'Parcela Río Claro',
      location: 'Los Ángeles, Bío Bío',
      price: '42.000.000',
      area: '5.000',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Parcela con acceso a río, ideal para amantes de la pesca y deportes acuáticos.',
    },
    {
      id: '3',
      title: 'Parcela Bosque Nativo',
      location: 'Alto Bío Bío, Bío Bío',
      price: '38.500.000',
      area: '5.000',
      image: 'https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Parcela rodeada de bosque nativo, perfecta para quienes buscan privacidad y conexión con la naturaleza.',
    },
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Rodrigo Martínez',
      location: 'Santiago',
      text: 'Comprar mi parcela en Inmobiliaria JC Ulloa fue la mejor decisión. El proceso fue sencillo y ahora tengo mi lugar de escape perfecto para los fines de semana.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      name: 'Carolina Pérez',
      location: 'Concepción',
      text: 'La tranquilidad que se respira en esta zona es incomparable. El equipo de ventas fue muy profesional y me ayudó a encontrar exactamente lo que buscaba.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Tu refugio natural en <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-emerald-400"
            >
              Bío Bío
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Parcelas de 5.000 m² en un entorno privilegiado.
            El lugar perfecto para descansar, disfrutar de la nieve y la tranquilidad.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/listings"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Terrenos
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contactar Agente
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Por qué elegir nuestras parcelas?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Disfruta de todos estos beneficios en un solo lugar, creando un espacio perfecto para ti y tu familia.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Heart className="h-12 w-12 text-emerald-600" />,
                title: 'Tranquilidad',
                description: 'Escapa del ruido de la ciudad y encuentra paz en un entorno natural incomparable.',
              },
              {
                icon: <Snowflake className="h-12 w-12 text-blue-500" />,
                title: 'Cerca de la Nieve',
                description: 'Disfruta de actividades invernales a poca distancia de tu parcela.',
              },
              {
                icon: <Mountain className="h-12 w-12 text-amber-600" />,
                title: 'Destino Turístico',
                description: 'Ubicado en una zona con múltiples atractivos turísticos para explorar.',
              },
              {
                icon: <Building className="h-12 w-12 text-indigo-600" />,
                title: 'Inversión Segura',
                description: 'Terrenos con alto potencial de valorización en una zona en desarrollo.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="mb-4"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Terrenos Destacados</h2>
              <p className="text-gray-600 max-w-2xl">
                Descubre nuestras parcelas más exclusivas, cada una con características únicas y ubicaciones privilegiadas.
              </p>
            </div>
            <Link
              to="/listings"
              className="hidden md:flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
            >
              Ver todos
              <ChevronRight size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center md:hidden"
          >
            <Link
              to="/listings"
              className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
            >
              Ver todos los terrenos
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ubicación Privilegiada</h2>
              <p className="text-emerald-100 mb-8">
                Nuestras parcelas están estratégicamente ubicadas en la hermosa región del Bío Bío,
                combinando la tranquilidad del campo con fácil acceso a servicios y atracciones turísticas.
              </p>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  'A 15 minutos del centro urbano más cercano',
                  'A 45 minutos de centros de ski en temporada de invierno',
                  'Cercano a ríos y lagos para actividades acuáticas',
                  'Acceso a caminos bien mantenidos todo el año',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <MapPin size={20} className="text-emerald-400 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                  >
                    Agendar Visita
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-xl h-[400px] relative"
            >
              <img
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mapa de la ubicación"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Ver Mapa Completo
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Personas que ya han confiado en nosotros y disfrutan de su propio espacio en la naturaleza.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        <div className="absolute inset-0 bg-emerald-900/80"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para encontrar tu lugar ideal?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y un asesor inmobiliario te ayudará a encontrar
            la parcela perfecta para ti y tu familia.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/listings"
                className="bg-white text-emerald-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Terrenos
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contactar Ahora
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;