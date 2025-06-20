export interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    area: string;
    images: string[];
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
        price: "40.000.000",
        area: "5.000",
        images: [
            "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
            "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg",
            "https://images.pexels.com/photos/1578749/pexels-photo-1578749.jpeg"
        ],
        description: "Espectacular parcela con vista privilegiada a la Cordillera de los Andes. Ubicada en el exclusivo proyecto Altos de Mahuida, esta propiedad ofrece una combinación única de naturaleza y confort. \n\nEl terreno cuenta con una suave pendiente que maximiza las vistas panorámicas, permitiéndote disfrutar de impresionantes amaneceres y atardeceres con la cordillera como telón de fondo. \n\nIdeal para construir tu casa soñada en un entorno natural privilegiado, con fácil acceso a la ciudad de Yungay y sus servicios.",
        features: [
            "Vista panorámica a la Cordillera",
            "Terreno con pendiente suave",
            "Orientación óptima",
            "Acceso controlado",
            "Entorno natural preservado"
        ],
        services: [
            "Factibilidad de luz",
            "Factibilidad de agua",
            "Caminos interiores"
        ],
        amenities: [
            "A 10 minutos de Yungay",
            "Cerca de servicios básicos",
            "Acceso pavimentado"
        ]
    },
    {
        id: "2",
        title: "Parcela Valle Central",
        location: "Yungay, Ñuble",
        price: "38.500.000",
        area: "5.000",
        images: [
            "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
            "https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg",
            "https://images.pexels.com/photos/1587699/pexels-photo-1587699.jpeg"
        ],
        description: "Hermosa parcela ubicada en el corazón del proyecto Altos de Mahuida, con vistas panorámicas al valle central. Esta propiedad ofrece el equilibrio perfecto entre privacidad y conectividad. \n\nEl terreno presenta una topografía ideal para construcción, con áreas planas y una suave pendiente que permite aprovechar las vistas al valle. \n\nExcelente oportunidad para invertir en un proyecto exclusivo con alta plusvalía, en una zona de creciente desarrollo.",
        features: [
            "Vista al valle",
            "Terreno plano",
            "Excelente orientación",
            "Seguridad 24/7",
            "Comunidad exclusiva"
        ],
        services: [
            "Factibilidad de servicios básicos",
            "Red vial interior",
            "Portón de acceso automatizado"
        ],
        amenities: [
            "Cerca de centros educativos",
            "Próximo a comercio local",
            "Fácil acceso a carretera"
        ]
    },
    {
        id: "3",
        title: "Parcela Bosque Nativo",
        location: "Yungay, Ñuble",
        price: "42.000.000",
        area: "5.000",
        images: [
            "https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg",
            "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg",
            "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg"
        ],
        description: "Exclusiva parcela rodeada de bosque nativo en Altos de Mahuida, perfecta para los amantes de la naturaleza. Esta propiedad única combina la privacidad del entorno natural con las comodidades de un proyecto residencial de primer nivel. \n\nEl terreno conserva especies nativas que proporcionan un microclima especial y refugio para la fauna local. \n\nUna oportunidad única para vivir en armonía con la naturaleza, sin renunciar a la conectividad y servicios modernos.",
        features: [
            "Entorno de bosque nativo",
            "Fauna silvestre",
            "Máxima privacidad",
            "Microclima privilegiado",
            "Senderos naturales"
        ],
        services: [
            "Acceso controlado",
            "Factibilidad de servicios",
            "Caminos estabilizados"
        ],
        amenities: [
            "Comunidad exclusiva",
            "Cerca de servicios esenciales",
            "Entorno natural preservado"
        ]
    }
];
