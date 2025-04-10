"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "quarterly",
      });

      const { Map } = await loader.importLibrary("maps");
      const locationInMap = {
        lat: 28.5530368,
        lng: 77.1775422,
      };

      // Import Marker library
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 12,
        mapId: "FAST_PRINT",
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);

      // Create marker without assigning it to a variable
      new Marker({
        map: map,
        position: locationInMap,
      });
    };

    initializeMap();
  }, []);

  return <div className="h-[400px] rounded-lg" ref={mapRef}></div>;
};

export default MapComponent;
