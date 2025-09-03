import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    MapPin,
    ArrowLeft,
    Home,
    Ruler,
    Trees,
    Mountain,
    CloudSnow,
    ChevronLeft,
    ChevronRight,
    Play,
} from "lucide-react";
import { properties } from "../lib/consts";

const ListingDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    // Find the property by ID
    const property = properties.find((p) => p.id === id);

    // Combine images and videos into a single media array
    const mediaItems = [
        ...(property?.images.map((img) => ({
            type: "image" as const,
            src: img,
        })) || []),
        ...(property?.videos?.map((vid) => ({
            type: "video" as const,
            src: vid,
        })) || []),
    ];

    if (!property) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Terreno no encontrado
                    </h2>
                    <p className="text-gray-600 mb-6">
                        El terreno que estás buscando no existe o ha sido
                        removido.
                    </p>
                    <Link
                        to="/listings"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-elegant inline-flex items-center"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Volver a Terrenos
                    </Link>
                </div>
            </div>
        );
    }

    const nextMedia = () => {
        setCurrentMediaIndex((prevIndex) =>
            prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevMedia = () => {
        setCurrentMediaIndex((prevIndex) =>
            prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className=" bg-gray-50 relative min-h-screen">
            {/* Property Media Gallery */}
            <div className="relative bg-gray-900 overflow-hidden">
                <div className="relative h-[60vh] flex items-center justify-center">
                    {mediaItems.map((media, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                                index === currentMediaIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        >
                            {media.type === "image" ? (
                                <img
                                    src={media.src}
                                    alt={`${property.title} - Imagen ${
                                        index + 1
                                    }`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            ) : (
                                <video
                                    controls
                                    src={media.src}
                                    poster={property.images[0]}
                                    className="max-w-full max-h-full object-contain"
                                >
                                    Tu navegador no soporta videos.
                                </video>
                            )}
                        </div>
                    ))}

                    {/* Media Navigation */}
                    {mediaItems.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                            <button
                                onClick={prevMedia}
                                className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all transform hover:scale-110 backdrop-blur-sm pointer-events-auto"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextMedia}
                                className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all transform hover:scale-110 backdrop-blur-sm pointer-events-auto"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    )}

                    {/* Media Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {currentMediaIndex + 1} / {mediaItems.length}
                        {mediaItems[currentMediaIndex]?.type === "video" && (
                            <span className="ml-2 text-xs">📹</span>
                        )}
                    </div>
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center p-2 bg-gray-800">
                    <div className="flex space-x-2 overflow-x-auto max-w-full">
                        {mediaItems.map((media, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentMediaIndex(index)}
                                className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded relative ${
                                    index === currentMediaIndex
                                        ? "ring-2 ring-emerald-500"
                                        : "opacity-70"
                                }`}
                            >
                                {media.type === "image" ? (
                                    <img
                                        src={media.src}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                        <video
                                            src={media.src}
                                            className="w-full h-full object-cover"
                                            muted
                                            poster={property.images[0]}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                            <Play
                                                size={16}
                                                className="text-white"
                                            />
                                        </div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Property Details */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            {/* Header */}
                            <div className="p-8">
                                <div className="flex items-center text-emerald-600 mb-2">
                                    <MapPin size={18} className="mr-1" />
                                    <span className="font-medium">
                                        {property.location}
                                    </span>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                    {property.title}
                                </h1>
                                <div className="flex flex-wrap gap-6 mt-6">
                                    <div className="flex items-center">
                                        <Ruler
                                            className="text-gray-400 mr-2"
                                            size={20}
                                        />
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Superficie
                                            </p>
                                            <p className="font-semibold text-gray-800">
                                                {property.area} m²
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Home
                                            className="text-gray-400 mr-2"
                                            size={20}
                                        />
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Tipo
                                            </p>
                                            <p className="font-semibold text-gray-800">
                                                Parcela
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Trees
                                            className="text-gray-400 mr-2"
                                            size={20}
                                        />
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Entorno
                                            </p>
                                            <p className="font-semibold text-gray-800">
                                                Natural
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="border-t border-b border-gray-200">
                                <div className="flex overflow-x-auto">
                                    {[
                                        "Descripción",
                                        "Características",
                                        "Ubicación",
                                    ].map((tab) => (
                                        <button
                                            key={tab}
                                            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                                                tab === "Descripción"
                                                    ? "text-emerald-600 border-b-2 border-emerald-600"
                                                    : "text-gray-600 hover:text-emerald-600"
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="p-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                    Descripción
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    {property.description
                                        .split("\n\n")
                                        .map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                </div>

                                {/* Features */}
                                <div className="mt-10">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                        Características del terreno
                                    </h2>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {property.features.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center text-gray-600"
                                                >
                                                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* Services */}
                                <div className="mt-10">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                        Servicios
                                    </h2>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {property.services.map(
                                            (service, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center text-gray-600"
                                                >
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                    {service}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* Amenities */}
                                <div className="mt-10">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                        Cercanías
                                    </h2>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {property.amenities.map(
                                            (amenity, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center text-gray-600"
                                                >
                                                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                                                    {amenity}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                            <div className="mb-6">
                                {property.price && (
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800 mb-2">
                                            Precio
                                        </p>
                                        <p className="text-3xl font-bold text-primary-600">
                                            {property.price}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div
                                className={` ${
                                    property.price
                                        ? "border-t border-gray-200 pt-6"
                                        : ""
                                } mb-6`}
                            >
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    Beneficios
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        {
                                            icon: (
                                                <Mountain
                                                    size={20}
                                                    className="text-earth-600"
                                                />
                                            ),
                                            text: "Lugar de descanso ideal",
                                        },
                                        {
                                            icon: (
                                                <CloudSnow
                                                    size={20}
                                                    className="text-primary-500"
                                                />
                                            ),
                                            text: "Cerca de la nieve en invierno",
                                        },
                                        {
                                            icon: (
                                                <Trees
                                                    size={20}
                                                    className="text-forest-600"
                                                />
                                            ),
                                            text: "Tranquilidad en ambiente natural",
                                        },
                                    ].map((benefit, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <div className="mr-3">
                                                {benefit.icon}
                                            </div>
                                            <span className="text-gray-600">
                                                {benefit.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <Link
                                    to={`/reserve/${property.id}`}
                                    className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-elegant flex items-center justify-center"
                                >
                                    Reservar Ahora
                                </Link>
                                <Link
                                    to="/contact"
                                    className="w-full bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-elegant flex items-center justify-center"
                                >
                                    Contactar Agente
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingDetailPage;
