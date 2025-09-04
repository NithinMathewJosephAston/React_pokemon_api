import React, { useState } from 'react';

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let iterations = 0;
    const originalText = text;
    const letters = "abcdefghijklmnopqrstuvwxyz";
    
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((_, i) => {
            if (i < iterations) return originalText[i];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iterations += 1 / 3;

      if (iterations >= originalText.length) clearInterval(interval);
    }, 30);
  };

  return (
    <span
      onMouseEnter={scramble}
      style={{ cursor: "pointer"}}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
