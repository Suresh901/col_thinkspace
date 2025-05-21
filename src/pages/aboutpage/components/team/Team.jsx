import React from "react";
import { Link } from "react-router-dom";

const Team = ({ item }) => {
  return (
    <Link
      to={item.social_media[0].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border bg-text-gradient p-[1px] transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:font-semibold">
        <img src={item.photo} alt="logo" className="w-64 h-64 object-cover" />
        <div className="flex items-center justify-between p-2 bg-white">
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
