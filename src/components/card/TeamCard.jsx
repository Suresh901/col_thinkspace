import React from "react";
import { FiExternalLink } from "react-icons/fi";
const teams = [
  {
    id: 1,
    image:
      "https://admin.colthinkspace.com/storage/teams/1735888154_67778d1a1d4b2.jpg",
    name: "Utsab Pokharel",
    designation: "CTO",
    logo: <FiExternalLink />,
  },
  {
    id: 2,
    image:
      "https://admin.colthinkspace.com/storage/teams/1735891443_677799f3eccbc.jpg",
    name: "Asmita Tamang",
    designation: "HR",
    logo: <FiExternalLink />,
  },
  {
    id: 3,
    image:
      "https://admin.colthinkspace.com/storage/teams/1735888154_67778d1a1d4b2.jpg",
    name: "Utsab Pokharel",
    designation: "CTO",
    logo: <FiExternalLink />,
  },
  {
    id: 4,
    image:
      "https://admin.colthinkspace.com/storage/teams/1737363742_678e111e59b25.jpg",
    name: "Utsab Shrestha",
    designation: "CE0",
    logo: <FiExternalLink />,
  },
];

const TeamCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {teams.map((item) => {
        <div>
          <img src={item.image} alt="logo" className="w-auto h-auto" />
          <div className="flex items-center justify-between">
            <div>
              <h1>{item.name}</h1>
              <h2>{item.designation}</h2>
            </div>
            {item.logo}
          </div>
        </div>;
      })}
    </div>

    // <div>
    //   <div className="flex flex-col items-center pb-5 px-5">
    //     <div className=" w-full h-full p-5 z-40">
    //       <img
    //         src={item.image}
    //         alt="img"
    //         className="h-60 w-full object-cover"
    //       />
    //     </div>
    //     <div className="drop-shadow-lg w-full bg-white mt-[-5rem] flex flex-col items-center justify-end h-[160px] pb-8 rounded-md">
    //       <div className="flex items-center justify-between gap-10">
    //         <div>
    //           <h1>{item.name}</h1>
    //           <h2>{item.designation}</h2>
    //         </div>
    //         {item.logo}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TeamCard;
