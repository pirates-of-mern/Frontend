// components/chat/ChatInput.jsx
import React from "react";
import { Plus, Send } from "lucide-react";

const ChatInput = ({ input, setInput, onSend }) => {
  return (
    <div className="w-full bg-white border-t pt-3">
      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full shadow-sm px-4 py-2 transition focus-within:ring-2 focus-within:ring-indigo-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Send a message..."
          className="flex-1 px-3 py-2 text-sm md:text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none"
        />

        <button
          onClick={() => setInput("")}
          className="p-2 rounded-full text-gray-400 hover:text-indigo-500 transition"
          aria-label="Clear input"
        >
          <Plus size={20} />
        </button>

        <button
          onClick={onSend}
          className="p-2 rounded-full text-indigo-500 hover:text-indigo-600 transition"
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
