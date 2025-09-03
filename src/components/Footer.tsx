import { Link } from "react-router-dom";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Twitter,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <MapPin size={24} className="text-emerald-500" />
                            <h3 className="text-xl font-semibold">
                                Inmobiliaria Ulloa Accardi
                            </h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Parcelas de 5.000 m² en la hermosa región del Bío
                            Bío, el lugar perfecto para descansar y disfrutar de
                            la naturaleza.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-2">
                            {[
                                ["Inicio", "/"],
                                ["Terrenos Disponibles", "/listings"],
                                ["Sobre Nosotros", "/about"],
                                ["Contacto", "/contact"],
                            ].map(([title, url]) => (
                                <li key={url}>
                                    <Link
                                        to={url}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Información de Contacto
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin
                                    size={20}
                                    className="text-emerald-500 mt-1 flex-shrink-0"
                                />
                                <span className="text-gray-400">
                                    Región del Bío Bío, Chile
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone
                                    size={20}
                                    className="text-emerald-500 mt-1 flex-shrink-0"
                                />
                                <span className="text-gray-400">
                                    +56 9 1234 5678
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail
                                    size={20}
                                    className="text-emerald-500 mt-1 flex-shrink-0"
                                />
                                <span className="text-gray-400">
                                    info@canelainvertasesorias.cl
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Horario de Atención
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Lunes - Viernes: 9:00 - 18:00</li>
                            <li>Sábado: 10:00 - 15:00</li>
                            <li>Domingo: Cerrado</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} Inmobiliaria Ulloa
                        Accardi. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
