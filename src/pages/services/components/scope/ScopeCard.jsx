import React from "react";

const ScopeCard = ({ item }) => {
  return (
    <div className="p-5 rounded-md h-full flex flex-col bg-gray-300 min-h-[200px]">
      <div className="">
        <h1 className="text-xl md:text-2xl font-bold">{item.title}</h1>
        <h2 className="text-lg md:text-xl mt-2">{item.tasks}</h2>
      </div>
    </div>
  );
};

export default ScopeCard;
1;
