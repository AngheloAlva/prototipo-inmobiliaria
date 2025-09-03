export interface Property {
    id: string;
    title: string;
    location: string;
    price: string | null;
    area: string;
    images: string[];
    videos?: string[];
    description: string;
    features: string[];
    services: string[];
    amenities: string[];
}

export const properties: Property[] = [
    {
        id: "1",
        title: "Parcela Vista Cordillera",
        location: "Yungay, Ñuble",
        price: null,
        area: "5.000",
        images: [
            "/terreno-1.jpeg",
            "/terreno-2.jpeg",
            "/terreno-3.jpeg",
            "/terreno-4.jpeg",
            "/terreno-5.jpeg",
            "/terreno-6.jpeg",
            "/terreno-7.jpeg",
            "/terreno-8.jpeg",
            "/terreno-9.jpeg",
        ],
        videos: ["/terreno-29.mp4"],
        description:
            "Espectacular parcela con vista privilegiada a la Cordillera de los Andes. Ubicada en el exclusivo proyecto Altos de Mahuida, esta propiedad ofrece una combinación única de naturaleza y confort. \n\nEl terreno cuenta con una suave pendiente que maximiza las vistas panorámicas, permitiéndote disfrutar de impresionantes amaneceres y atardeceres con la cordillera como telón de fondo. \n\nIdeal para construir tu casa soñada en un entorno natural privilegiado, con fácil acceso a la ciudad de Yungay y sus servicios.",
        features: [
            "Vista panorámica a la Cordillera",
            "Terreno con pendiente suave",
            "Orientación óptima",
            "Acceso controlado",
            "Entorno natural preservado",
        ],
        services: [
            "Factibilidad de luz",
            "Factibilidad de agua",
            "Caminos interiores",
        ],
        amenities: [
            "A 10 minutos de Yungay",
            "Cerca de servicios básicos",
            "Acceso pavimentado",
        ],
    },
    {
        id: "2",
        title: "Parcela Valle Central",
        location: "Yungay, Ñuble",
        price: "$ 38.500.000",
        area: "5.000",
        images: [
            "/terreno-10.jpeg",
            "/terreno-11.jpeg",
            "/terreno-12.jpeg",
            "/terreno-13.jpeg",
            "/terreno-14.jpeg",
            "/terreno-15.jpeg",
            "/terreno-16.jpeg",
            "/terreno-17.jpeg",
            "/terreno-18.jpeg",
        ],
        videos: ["/terreno-30.mp4"],
        description:
            "Hermosa parcela ubicada en el corazón del proyecto Altos de Mahuida, con vistas panorámicas al valle central. Esta propiedad ofrece el equilibrio perfecto entre privacidad y conectividad. \n\nEl terreno presenta una topografía ideal para construcción, con áreas planas y una suave pendiente que permite aprovechar las vistas al valle. \n\nExcelente oportunidad para invertir en un proyecto exclusivo con alta plusvalía, en una zona de creciente desarrollo.",
        features: [
            "Vista al valle",
            "Terreno plano",
            "Excelente orientación",
            "Seguridad 24/7",
            "Comunidad exclusiva",
        ],
        services: [
            "Factibilidad de servicios básicos",
            "Red vial interior",
            "Portón de acceso automatizado",
        ],
        amenities: [
            "Cerca de centros educativos",
            "Próximo a comercio local",
            "Fácil acceso a carretera",
        ],
    },
    {
        id: "3",
        title: "Parcela Bosque Nativo",
        location: "Yungay, Ñuble",
        price: "UF 1250",
        area: "5.000",
        images: [
            "/terreno-19.jpeg",
            "/terreno-20.jpeg",
            "/terreno-21.jpeg",
            "/terreno-22.jpeg",
            "/terreno-23.jpeg",
            "/terreno-24.jpeg",
            "/terreno-25.jpeg",
            "/terreno-26.jpeg",
            "/terreno-27.jpeg",
        ],
        description:
            "Exclusiva parcela rodeada de bosque nativo en Altos de Mahuida, perfecta para los amantes de la naturaleza. Esta propiedad única combina la privacidad del entorno natural con las comodidades de un proyecto residencial de primer nivel. \n\nEl terreno conserva especies nativas que proporcionan un microclima especial y refugio para la fauna local. \n\nUna oportunidad única para vivir en armonía con la naturaleza, sin renunciar a la conectividad y servicios modernos.",
        features: [
            "Entorno de bosque nativo",
            "Fauna silvestre",
            "Máxima privacidad",
            "Microclima privilegiado",
            "Senderos naturales",
        ],
        services: [
            "Acceso controlado",
            "Factibilidad de servicios",
            "Caminos estabilizados",
        ],
        amenities: [
            "Comunidad exclusiva",
            "Cerca de servicios esenciales",
            "Entorno natural preservado",
        ],
    },
];
