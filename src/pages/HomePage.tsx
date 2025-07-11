import { Link } from "react-router-dom";
import { useState } from "react";
import {
    ChevronRight,
    MapPin,
    Snowflake,
    Mountain,
    Plane,
    Car,
    Droplet,
    Palmtree,
    Bird,
    Trees,
    Home,
    Coins,
    Play,
} from "lucide-react";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import TestimonialCard from "../components/TestimonialCard";
import MapComponent from "../components/MapComponent";

import BentoCard from "../components/BentoCard";
import BentoDialog from "../components/BentoDialog";
import VideoDialog from "../components/VideoDialog";
import { territoryImages, featureImages, exclusiveImages } from "../lib/images";
import FeatureHighlight from "../components/FeatureHighlight";
import FeatureCard from "../components/FeatureCard";
import { properties as allProperties } from "../lib/consts";

const HomePage = () => {
    interface TestimonialData {
        id: string;
        name: string;
        role: string;
        text: string;
        location: string;
        image: string;
    }

    interface BentoCardProps {
        title: string;
        description: string;
        icon: React.ReactNode;
        image: string;
    }

    const [selectedItem, setSelectedItem] = useState<BentoCardProps | null>(
        null
    );
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const testimonials: TestimonialData[] = [
        {
            id: "1",
            name: "Rodrigo Martínez",
            role: "Inversor",
            text: "Invertir en Altos de Mahuida fue una excelente decisión. El proyecto ofrece una conexión única con la naturaleza y una biodiversidad impresionante.",
            location: "Santiago",
            image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: "2",
            name: "Carolina Pérez",
            role: "Propietaria",
            text: "La ubicación es perfecta, a solo 70 millas de Concepción y rodeada de todos los servicios necesarios en Yungay. El entorno natural es simplemente espectacular.",
            location: "Concepción",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url(https://images.pexels.com/photos/14546399/pexels-photo-14546399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
                    >
                        Altos de Mahuida <br />
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="text-white"
                        >
                            Un nuevo propósito en Los Andes
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                    >
                        Parcelas de 5.000 m² en un entorno privilegiado. El
                        lugar perfecto para descansar, disfrutar de la nieve y
                        la tranquilidad.
                    </motion.p>

                    <div className="flex flex-col items-center justify-center gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex flex-col items-center sm:flex-row gap-4 justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="flex items-center gap-4">
                                    <Link
                                        to="/listings"
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-elegant"
                                    >
                                        Ver Terrenos
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-medium transition-colors"
                                >
                                    Contactar Agente
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.button
                            onClick={() => setIsVideoOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-white hover:text-emerald-500 transition-colors"
                        >
                            <div className="aspect-square relative bg-white/20 backdrop-blur-sm rounded-full size-14">
                                <Play className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-0.5" />
                            </div>
                            <span className="font-bold">Ver Video</span>
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="container flex flex-col items-center justify-center mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            ¿Por qué elegir nuestras parcelas?
                        </h2>
                        <p className="text-gray-600 max-w-2xl">
                            Disfruta de todos estos beneficios en un solo lugar,
                            creando un espacio perfecto para ti y tu familia.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
                        {[
                            {
                                icon: (
                                    <Home className="h-8 w-8 text-emerald-500 group-hover:text-white" />
                                ),
                                title: "Tranquilidad",
                                description:
                                    "Escapa del ruido de la ciudad y encuentra paz en un entorno natural incomparable. Tu refugio perfecto lejos del bullicio urbano.",
                                image: featureImages.tranquilidad,
                            },
                            {
                                icon: (
                                    <Snowflake className="h-8 w-8 text-emerald-500 group-hover:text-white" />
                                ),
                                title: "Cerca de la Nieve",
                                description:
                                    "Disfruta de actividades invernales a poca distancia de tu parcela. Esquí, snowboard y más deportes de invierno a tu alcance.",
                                image: featureImages.nieve,
                            },
                            {
                                icon: (
                                    <Mountain className="h-8 w-8 text-emerald-500 group-hover:text-white" />
                                ),
                                title: "Destino Turístico",
                                description:
                                    "Ubicado en una zona con múltiples atractivos turísticos para explorar. Descubre la belleza natural y cultural de la región.",
                                image: featureImages.turismo,
                            },
                            {
                                icon: (
                                    <Coins className="h-8 w-8 text-emerald-500 group-hover:text-white" />
                                ),
                                title: "Inversión Segura",
                                description:
                                    "Terrenos con alto potencial de valorización en una zona en desarrollo. Una oportunidad única de inversión en un proyecto exclusivo.",
                                image: featureImages.inversion,
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <FeatureCard
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                    image={feature.image}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <VideoDialog
                    videoId="Mx2JuBHKJec"
                    isOpen={isVideoOpen}
                    onClose={() => setIsVideoOpen(false)}
                />
            </section>

            {/* Featured Properties */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-between items-center mb-6"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Terrenos Destacados
                            </h2>
                            <p className="text-gray-600 max-w-2xl">
                                Descubre nuestras parcelas más exclusivas, cada
                                una con características únicas y ubicaciones
                                privilegiadas.
                            </p>
                        </div>
                        <Link
                            to="/listings"
                            className="hidden md:flex items-center group text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                        >
                            Ver todos
                            <ChevronRight
                                size={20}
                                className="group-hover:translate-x-2 transition-transform"
                            />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProperties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            />
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

            {/* Location Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-3xl font-bold text-gray-800"
                            >
                                Ubicación Privilegiada en Los Andes
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-gray-600"
                            >
                                Altos de Mahuida se encuentra en un territorio
                                único, a solo 23 millas al oeste de Yungay, en
                                la primera rama montañosa de Los Andes, rodeado
                                de una biodiversidad excepcional.
                            </motion.p>
                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <motion.li
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 text-gray-600"
                                >
                                    <Plane className="w-5 h-5 text-emerald-500" />
                                    <span>
                                        Accesible desde Santiago vía aérea hasta
                                        Concepción
                                    </span>
                                </motion.li>
                                <motion.li
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 text-gray-600"
                                >
                                    <Car className="w-5 h-5 text-emerald-500" />
                                    <span>
                                        A 70 millas de Concepción por tierra
                                    </span>
                                </motion.li>
                                <motion.li
                                    variants={itemVariants}
                                    className="flex items-center space-x-3 text-gray-600"
                                >
                                    <MapPin className="w-5 h-5 text-emerald-500" />
                                    <span>
                                        Área protegida con biodiversidad única
                                    </span>
                                </motion.li>
                            </motion.ul>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-xl overflow-hidden shadow-xl h-[500px] relative"
                        >
                            <MapComponent className="w-full h-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Natural Features Section */}
            <section className="py-20 relative bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Un Territorio Único
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Descubre un paraíso natural que cambia con las
                            estaciones, ofreciendo experiencias únicas todo el
                            año.
                        </p>
                    </motion.div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 aspect-video">
                        {[
                            {
                                icon: (
                                    <Droplet className="w-8 h-8 text-primary-500" />
                                ),
                                title: "Aguas Prístinas",
                                description:
                                    "Sistema hídrico de montaña con maravillosas cascadas y ríos cristalinos que ofrecen agua para beber. Disfruta de la pureza y frescura de nuestras aguas naturales, perfectas para refrescarte y conectar con la naturaleza.",
                                image: territoryImages.aguasPristinas,
                                colSpan: true,
                            },
                            {
                                icon: (
                                    <Palmtree className="w-8 h-8 text-forest-500" />
                                ),
                                title: "Biodiversidad Única",
                                description:
                                    "Territorio protegido oficialmente por el gobierno, con un curso de conservación única de biodiversidad. Hogar de diversas especies de flora y fauna nativa, creando un ecosistema único y protegido.",
                                image: territoryImages.biodiversidad,
                            },
                            {
                                icon: (
                                    <Bird className="w-8 h-8 text-earth-500" />
                                ),
                                title: "Actividades Naturales",
                                description:
                                    "Perfecto para senderismo, observación de aves y disfrute de la naturaleza en su estado más puro. Explora senderos naturales, observa aves exóticas y conecta con la naturaleza en su máxima expresión.",
                                image: territoryImages.actividadesNaturales,
                            },
                            {
                                icon: (
                                    <Snowflake className="w-8 h-8 text-primary-500" />
                                ),
                                title: "Cuatro Estaciones",
                                description:
                                    "El territorio cambia constantemente con las estaciones, incluyendo nieve en invierno sin perder su encanto natural. Cada estación trae su propia magia, desde los colores del otoño hasta la nieve del invierno.",
                                image: territoryImages.cuatroEstaciones,
                                colSpan: true,
                            },
                        ].map((item, index) => (
                            <BentoCard
                                key={index}
                                index={index}
                                icon={item.icon}
                                title={item.title}
                                image={item.image}
                                description={item.description}
                                onClick={() => setSelectedItem(item)}
                            />
                        ))}
                    </div>
                </div>

                <BentoDialog
                    isOpen={selectedItem !== null}
                    onClose={() => setSelectedItem(null)}
                    title={selectedItem?.title}
                    description={selectedItem?.description}
                    image={selectedItem?.image}
                    icon={selectedItem?.icon}
                />
            </section>

            {/* Additional Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Características Exclusivas
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Descubre las características que hacen de Altos de
                            Mahuida un lugar único y exclusivo.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-8 max-w-7xl mx-auto">
                        {[
                            {
                                icon: (
                                    <Mountain className="w-8 h-8 text-amber-500" />
                                ),
                                title: "Rutas Interiores",
                                description:
                                    "Rutas interiores diseñadas para explorar el territorio y conectar con la naturaleza. Senderos exclusivos que te permiten descubrir cada rincón de este paraíso natural, perfectos para caminatas, ciclismo y actividades al aire libre.",
                                image: exclusiveImages.rutas,
                                direction: "left" as const,
                            },
                            {
                                icon: (
                                    <Plane className="w-8 h-8 text-amber-500" />
                                ),
                                title: "Helipuerto",
                                description:
                                    "Helipuerto privado que ofrece un acceso rápido y exclusivo. Una comodidad única que te permite llegar a tu propiedad de manera eficiente y disfrutar de vistas panorámicas incomparables durante el trayecto.",
                                image: exclusiveImages.helipuerto,
                                direction: "right" as const,
                            },
                            {
                                icon: (
                                    <Car className="w-8 h-8 text-amber-500" />
                                ),
                                title: "Seguridad Integral",
                                description:
                                    "Sistema de seguridad integral con acceso controlado las 24 horas. Personal capacitado y tecnología de punta para garantizar tu tranquilidad y privacidad en todo momento, permitiéndote disfrutar de la naturaleza con total confianza.",
                                image: exclusiveImages.seguridad,
                                direction: "left" as const,
                            },
                            {
                                icon: (
                                    <Trees className="w-8 h-8 text-amber-500" />
                                ),
                                title: "Servicios Completos",
                                description:
                                    "Infraestructura completa con todos los servicios básicos garantizados. Agua potable de la más alta calidad, electricidad confiable y sistemas de comunicación modernos que te permiten vivir en armonía con la naturaleza sin renunciar al confort.",
                                image: exclusiveImages.servicios,
                                direction: "right" as const,
                            },
                        ].map((feature, index) => (
                            <FeatureHighlight
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                image={feature.image}
                                direction={feature.direction}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Lo que dicen nuestros clientes
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Personas que ya han confiado en nosotros y disfrutan
                            de su propio espacio en la naturaleza.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-40 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url(https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                }}
            >
                <div className="absolute inset-0 bg-emerald-900/70"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 relative z-10 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Sé el primero en tomar la mejor decisión
                    </h2>
                    <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Canela Invert Asesorías te invita a descubrir Altos de
                        Mahuida, un proyecto único en las montañas de los Andes
                        que ofrece un nuevo propósito de realidades en un
                        territorio protegido con biodiversidad excepcional.
                    </p>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/listings"
                                className="bg-white text-mountain-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-elegant"
                            >
                                Ver Terrenos
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-elegant"
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
