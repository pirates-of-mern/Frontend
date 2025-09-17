import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import TypingEffect from "./TypingEffect";

const ChatWindow = ({ messages, isTyping }) => {
  const bottomRef = useRef(null);
  const [typingMessageId, setTypingMessageId] = useState(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    const lastBotMsgIndex = messages
      .map((msg) => msg.sender)
      .lastIndexOf("bot");
    setTypingMessageId(lastBotMsgIndex);
  }, [messages]);

  const handleTypingDone = () => {
    setTypingMessageId(null);
  };

  return (
    <section
      aria-label="Chat conversation"
      className="
        flex-1 
        w-full 
        max-w-3xl 
        mx-auto 
        overflow-y-auto 
        px-4 
        py-6 
        pt-20 md:pt-16              /* Responsive padding top */
        bg-gray-50 
        rounded-lg 
        space-y-4 
        border 
        border-gray-300
        box-border
        h-[calc(100vh-80px)] md:h-[calc(100vh-64px)]  /* Responsive height */
      "
      role="log"
      aria-live="polite"
    >
      {messages.length === 0 && (
        <p className="text-center text-gray-400 select-none">
          No messages yet. Start the conversation!
        </p>
      )}

      {messages.map((msg, idx) => {
        const isTypingMessage = idx === typingMessageId && msg.sender === "bot";
        const isUser = msg.sender === "user";

        return (
          <div
            key={idx}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            aria-live={isUser ? "off" : "polite"}
          >
            <article
              className={`relative rounded-xl px-5 py-3 text-sm md:text-base leading-relaxed max-w-[80%] whitespace-pre-wrap break-words ${
                isUser
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-800 border border-gray-300 shadow-sm"
              }`}
              role="article"
              aria-label={isUser ? "User message" : "Bot message"}
              tabIndex={0}
            >
              {isTypingMessage ? (
                <TypingEffect
                  text={msg.text}
                  speed={20}
                  onDone={handleTypingDone}
                />
              ) : isUser ? (
                msg.text
              ) : (
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="mb-2 last:mb-0">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                    code: ({ children }) => (
                      <code className="bg-gray-100 text-sm px-1 rounded font-mono">
                        {children}
                      </code>
                    ),
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        className="text-indigo-600 underline hover:text-indigo-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {msg.text}
                </ReactMarkdown>
              )}
            </article>
          </div>
        );
      })}

      <div ref={bottomRef} />
    </section>
  );
};

export default ChatWindow;
