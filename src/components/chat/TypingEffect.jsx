import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const TypingEffect = ({ text, speed = 20, onDone }) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const allLines = text.split("\n");
    setLines(allLines);
    setCurrentLine("");
    setLineIndex(0);
  }, [text]);

  useEffect(() => {
    if (!lines.length) return;
    if (lineIndex >= lines.length) {
      onDone?.();
      return;
    }

    const line = lines[lineIndex];
    if (!line) {
      // Handle empty line: move to next line immediately
      setLineIndex(lineIndex + 1);
      return;
    }

    let i = 0;
    setCurrentLine(""); // Clear before typing new line
    const interval = setInterval(() => {
      setCurrentLine(line.slice(0, i + 1));
      i++;
      if (i >= line.length) {
        clearInterval(interval);
        setTimeout(() => setLineIndex(lineIndex + 1), 150); // Delay between lines
      }
    }, speed);

    return () => clearInterval(interval);
  }, [lines, lineIndex, speed, onDone]);

  return (
    <div>
      {lines.slice(0, lineIndex).map((l, idx) => (
        <ReactMarkdown key={idx}>{l || " "}</ReactMarkdown> // render empty lines as space to maintain spacing
      ))}
      {currentLine && <ReactMarkdown>{currentLine}</ReactMarkdown>}
    </div>
  );
};

export default TypingEffect;
