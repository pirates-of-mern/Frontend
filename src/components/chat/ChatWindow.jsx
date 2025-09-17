
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import TypingEffect from "./TypingEffect";

const ChatWindow = ({ messages }) => {
  const bottomRef = useRef(null);
  const [typingMessageId, setTypingMessageId] = useState(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    // Find last bot message index to show typing effect
    const lastBotMsgIndex = messages
      .map((msg) => msg.sender)
      .lastIndexOf("bot");
    setTypingMessageId(lastBotMsgIndex);
  }, [messages]);

  // When typing finishes, clear typingMessageId so full text shows
  const handleTypingDone = () => {
    setTypingMessageId(null);
  };

  return (
    <div className="flex-1 w-full max-w-3xl overflow-y-auto px-2 sm:px-0 py-4 bg-gray-50 rounded-lg space-y-4 h-full border">
      {messages.map((msg, idx) => {
        const isTyping = idx === typingMessageId && msg.sender === "bot";

        return (
          <div
            key={idx}
            className={`flex px-2 md:px-4 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-xl px-4 py-3 text-sm md:text-base leading-relaxed max-w-[80%] whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              {isTyping ? (
                <TypingEffect
                  text={msg.text}
                  speed={20}
                  onDone={handleTypingDone}
                />
              ) : msg.sender === "bot" ? (
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="mb-2 last:mb-0">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-100 text-sm px-1 rounded">
                        {children}
                      </code>
                    ),
                  }}
                >
                  {msg.text}
                </ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        );
      })}

      {/* Scroll anchor */}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;
