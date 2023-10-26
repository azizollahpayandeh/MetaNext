import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(50);



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Progress Bar Example</h1>
      <div className="w-full bg-gray-200">
        <div className="h-4 bg-blue-500" style={{ width: `${progress}%` }}></div>
      </div>

    </div>
  );
};

export default ProgressBar;
