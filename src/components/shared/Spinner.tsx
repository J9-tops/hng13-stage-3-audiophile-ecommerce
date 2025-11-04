import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-4 w-4 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900"></div>
    </div>
  );
};

export default Spinner;
