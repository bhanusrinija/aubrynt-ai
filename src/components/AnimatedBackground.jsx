import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      
      {/* Floating Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
    </div>
  );
};

export default AnimatedBackground;