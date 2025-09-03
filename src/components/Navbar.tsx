import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TreesIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 shadow-lg backdrop-blur-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/" className="flex items-center space-x-2">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: 1 }}
                            >
                                <TreesIcon
                                    size={28}
                                    className="text-emerald-700"
                                    strokeWidth={2.5}
                                />
                            </motion.div>
                            <span
                                className={`font-semibold text-xl ${
                                    isScrolled
                                        ? "text-emerald-800"
                                        : "text-white"
                                }`}
                            >
                                Inmobiliaria Ulloa Accardi
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        {[
                            ["Inicio", "/"],
                            ["Terrenos", "/listings"],
                            ["Contacto", "/contact"],
                        ].map(([title, url]) => (
                            <motion.li
                                key={url}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={url}
                                    className={`font-medium transition-colors relative ${
                                        location.pathname === url
                                            ? "text-emerald-600"
                                            : isScrolled
                                            ? "text-gray-800 hover:text-emerald-600"
                                            : "text-white hover:text-emerald-200"
                                    } ${
                                        location.pathname === url
                                            ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600"
                                            : ""
                                    }`}
                                >
                                    {title}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X
                                className={
                                    isScrolled ? "text-gray-800" : "text-white"
                                }
                                size={24}
                            />
                        ) : (
                            <Menu
                                className={
                                    isScrolled ? "text-gray-800" : "text-white"
                                }
                                size={24}
                            />
                        )}
                    </motion.button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden pt-4 pb-2"
                        >
                            <ul className="flex flex-col space-y-3">
                                {[
                                    ["Inicio", "/"],
                                    ["Terrenos", "/listings"],
                                    ["Contacto", "/contact"],
                                ].map(([title, url]) => (
                                    <motion.li
                                        key={url}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -20, opacity: 0 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <Link
                                            to={url}
                                            className={`block py-2 transition-colors ${
                                                location.pathname === url
                                                    ? "text-emerald-600 font-medium"
                                                    : "text-gray-800 hover:text-emerald-600"
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {title}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
