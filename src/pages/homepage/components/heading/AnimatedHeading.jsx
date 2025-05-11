import React, { useEffect, useState } from "react";

const AnimatedHeading = () => {
  const part1 = ["Color", "Your", "Sketched"];
  const part2 = ["Idea", "to", "life."];
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        const totalWords = part1.length + part2.length;
        return prev < totalWords ? prev + 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderWords = () => {
    const totalWords = part1.concat(part2);
    return totalWords.slice(0, visibleCount).map((word, index) => {
      const isGradient = index >= part1.length;
      return (
        <span
          key={index}
          className={`mr-2 ${
            isGradient ? "text-gradient bg-text-gradient font-bold" : ""
          }`}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div className="text-md md:text-xl lg:text-2xl font-semibold">
      <h1>{renderWords()}</h1>
    </div>
  );
};

export default AnimatedHeading;
