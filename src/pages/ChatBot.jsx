import React, { useState, useEffect, useRef } from "react";
import { Home, BookOpen, Plus, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  // Ref for auto-scroll
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    if (!hasStarted) setHasStarted(true);

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "This is a sample AI response. Soon this will be powered by real AI 🚀",
        },
      ]);
    }, 1000);
  };

  // Auto-scroll inside chat box only
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-16 md:w-20 bg-gray-100 border-r flex flex-col items-center py-6 space-y-6">
        <div className="flex flex-col items-center mb-8">
          <span className="text-xs md:text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
            AI Guide
          </span>
        </div>

        <nav className="flex flex-col items-center space-y-6 text-gray-600">
          <Link
            to="/"
            className="p-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-600"
          >
            <Home size={22} />
          </Link>
          <Link
            to="/chatbot"
            className="p-2 rounded-lg bg-indigo-100 text-indigo-600"
          >
            <BookOpen size={22} />
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center p-6 md:p-10">
        {!hasStarted ? (
          <>
            <div className="flex flex-col items-center text-center max-w-3xl w-full">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="bg-gradient-to-tr from-indigo-500 to-blue-500 p-4 rounded-full">
                  <BookOpen size={40} className="text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  STORYTELLING
                </h1>
              </div>
              <p className="text-gray-500 mb-8 text-base md:text-lg">
                Heritage meets innovation: Stories of India, reimagined
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-10">
              <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
                <p className="text-gray-700 text-sm md:text-base">
                  Make a story about ancient monuments like the Taj Mahal, Qutub
                  Minar, and Konark Sun Temple coming alive at night to share the
                  secrets of India’s past with curious children.
                </p>
              </div>
              <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
                <p className="text-gray-700 text-sm md:text-base">
                  Create a storybook about the journey of Diwali lamps as they
                  travel from homes, temples, and rivers, spreading light, joy,
                  and unity across India.
                </p>
              </div>
              <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
                <p className="text-gray-700 text-sm md:text-base">
                  Tell a story about a wise elephant in Kerala who guides children
                  through a temple festival, showing them rituals, dances, and the
                  meaning of devotion.
                </p>
              </div>
              <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
                <p className="text-gray-700 text-sm md:text-base">
                  Make a story about a curious child who visits an ancient gurukul
                  and learns wisdom from stories of the Ramayana and Mahabharata.
                </p>
              </div>
            </div>
          </>
        ) : (
          // ✅ Chat box scroll only
          <div className="flex-1 w-full max-w-3xl mb-4 border rounded-lg bg-gray-50 flex flex-col">
            {/* Scrollable Messages Section */}
            <div className="flex-1 overflow-y-auto space-y-3 p-3 max-h-[70vh]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg text-sm md:text-base max-w-xs break-words ${
                      msg.sender === "user"
                        ? "bg-indigo-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {/* Auto-scroll anchor */}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        {/* Chat Input */}
        <div className="w-full max-w-3xl mt-auto">
          <div className="flex items-center bg-white border rounded-full shadow-sm px-4 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask AI"
              className="flex-1 px-2 py-2 focus:outline-none text-gray-700 text-sm md:text-base"
            />
            <button className="p-2 text-indigo-500 hover:text-indigo-600">
              <Plus size={22} />
            </button>
            <button
              onClick={handleSend}
              className="p-2 text-indigo-500 hover:text-indigo-600"
            >
              <Send size={22} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
