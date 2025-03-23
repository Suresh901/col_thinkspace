import React from "react";

const contactInfo = [
  {
    title: "Office Location",
    value: "Pepsicola-Kathmandu, Nepal",
  },
  {
    title: "Email Address",
    value: "colthinkspace@gmail.com",
  },
  {
    title: "Contact Number",
    value: "1234567890",
  },
];

const ContactCard = () => {
  return (
    <div className="px-6 md:px-12 py-6 md:py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="border bg-white p-10 lg:p-20 flex flex-col items-center justify-center text-center shadow-md rounded-lg"
          >
            <h1 className="font-bold text-lg">{info.title}</h1>
            <h1 className="text-gray-700 ">{info.value}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
