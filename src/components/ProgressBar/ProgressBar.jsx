import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(30);



  return (
    <div className="mt-[15px]">
      <div className="w-[200px] bg-gray-200 rounded-3xl">
        <div className="h-[7px]  bg-green-500 rounded-3xl " style={{ width: `${progress}%` }}></div>
      </div>

    </div>
  );
};

export default ProgressBar;
