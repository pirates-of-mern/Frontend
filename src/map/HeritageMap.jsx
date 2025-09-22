import React, { useEffect, useState } from "react";
import { getAllHeritages } from "../api/heritageAPI";
import MapComponent from "./MapComponent";
import HeritageCard from "./HeritageCard";

const HeritageMap = () => {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(true); // fixed missing variable

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const data = await getAllHeritages();
        setSites(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching heritage sites:", error);
      }
    };
    fetchSites();
  }, []);

  const handleMapLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <h1 className="text-center text-2xl sm:text-3xl font-bold pt-4">
        🗺️ Heritage & Culture Map
      </h1>

      <div className="flex flex-col lg:flex-row w-full flex-1">
        {/* Map */}
        <div className="flex-1 min-h-[70vh] lg:min-h-[90vh]">
          <MapComponent sites={sites} onMapLoad={handleMapLoad} />
        </div>

        {/* Cards */}
        <div className="lg:w-96 overflow-y-auto max-h-[90vh] p-4">
          {sites.map((site) => (
            <HeritageCard key={site._id || site.name} site={site} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeritageMap;
