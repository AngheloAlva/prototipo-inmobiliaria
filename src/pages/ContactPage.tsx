import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, User, Calendar } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    meetingType: "virtual" | "presencial";
    preferredDate: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
        meetingType: "virtual",
        preferredDate: "",
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error when field is updated
        if (errors[name as keyof FormData]) {
            setErrors({
                ...errors,
                [name]: undefined,
            });
        }
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            meetingType: e.target.value as "virtual" | "presencial",
        });
    };

    const validateForm = () => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name) newErrors.name = "Requerido";
        if (!formData.email) {
            newErrors.email = "Requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (!formData.phone) newErrors.phone = "Requerido";
        if (!formData.message) newErrors.message = "Requerido";
        if (!formData.preferredDate) newErrors.preferredDate = "Requerido";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setSubmitStatus("loading");

            // Simulate API call
            setTimeout(() => {
                setSubmitStatus("success");
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    meetingType: "virtual",
                    preferredDate: "",
                });
            }, 1000);
        }
    };

    return (
        <div className=" bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div
                className="h-64 relative bg-cover bg-center"
                style={{
                    backgroundImage: "url(/terreno-16.jpeg)",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Contáctanos
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl text-center">
                        Descubre tu lugar en Altos de Mahuida, Yungay
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden -mt-16 relative z-20">
                    <div className="md:flex">
                        {/* Contact Information */}
                        <div className="md:w-1/3 bg-emerald-700 text-white p-8">
                            <h2 className="text-2xl font-bold mb-6">
                                Información de Contacto
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Phone className="mr-3 h-5 w-5 text-white" />
                                    <div>
                                        <p className="font-semibold">
                                            Teléfono
                                        </p>
                                        <p className="text-white/90">
                                            +56 9 8765 4321
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="mr-3 h-5 w-5 text-white" />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-white/90">
                                            contacto@inmobiliariaulloaacardi.cl
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="mr-3 h-5 w-5 text-white" />
                                    <div>
                                        <p className="font-semibold">
                                            Dirección
                                        </p>
                                        <p className="text-white/90">
                                            Camino a Yungay, Sector Mahuida
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Clock className="mr-3 h-5 w-5 text-white" />
                                    <div>
                                        <p className="font-semibold">
                                            Horario de Atención
                                        </p>
                                        <p className="text-white/90">
                                            Lunes a Domingo: 9:00 - 19:00
                                        </p>
                                        <p className="text-white/90">
                                            Visitas al proyecto con cita previa
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-24">
                                <h3 className="font-semibold mb-3">
                                    Síguenos en redes sociales
                                </h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="text-white hover:text-emerald-300 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white hover:text-emerald-300 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect
                                                x="2"
                                                y="2"
                                                width="20"
                                                height="20"
                                                rx="5"
                                                ry="5"
                                            ></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line
                                                x1="17.5"
                                                y1="6.5"
                                                x2="17.51"
                                                y2="6.5"
                                            ></line>
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white hover:text-emerald-300 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:w-2/3 p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                Agenda una Reunión
                            </h2>

                            {submitStatus === "success" ? (
                                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full text-emerald-600 mb-4">
                                        <Check size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        ¡Mensaje Enviado!
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Hemos recibido tu solicitud. Un agente
                                        inmobiliario se pondrá en contacto
                                        contigo pronto para confirmar tu
                                        reunión.
                                    </p>
                                    <button
                                        onClick={() => setSubmitStatus("idle")}
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-elegant"
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Nombre completo *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <User
                                                        size={18}
                                                        className="text-gray-400"
                                                    />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                                                        errors.name
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                    }`}
                                                    placeholder="Tu nombre"
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Email *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Mail
                                                        size={18}
                                                        className="text-gray-400"
                                                    />
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                                                        errors.email
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                    }`}
                                                    placeholder="tu@email.com"
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Teléfono *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Phone
                                                        size={18}
                                                        className="text-gray-400"
                                                    />
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                                                        errors.phone
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                    }`}
                                                    placeholder="+56 9 XXXX XXXX"
                                                />
                                            </div>
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="preferredDate"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Fecha preferida *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Calendar
                                                        size={18}
                                                        className="text-gray-400"
                                                    />
                                                </div>
                                                <input
                                                    type="date"
                                                    id="preferredDate"
                                                    name="preferredDate"
                                                    value={
                                                        formData.preferredDate
                                                    }
                                                    onChange={handleChange}
                                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                                                        errors.preferredDate
                                                            ? "border-red-500"
                                                            : "border-gray-300"
                                                    }`}
                                                    min={
                                                        new Date()
                                                            .toISOString()
                                                            .split("T")[0]
                                                    }
                                                />
                                            </div>
                                            {errors.preferredDate && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {errors.preferredDate}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Tipo de reunión *
                                        </label>
                                        <div className="flex space-x-6">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    className="form-radio text-emerald-600"
                                                    name="meetingType"
                                                    value="virtual"
                                                    checked={
                                                        formData.meetingType ===
                                                        "virtual"
                                                    }
                                                    onChange={handleRadioChange}
                                                />
                                                <span className="ml-2">
                                                    Virtual
                                                </span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    className="form-radio text-emerald-600"
                                                    name="meetingType"
                                                    value="presencial"
                                                    checked={
                                                        formData.meetingType ===
                                                        "presencial"
                                                    }
                                                    onChange={handleRadioChange}
                                                />
                                                <span className="ml-2">
                                                    Presencial
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label
                                            htmlFor="message"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                                                errors.message
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="¿En qué podemos ayudarte? ¿Te gustaría conocer más sobre nuestras parcelas en Altos de Mahuida?"
                                        ></textarea>
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitStatus === "loading"}
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-elegant flex items-center justify-center"
                                    >
                                        {submitStatus === "loading" ? (
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                        ) : (
                                            <Send size={18} className="mr-2" />
                                        )}
                                        {submitStatus === "loading"
                                            ? "Enviando..."
                                            : "Enviar Mensaje"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Added to fix TypeScript error
const Check = (props: { size: number }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );
};

export default ContactPage;
