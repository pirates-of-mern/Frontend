import React, { useEffect } from "react";

const categoryColors = {
  Heritage: "#FF6B6B",
  Monument: "#4D96FF",
  Temple: "#4CAF50",
  Cave: "#8E44AD",
  Fort: "#F39C12",
  Religious: "#E91E63",
  Palace: "#00BCD4",
  Museum: "#FFC107",
  Other: "#7F8C8D",
};

const MapComponent = ({ sites, onMapLoad }) => {
  useEffect(() => {
    if (sites.length > 0) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDVQS4uyYHxAxmYG5p9wMfYeVCGGV6jgK4&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);

      window.initMap = () => initMap(sites);
      script.onload = () => onMapLoad?.();

      return () => {
        document.body.removeChild(script);
        delete window.initMap;
      };
    }
  }, [sites, onMapLoad]);

  const initMap = (sites) => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 23.2599, lng: 77.4126 },
    });

    sites.forEach((site) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat: site.location.latitude,
          lng: site.location.longitude,
        },
        map,
        title: site.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: categoryColors[site.category] || "black",
          fillOpacity: 1,
          strokeWeight: 2,
        },
      });

      // Full InfoWindow content
      const infoWindowContent = `
        <div style="max-width:320px;font-family:Arial,sans-serif;border-radius:16px;overflow:hidden;box-shadow:0 8px 20px rgba(0,0,0,0.2);">
          <div style="position:relative;height:180px;overflow:hidden;">
            <img src="${
              site.images?.[0] || ""
            }" style="width:100%;height:100%;object-fit:cover;" />
            ${
              site.category
                ? `<span style="
              position:absolute;top:10px;left:10px;
              background:${categoryColors[site.category]};
              color:white;
              padding:4px 10px;
              font-size:12px;
              font-weight:600;
              border-radius:20px;
            ">${site.category}</span>`
                : ""
            }
          </div>

          <div style="padding:12px 16px;color:#222;">
            <h2 style="margin:0;font-size:18px;font-weight:700;font-family:serif;">${
              site.name
            }</h2>
            <p style="margin:4px 0;font-size:13px;"><strong>Heritage Type:</strong> ${
              site.heritage_type || "N/A"
            }</p>
            <p style="margin:0;font-size:13px;"><strong>Built By:</strong> ${
              site.build_by || "Unknown"
            } (${site.build_year || "Unknown"})</p>
            <p style="margin:4px 0;font-size:13px;">📍 ${site.location.city}, ${
        site.location.state
      }, ${site.location.country}</p>
            <p style="margin:2px 0;font-size:13px;"><strong>UNESCO:</strong> ${
              site.unesco_status ? "Yes" : "No"
            }</p>
            <p style="margin:6px 0;font-size:13px;color:#444;">${
              site.description?.substring(0, 150) || ""
            }...</p>
            <p style="margin:2px 0;font-size:13px;"><strong>Visitors/Year:</strong> ${
              site.extra_info?.visitors_per_year || 0
            }</p>
            <p style="margin:2px 0;font-size:13px;"><strong>Entry Fee (Indian):</strong> ₹${
              site.extra_info?.entry_fee?.indian || 0
            }</p>
            <p style="margin:2px 0;font-size:13px;"><strong>Entry Fee (Foreigner):</strong> ₹${
              site.extra_info?.entry_fee?.foreigner || 0
            }</p>
            <p style="margin:2px 0;font-size:13px;"><strong>Timings:</strong> ${
              site.extra_info?.timings || "-"
            }</p>
            <p style="margin:2px 0;font-size:13px;"><strong>Closed On:</strong> ${
              site.extra_info?.closed_on || "-"
            }</p>

            ${
              site.videos?.length
                ? `<div style="margin-top:6px;">${site.videos
                    .map(
                      (v, i) =>
                        `<a href="${v}" target="_blank" style="color:#047857;font-size:12px;">Video ${
                          i + 1
                        }</a>`
                    )
                    .join("<br>")}</div>`
                : ""
            }

            <div style="margin-top:8px;display:flex;gap:6px;">
              <button onclick="alert('AR view for ${
                site.name
              }')" style="flex:1;padding:6px 10px;background:#28a745;color:white;border:none;border-radius:6px;cursor:pointer;">View in AR</button>
              <button onclick="alert('VR tour for ${
                site.name
              }')" style="flex:1;padding:6px 10px;background:#007bff;color:white;border:none;border-radius:6px;cursor:pointer;">View in VR</button>
            </div>
          </div>
        </div>
      `;

      const infoWindow = new window.google.maps.InfoWindow({
        content: infoWindowContent,
        maxWidth: 320,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] sm:h-[90vh] relative">
      <div id="map" className="w-full h-full rounded-md z-0"></div>
    </div>
  );
};

export default MapComponent;
