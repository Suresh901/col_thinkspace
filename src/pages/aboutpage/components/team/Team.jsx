import React from "react";
import { Link } from "react-router-dom";

const Team = ({ item }) => {
  return (
    <Link
      to={item.social_media[0].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-t from-[#2816CA] to-[#B51AEE] hover:text-white">
        <img src={item.photo} alt="logo" className="w-64 h-64 object-cover" />
        <div className="flex items-center justify-between p-2 ">
          <div>
            <h1>{item.name}</h1>
            <h2 className="text-sm">{item.position}</h2>
          </div>
          {item.logo}
        </div>
      </div>
    </Link>
  );
};

export default Team;
