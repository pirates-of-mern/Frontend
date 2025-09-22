import React, { useEffect, useRef } from "react";

const MiniMapPreview = ({ sites = [] }) => {
  const mapRef = useRef(null); // Reference to the DOM node for the map

  useEffect(() => {
    if (!sites || sites.length === 0) return;

    // Load the script if not already present
    if (!window.google || !window.google.maps) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDVQS4uyYHxAxmYG5p9wMfYeVCGGV6jgK4&callback=initMiniMap`;
      script.async = true;
      script.defer = true;

      window.initMiniMap = () => initializeMap();

      document.body.appendChild(script);
    } else {
      initializeMap();
    }

    function initializeMap() {
      if (!mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 4,
        center: { lat: 23.2599, lng: 77.4126 }, // India center
        disableDefaultUI: true,
        gestureHandling: "none",
        zoomControl: false,
      });

      const categoryColors = {
        Heritage: "red",
        Monument: "blue",
        Temple: "green",
        Cave: "brown",
        Fort: "orange",
        Religious: "purple",
        Palace: "pink",
        Museum: "yellow",
        Other: "gray",
      };

      sites.forEach((site) => {
        new window.google.maps.Marker({
          position: {
            lat: site.location.latitude,
            lng: site.location.longitude,
          },
          map,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: categoryColors[site.category] || "black",
            fillOpacity: 1,
            strokeWeight: 1,
          },
          title: site.name,
        });
      });
    }
  }, [sites]);

  return (
    <div
      ref={mapRef}
      className="w-full h-64 rounded-xl shadow-lg border border-gray-300"
    />
  );
};

export default MiniMapPreview;
