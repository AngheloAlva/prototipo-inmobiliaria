import { motion } from "framer-motion";

interface FeatureHighlightProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    direction?: "left" | "right";
}

export default function FeatureHighlight({
    icon,
    title,
    description,
    image,
    direction = "left",
}: FeatureHighlightProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl bg-white shadow-card hover:shadow-elegant transition-shadow duration-300"
        >
            <div
                className={`flex flex-col md:flex-row ${
                    direction === "right" ? "md:flex-row-reverse" : ""
                }`}
            >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 aspect-[4/3]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="relative w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <motion.div
                        className="p-3 bg-amber-50 rounded-xl w-fit mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        {icon}
                    </motion.div>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        {title}
                    </h3>

                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}
