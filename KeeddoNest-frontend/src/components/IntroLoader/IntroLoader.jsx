import { useEffect, useState } from "react";
import "./IntroLoader.css";

export default function IntroLoader({ onFinish }) {

  const fullText = "Keeddonest";
  const [visibleCount, setVisibleCount] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const letterInterval = 90; // smooth speed
    const totalDuration = 2200; // overall timing

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < fullText.length) return prev + 1;
        return prev;
      });
    }, letterInterval);

    const finishTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish();
      }, 700); // fade duration
    }, totalDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <div className={`intro-loader ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="brand-text">
        {fullText.split("").map((char, index) => {
          const isVisible = index < visibleCount;

          const color =
            index < 5 ? "green-text" : "orange-text"; // Keedd (5 letters)

          return (
            <span
              key={index}
              className={`letter ${color} ${isVisible ? "show" : ""}`}
            >
              {char}
            </span>
          );
        })}
      </h1>
    </div>
  );
}