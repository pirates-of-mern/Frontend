// pages/Chatbot.jsx
import React, { useState } from "react";
import Sidebar from "../components/chat/Sidebar";
import Hero from "../components/chat/Hero";
import StoryCards from "../components/chat/StoryCards";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import { fetchAIResponse } from "../api/aiAPI";
import TypingDots from "../components/chat/TypingDots";

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

  <ChatWindow messages={messages} isTyping={isTyping} />;


  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      {/* Main content area - full height, flex column */}
      <main className="flex-1 flex flex-col h-screen p-6 md:p-10 max-w-full">
        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
          {!hasStarted ? (
            <>
              <Hero />
              <StoryCards />
            </>
          ) : (
            <ChatWindow messages={messages} />
          )}
        </div>

        {/* Chat Input - sticky at bottom */}
        <ChatInput input={input} setInput={setInput} onSend={handleSend} />
      </main>
    </div>
  );
};

export default Chatbot;
