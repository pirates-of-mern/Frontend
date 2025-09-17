import React from "react";

const stories = [
  "Make a story about ancient monuments like the Taj Mahal, Qutub Minar, and Konark Sun Temple coming alive at night to share the secrets of India’s past with curious children.",
  "Create a storybook about the journey of Diwali lamps as they travel from homes, temples, and rivers, spreading light, joy, and unity across India.",
];

const StoryCards = () => (
  <section
    aria-label="Story prompts"
    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12 px-4"
  >
    {stories.map((story, idx) => (
      <article
        key={idx}
        className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300"
        tabIndex={0}
        role="button"
        onClick={() => alert(`You selected story #${idx + 1}`)}
        onKeyDown={(e) =>
          e.key === "Enter" && alert(`You selected story #${idx + 1}`)
        }
      >
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          {story}
        </p>
      </article>
    ))}
  </section>
);

export default StoryCards;
