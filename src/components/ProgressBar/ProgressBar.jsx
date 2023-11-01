import React, { useEffect, useState } from "react";

export default function ProgressBar({
  duration,
  selectedIdx,
  idx,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    let startTime;
    let elapsedTime = 0;

    if (selectedIdx === idx) {
      startTime = Date.now();
      interval = setInterval(() => {
        elapsedTime = Date.now() - (startTime || 0);
        setProgress((elapsedTime / duration) * 100);

        if (elapsedTime >= duration) {
          clearInterval(interval);
        }
      }, 50);
    }

    return () => {
      clearInterval(interval);
    };
  }, [selectedIdx, idx, duration]);

  useEffect(() => {
    setProgress(0);
  }, [selectedIdx]);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
