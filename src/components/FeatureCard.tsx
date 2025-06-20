import { motion } from "framer-motion";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
    image,
}: FeatureCardProps) {
    return (
        <motion.div
            className="group relative bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elegant"
            whileHover={{ y: -5, scale: 1.15 }}
            transition={{ duration: 0.2 }}
        >
            {/* Image Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative p-8 h-full flex flex-col items-center text-center z-10">
                {/* Icon Container */}
                <motion.div
                    className="p-4 bg-emerald-50 rounded-xl mb-6 group-hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    {icon}
                </motion.div>

                {/* Text Content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-white transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
