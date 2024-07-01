import React from 'react';

function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <img src="/1.jpeg" className="w-full h-full object-cover" alt="Background" />
    </div>
  );
}

export default Background;
