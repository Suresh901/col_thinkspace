import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const contactInfo = [
  {
    title: "Office Location",
    value: "Pepsicola-Kathmandu, Nepal",
    img: "https://www.centurytrails.in/images/plans/century-trails-location-map.webp",
  },
  {
    title: "Email Address",
    value: "colthinkspace@gmail.com",
    img: "https://media.istockphoto.com/id/1255984663/vector/white-mail-and-e-mail-icon-isolated-with-long-shadow-envelope-symbol-e-mail-email-message.jpg?s=612x612&w=0&k=20&c=eINb2ZxtuiQztcAXRNCO7zLgBhnqiwTOuksGbJmaxgI=", // Optional placeholder
  },
  {
    title: "Contact Number",
    value: "1234567890",
    img: "https://cdn-icons-png.flaticon.com/512/8643/8643765.png",
  },
];

const ContactCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="px-6 md:px-12 py-6 md:py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="border bg-white p-10 lg:p-20 flex flex-col items-center justify-center text-center shadow-md rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {info.img && (
              <img
                src={info.img}
                alt={info.title}
                className="w-20 h-20 object-cover mb-4"
              />
            )}
            <h1 className="font-bold text-lg">{info.title}</h1>
            <h2 className="text-gray-700 break-words">{info.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
