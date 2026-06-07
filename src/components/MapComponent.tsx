import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN as string | undefined;

interface Location {
    name: string;
    coordinates: [number, number];
    description: string;
}

const locations: Record<string, Location> = {
    villaSerna: {
        name: "Villa Serena",
        coordinates: [-72.0167, -37.1167] as [number, number],
        description: "Ciudad principal cercana al proyecto",
    },
    valleDelSol: {
        name: "Valle del Sol",
        coordinates: [-71.9667, -37.0833] as [number, number],
        description: "Proyecto inmobiliario en territorio protegido",
    },
    cascadaDelBosque: {
        name: "Cascada del Bosque",
        coordinates: [-71.95, -37.0667] as [number, number],
        description: "Impresionante caída de agua",
    },
    puertoEsperanza: {
        name: "Puerto Esperanza",
        coordinates: [-73.05, -36.8267] as [number, number],
        description: "Ciudad principal de la región",
    },
};

interface MapComponentProps {
    className?: string;
}

const MapComponent = ({ className = "" }: MapComponentProps) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (!MAPBOX_TOKEN || !mapContainer.current) return;

        mapboxgl.accessToken = MAPBOX_TOKEN;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/outdoors-v12",
            center: locations.villaSerna.coordinates,
            zoom: 10,
            pitch: 45,
            bearing: -17.6,
            antialias: true,
        });

        map.current.on("load", () => {
            if (!map.current) return;

            // Add markers for each location
            Object.values(locations).forEach((location) => {
                const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <h3 class="font-bold">${location.name}</h3>
            <p>${location.description}</p>
          `);

                new mapboxgl.Marker({
                    color:
                        location.name === "Valle del Sol"
                            ? "#059669"
                            : "#ef4444",
                })
                    .setLngLat(location.coordinates)
                    .setPopup(popup)
                    .addTo(map.current!);
            });

            // Add 3D terrain
            map.current.addSource("mapbox-dem", {
                type: "raster-dem",
                url: "mapbox://mapbox.mapbox-terrain-dem-v1",
                tileSize: 512,
                maxzoom: 14,
            });

            map.current.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
        });

        // Add navigation controls
        map.current.addControl(new mapboxgl.NavigationControl());

        return () => {
            map.current?.remove();
        };
    }, []);

    if (!MAPBOX_TOKEN) {
        return (
            <div
                className={`relative flex items-center justify-center bg-gray-100 rounded-xl ${className}`}
            >
                <p className="text-gray-500 text-sm text-center px-4">
                    Mapa no disponible — configurá{" "}
                    <code className="font-mono bg-gray-200 px-1 rounded">
                        VITE_MAPBOX_TOKEN
                    </code>
                </p>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <div
                ref={mapContainer}
                className="w-full h-full rounded-xl overflow-hidden"
            />
        </div>
    );
};

export default MapComponent;
