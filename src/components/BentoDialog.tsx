import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface BentoDialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    image?: string;
    icon?: React.ReactNode;
}

export default function BentoDialog({
    isOpen,
    onClose,
    title,
    description,
    image,
    icon,
}: BentoDialogProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Dialog */}
                    <div
                        className="flex z-50 items-center justify-center fixed inset-0"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                onClose();
                            }
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="w-full max-w-2xl bg-white rounded-xl shadow-elegant p-6"
                        >
                            <div className="relative">
                                {/* Close button */}
                                <button
                                    onClick={onClose}
                                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-elegant hover:scale-110 transition-transform"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>

                                {/* Content */}
                                <div className="space-y-4">
                                    {/* Image */}
                                    <div className="relative h-64 rounded-lg overflow-hidden">
                                        <motion.img
                                            src={image}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                            initial={{ scale: 1.2 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>

                                    {/* Icon and Title */}
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary-50 rounded-lg">
                                            {icon}
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-gray-800">
                                            {title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
