import React from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import img1 from "../assets/img1.jpg";

const ProfileCard = () => {
  // Card data ek array me store karo
  const cards = [
    {
      id: 1,
      image: hero1,
      title: "Taj Mahal",
      description:
        "The Taj Mahal, located in Agra, India, is one of the most famous monuments in the world. Built by Shah Jahan in memory of Mumtaz Mahal.",
      link: "https://en.wikipedia.org/wiki/Taj_Mahal",
    },
    {
      id: 2,
      image: hero2,
      title: "Qutub Minar",
      description:
        "Qutub Minar in Delhi is a UNESCO World Heritage Site. It is the tallest brick minaret in the world, built in 1193.",
      link: "https://en.wikipedia.org/wiki/Qutb_Minar",
    },
    {
      id: 3,
      image: hero3,
      title: "Red Fort",
      description:
        "The Red Fort in Delhi was the main residence of the Mughal emperors for around 200 years, until 1857.",
      link: "https://en.wikipedia.org/wiki/Red_Fort",
    },
    {
      id: 4,
      image: img1,
      title: "Hawa Mahal",
      description:
        "Hawa Mahal in Jaipur, also known as the 'Palace of Winds', was built in 1799 by Maharaja Sawai Pratap Singh.",
      link: "https://en.wikipedia.org/wiki/Hawa_Mahal",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col"
        >
          {/* Image */}
          <div className="w-full">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4 text-sm flex-1">{card.description}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline mt-auto"
            >
              Learn More →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
