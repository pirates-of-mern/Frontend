import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedHeading from "../components/Landing/AnimatedHeading";
import StartButton from "../components/Landing/StartButton";
import VideoGrid from "../components/Landing/VideoGrid";
import ProfileCard from "../components/cards/ProfileCard";

import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleStartClick = () => navigate("/heritages");

  return (
    <main className="pt-24 px-8 pb-16 bg-gradient-to-br from-green-100 to-green-150 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <AnimatedHeading
            lines={["BHARAT", "SANSKRITI", "ATLAS ..."]}
            charDelay={38}
            lineDelay={420}
            duration={480}
            cursor={true}
          />
          <div className="mt-6">
            <StartButton onClick={handleStartClick} />
          </div>
          <p className="text-4xl text-gray-700 mt-6 transition duration-300 hover:scale-105 hover:text-green-600">
            Mapping India’s <br /> Timeless Traditions
          </p>
        </div>

        {/* Right Section */}
        <VideoGrid videos={[vid1, vid2, vid3]} />
      </div>

      {/* Profiles */}
      {[...Array(4)].map((_, i) => (
        <ProfileCard key={i} className="mt-16 mx-auto" />
      ))}
    </main>
  );
};

export default LandingPage;
