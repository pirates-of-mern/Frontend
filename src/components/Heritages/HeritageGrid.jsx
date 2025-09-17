import React from "react";
import HeritageCard from "./HeritageCard";

const HeritageGrid = ({ heritages, isAdmin, onEditClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {heritages.map((h) => (
        <HeritageCard
          key={h._id}
          heritage={h}
          isAdmin={isAdmin}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
};

export default HeritageGrid;
