import React from "react";

const Partner = ({ item }) => {
  return (
    <div key={item.id} className="px-4 py-2">
      <div className="bg-white rounded-lg shadow-md p-2 min-h-30 flex items-center justify-center transition-transform duration-300 hover:shadow-lg hover:scale-105">
        <img src={item.image} item className="max-h-28 w-full object-cover" />
      </div>
    </div>
  );
};

export default Partner;
