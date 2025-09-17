import React, { useEffect, useState } from "react";
import { getAllHeritages } from "../../api/heritageAPI";
import HeritageGrid from "./HeritageGrid";
import { motion } from "framer-motion";

const HeritageList = ({ token, isAdmin, searchTerm }) => {
  const [heritages, setHeritages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredHeritages, setFilteredHeritages] = useState([]);

  // Fetch heritages data
  useEffect(() => {
    const fetchHeritages = async () => {
      try {
        const data = await getAllHeritages();
        setHeritages(data);
        setFilteredHeritages(data); // Set all heritages initially
      } catch (err) {
        console.error("Failed to load heritages", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHeritages();
  }, []);

  // Filter the heritage list based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredHeritages(heritages);
      return;
    }

    const filtered = heritages.filter((heritage) => {
      const nameMatch = heritage.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const categoryMatch = heritage.category
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const descriptionMatch = heritage.description
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const cityMatch = heritage.location?.city
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const stateMatch = heritage.location?.state
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      return (
        nameMatch ||
        categoryMatch ||
        descriptionMatch ||
        cityMatch ||
        stateMatch
      );
    });

    setFilteredHeritages(filtered);
  }, [searchTerm, heritages]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  const title = "Discover India's Heritage";

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Animated Gradient Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-4 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.05 }}
      >
        {title.split("").map((char, idx) => (
          <motion.span
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Journey through time and culture — explore monuments, traditions, and
        stories that shaped our nation.
      </motion.p>

      {/* Divider */}
      <motion.div
        className="h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      />

      {/* Grid of Heritage Cards */}
      <HeritageGrid heritages={filteredHeritages} isAdmin={isAdmin} />
    </div>
  );
};

export default HeritageList;
