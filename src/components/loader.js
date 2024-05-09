import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="ease-linear rounded-full border-4 border-t-gray-200 border-gray-600 h-20 w-20 animate-spin"></div>
    </div>
  );
};

export default Loader;
