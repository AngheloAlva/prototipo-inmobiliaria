import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYW56NyIsImEiOiJjbGtseHdub2swZnFyM2xqdGw4bWZoc244In0.FRktEd6x6xyxK99fyzRXNw";

interface Location {
    name: string;
    coordinates: [number, number];
    description: string;
}

const locations: Record<string, Location> = {
    yungay: {
        name: "Yungay",
        coordinates: [-72.0167, -37.1167] as [number, number],
        description: "Ciudad principal cercana al proyecto",
    },
    altosDeMahuida: {
        name: "Altos de Mahuida",
        coordinates: [-71.9667, -37.0833] as [number, number], // Approximate coordinates, adjust as needed
        description: "Proyecto inmobiliario en territorio protegido",
    },
    saltoDelLeon: {
        name: "Salto del León",
        coordinates: [-71.95, -37.0667] as [number, number], // Approximate coordinates, adjust as needed
        description: "Impresionante caída de agua",
    },
    concepcion: {
        name: "Concepción",
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
        if (!mapContainer.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/outdoors-v12",
            center: locations.yungay.coordinates,
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
                        location.name === "Altos de Mahuida"
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
