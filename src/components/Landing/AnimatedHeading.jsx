import React, { useMemo } from "react";

const AnimatedHeading = ({
  lines = [],
  charDelay = 40,
  lineDelay = 350,
  duration = 420,
  cursor = true,
  className = "",
}) => {
  const renderPlan = useMemo(() => {
    const plan = [];
    let globalIndex = 0;
    lines.forEach((line, lineIdx) => {
      const baseLineDelay = lineIdx * lineDelay;
      Array.from(line).forEach((ch, chIdx) => {
        const isSpace = ch === " ";
        const delay = baseLineDelay + chIdx * charDelay;
        plan.push({
          char: isSpace ? "\u00A0" : ch,
          delay,
          index: globalIndex++,
        });
      });

      // ✅ Add line break only if it's NOT the last line
      if (lineIdx < lines.length - 1) {
        plan.push({ char: "__LINE_BREAK__", delay: 0, index: globalIndex++ });
      }
    });
    return plan;
  }, [lines, charDelay, lineDelay]);

  return (
    <>
      <style>{`
        @keyframes headingFadeUp {
          0% { opacity: 0; transform: translateY(10px) scale(0.985); filter: blur(2px); }
          70% { opacity: 1; transform: translateY(-2px) scale(1.02); filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cursorBlink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animated-heading-letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(10px) scale(0.985);
        }
        .animated-heading-cursor {
          display: inline-block;
          width: 2px;
          height: 1.05em;
          margin-left: 6px;
          vertical-align: -0.15em;
          background-color: rgba(4,120,87,0.95);
          animation: cursorBlink 1.1s steps(2, start) infinite;
        }
      `}</style>

      <h1
        className={`leading-snug text-7xl font-extrabold text-green-700 ${className}`}
      >
        {renderPlan.map((p, i) =>
          p.char === "__LINE_BREAK__" ? (
            <br key={`lb-${i}`} />
          ) : (
            <span
              key={`c-${i}`}
              className="animated-heading-letter"
              style={{
                animation: `headingFadeUp ${duration}ms cubic-bezier(.2,.9,.2,1) forwards`,
                animationDelay: `${p.delay}ms`,
              }}
            >
              {p.char}
            </span>
          )
        )}
        {cursor && <span className="animated-heading-cursor" />}
      </h1>
    </>
  );
};

export default AnimatedHeading;
