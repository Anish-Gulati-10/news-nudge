import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-400 h-24 w-24 animate-spin"></div>
    </div>
  );
};

export default Loader;
