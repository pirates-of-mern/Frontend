import React, { useEffect, useState } from "react";
import { getAllHeritages } from "../api/heritageAPI"; // 👈 tumhare axios wali file import karo

const HeritageMap = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    // Backend se data fetch
    const fetchSites = async () => {
      try {
        const data = await getAllHeritages();
        setSites(data);
      } catch (error) {
        console.error("Error fetching heritage sites:", error);
      }
    };
    fetchSites();
  }, []);

  useEffect(() => {
    if (sites.length > 0) {
      // Google Maps script dynamically load karo
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDVQS4uyYHxAxmYG5p9wMfYeVCGGV6jgK4&callback=initMap`;
      script.async = true;
      window.initMap = () => initMap(sites);
      document.body.appendChild(script);
    }
  }, [sites]);

  const initMap = (sites) => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 23.2599, lng: 77.4126 }, // Bharat center
    });

    sites.forEach((site) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: site.location.latitude,
          lng: site.location.longitude,
        },
        map,
        title: site.name,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="max-width:250px;font-family:Arial,sans-serif;">
            <h2 style="font-size:18px;margin:5px 0;">${site.name}</h2>
            <img src="${
              site.images?.[0] || ""
            }" width="200" style="border-radius:8px;margin-bottom:8px;" />
            <p><b>Built by:</b> ${site.built_by} (${site.built_year})</p>
            <p><b>Location:</b> ${site.location.city}, ${
          site.location.state
        }</p>
            <p style="font-size:14px;">${site.description?.substring(
              0,
              120
            )}...</p>
            <p><b>Timings:</b> ${site.extra_info?.timings}</p>
            <p><b>Closed On:</b> ${site.extra_info?.closed_on}</p>
            <button onclick="alert('AR view for ${site.name}')"
              style="padding:6px 10px;margin:4px 2px;background:#28a745;color:white;border:none;border-radius:6px;cursor:pointer;">
              View in AR
            </button>
            <button onclick="alert('VR tour for ${site.name}')"
              style="padding:6px 10px;margin:4px 2px;background:#007bff;color:white;border:none;border-radius:6px;cursor:pointer;">
              View in VR
            </button>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🗺️ Heritage & Culture Map</h1>
      <div id="map" style={{ height: "90vh", width: "100%" }}></div>
    </div>
  );
};

export default HeritageMap;
