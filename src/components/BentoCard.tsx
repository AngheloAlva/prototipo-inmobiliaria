import { motion } from "framer-motion";

interface BentoCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    index: number;
    onClick: () => void;
}

export default function BentoCard({
    title,
    description,
    icon,
    image,
    index,
    onClick,
}: BentoCardProps) {
    return (
        <motion.div
            onClick={onClick}
            className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 3 ? "lg:col-span-2" : ""
            }`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/40 transition-colors" />
            </div>

            {/* Content */}
            <div className="relative p-6 h-full flex flex-col justify-end">
                <div className="space-y-4">
                    {/* Icon */}
                    <motion.div
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg w-fit"
                        whileHover={{ scale: 1.1 }}
                    >
                        {icon}
                    </motion.div>

                    {/* Title and Description */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">
                            {title}
                        </h3>
                        <p className="text-gray-200 text-sm line-clamp-2 transition-all">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
