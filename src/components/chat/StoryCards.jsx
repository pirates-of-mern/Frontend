// components/StoryCards.jsx
import React from "react";

const stories = [
  "Make a story about ancient monuments like the Taj Mahal, Qutub Minar, and Konark Sun Temple coming alive at night to share the secrets of India’s past with curious children.",
  "Create a storybook about the journey of Diwali lamps as they travel from homes, temples, and rivers, spreading light, joy, and unity across India.",
  "Tell a story about a wise elephant in Kerala who guides children through a temple festival, showing them rituals, dances, and the meaning of devotion.",
  "Make a story about a curious child who visits an ancient gurukul and learns wisdom from stories of the Ramayana and Mahabharata.",
];

const StoryCards = () => (
  <section
    aria-label="Story prompts"
    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-12"
  >
    {stories.map((story, index) => (
      <article
        key={index}
        className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
        tabIndex={0}
        role="button"
        onKeyDown={(e) =>
          e.key === "Enter" && alert(`You selected story #${index + 1}`)
        }
        onClick={() => alert(`You selected story #${index + 1}`)}
      >
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          {story}
        </p>
      </article>
    ))}
  </section>
);

export default StoryCards;
