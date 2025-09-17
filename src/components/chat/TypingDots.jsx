// components/TypingDots.jsx
import React from "react";

const TypingDots = () => (
  <span className="typing-dots">
    <style>{`
      .typing-dots::after {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-left: 5px;
        border-radius: 50%;
        background-color: #4f46e5;
        animation: blink 1.4s infinite ease-in-out both;
      }
      .typing-dots::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-left: 5px;
        border-radius: 50%;
        background-color: #4f46e5;
        animation: blink 1.4s infinite ease-in-out both;
        animation-delay: 0.2s;
      }
      .typing-dots {
        animation: blink 1.4s infinite ease-in-out both;
      }
      @keyframes blink {
        0%, 80%, 100% {
          opacity: 0;
        }
        40% {
          opacity: 1;
        }
      }
    `}</style>
  </span>
);

export default TypingDots;
