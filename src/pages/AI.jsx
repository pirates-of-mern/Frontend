// pages/Chatbot.jsx
import React, { useState } from "react";
import Sidebar from "../components/chat/Sidebar";
import Hero from "../components/chat/Hero";
import StoryCards from "../components/chat/StoryCards";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import { fetchAIResponse } from "../api/aiAPI";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setHasStarted(true);
    setIsTyping(true); // Start typing indicator

    try {
      const answer = await fetchAIResponse(input);
      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error contacting AI" },
      ]);
    } finally {
      setIsTyping(false); // Stop typing indicator
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar /> {/* Fixed width sidebar */}
      {/* Main content flex column */}
      <main className="flex flex-col flex-1">
        {/* Scrollable chat area or hero + stories */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 max-w-full">
          {!hasStarted ? (
            <>
              <Hero />
              <StoryCards />
            </>
          ) : (
            <ChatWindow messages={messages} isTyping={isTyping} />
          )}
        </div>

        {/* Sticky input at bottom */}
        <div className="border-t p-4 bg-white">
          <ChatInput input={input} setInput={setInput} onSend={handleSend} />
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
