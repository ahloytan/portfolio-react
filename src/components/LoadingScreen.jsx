import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen overflow-hidden">
      <div className="loader">
        <div className="loader__outline"></div>
        <img src="assets/logo/logo1.jpg" alt="Loading" className="loader__image" />
      </div>
    </div>
  );
};

export default LoadingScreen;
