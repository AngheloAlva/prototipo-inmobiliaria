import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, RulerIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Property } from "../lib/consts";

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
        >
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white font-semibold flex items-center"
                    >
                        <MapPin size={16} className="mr-1" />
                        {property.location}
                    </motion.p>
                </div>
            </div>
            <div className="p-6">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-bold text-gray-800 mb-2"
                >
                    {property.title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-4 line-clamp-2"
                >
                    {property.description}
                </motion.p>
                <div className="flex justify-between items-center mb-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-sm text-gray-500">Superficie</p>
                        <p className="font-semibold text-gray-800 flex items-center gap-1.5">
                            <RulerIcon size={16} className="text-gray-500" />
                            {property.area} m²
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Link
                        to={`/listings/${property.id}`}
                        className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-medium py-2 px-4 rounded flex items-center justify-center transition-all transform hover:scale-105"
                    >
                        Ver Detalles
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowRight size={16} className="ml-2" />
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PropertyCard;
