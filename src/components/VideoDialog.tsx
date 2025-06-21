import { AnimatePresence, motion } from "framer-motion";
import { X, Play } from "lucide-react";
import { useState } from "react";

interface VideoDialogProps {
    videoId: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function VideoDialog({ videoId, isOpen, onClose }: VideoDialogProps) {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleClose = () => {
        setIsVideoLoaded(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Dialog */}
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                handleClose();
                            }
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="w-full max-w-4xl bg-black rounded-xl shadow-elegant relative aspect-video"
                        >
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-elegant hover:scale-110 transition-transform z-10"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>

                            {/* Video Container */}
                            <div className="w-full h-full rounded-xl overflow-hidden">
                                {isVideoLoaded ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <div className="w-full h-full bg-black flex items-center justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setIsVideoLoaded(true)}
                                            className="flex items-center gap-2 text-white bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg transition-colors"
                                        >
                                            <Play className="w-6 h-6" />
                                            <span>Reproducir Video</span>
                                        </motion.button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
