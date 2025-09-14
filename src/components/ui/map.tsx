// "use client";
// import { useEffect, useRef } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// const MapComponent = () => {
//   const mapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const initializeMap = async () => {
//       const loader = new Loader({
//         apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
//         version: "quarterly",
//       });

//       const { Map } = await loader.importLibrary("maps");
//       const locationInMap = {
//         lat: 28.5530368,
//         lng: 77.1775422,
//       };

//       // Import Marker library
//       const { Marker } = (await loader.importLibrary(
//         "marker"
//       )) as google.maps.MarkerLibrary;

//       const options: google.maps.MapOptions = {
//         center: locationInMap,
//         zoom: 12,
//         mapId: "FAST_PRINT",
//       };

//       const map = new Map(mapRef.current as HTMLDivElement, options);

//       // Create marker without assigning it to a variable
//       new Marker({
//         map: map,
//         position: locationInMap,
//       });
//     };

//     initializeMap();
//   }, []);

//   return <div className="h-[400px] rounded-lg" ref={mapRef}></div>;
// };

// export default MapComponent;
"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect } from "react";

const MapComponent = () => {
  // Fix for default marker icon in Leaflet
  useEffect(() => {
    delete (Icon.Default.prototype as any)._getIconUrl;
    Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  const position: [number, number] = [28.5530368, 77.1775422];

  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "400px", borderRadius: "0.5rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapContainer>
  );
};

export default MapComponent;