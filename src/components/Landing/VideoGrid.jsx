import React from "react";
import VideoCard from "./VideoCard";

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full md:w-1/2 justify-center">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          video={video}
          rotated={index % 2 === 0 ? "-rotate-3" : "rotate-3"}
        />
      ))}
    </div>
  );
};

export default VideoGrid;
