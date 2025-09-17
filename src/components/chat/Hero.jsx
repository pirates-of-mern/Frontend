// components/Hero.js
import React from "react";
import { BookOpen } from "lucide-react";

const Hero = () => (
    <div className="flex flex-col items-center text-center max-w-3xl w-full">
        <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-gradient-to-tr from-indigo-500 to-blue-500 p-4 rounded-full">
                <BookOpen size={40} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                STORYTELLING
            </h1>
        </div>
        <p className="text-gray-500 mb-8 text-base md:text-lg">
            Heritage meets innovation: Stories of India, reimagined
        </p>
    </div>
);

export default Hero;
