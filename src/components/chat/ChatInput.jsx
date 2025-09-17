// components/chat/ChatInput.jsx
import React from "react";
import { Plus, Send } from "lucide-react";

const ChatInput = ({ input, setInput, onSend }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[700px] px-4 bg-white border-t pt-3 pb-4 z-10">
      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full shadow-sm px-4 py-2 transition focus-within:ring-2 focus-within:ring-indigo-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Send a message..."
          className="flex-1 px-6 py-2 text-sm md:text-base text-gray-800 placeholder-gray-400 bg-transparent outline-none"
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
          <Send size={25} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;



// import React from "react";

// const ChatInput = ({ input, setInput, onSend }) => {
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       onSend();
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto flex gap-2">
//       <textarea
//         rows={1}
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={handleKeyDown}
//         placeholder="Type your message..."
//         className="flex-1 resize-none rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//       />
//       <button
//         onClick={onSend}
//         disabled={!input.trim()}
//         className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
//         aria-label="Send message"
//       >
//         Send
//       </button>
//     </div>
//   );
// };

// export default ChatInput;
