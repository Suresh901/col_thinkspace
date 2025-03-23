import React from "react";
import { Link } from "react-router-dom";
export const datas = [
  {
    heading: "Website design and development",
    image:
      "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
    service: "Web Development",
    tasks: {
      item1: "Website design and development",
      item2: "SEO Optimization",
      item3: "Responsive Design",
      item4: "CMS Integration",
      item5: "E-commerce Solutions",
      item6: "Performance Optimization",
      item7: "Security Enhancements",
      item8: "Custom Web Applications",
      item9: "API Integrations",
      item10: "Website Maintenance",
    },
  },
  {
    heading: "App development",
    image:
      "https://colthinkspace.com/_app/immutable/assets/niclas-illg-FJ5e_2f96h4-unsplash.BzWiB08-.jpg",
    service: "App Development",
    tasks: {
      item1: "Mobile App Design",
      item2: "App Deployment",
      item3: "Cross-Platform Development",
      item4: "Backend Development",
      item5: "User Authentication",
      item6: "Push Notifications",
      item7: "Performance Optimization",
      item8: "App Store Optimization",
      item9: "Database Management",
      item10: "App Maintenance & Updates",
    },
  },
  {
    heading: "Graphics Design",
    image:
      "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
    service: "UI/UX Design",
    tasks: {
      item1: "User Interface Design",
      item2: "User Experience Research",
      item3: "Wireframing & Prototyping",
      item4: "Brand Identity Design",
      item5: "Interactive Design",
      item6: "Design System Creation",
      item7: "Color Theory & Typography",
      item8: "Usability Testing",
      item9: "Motion Graphics",
      item10: "3D & Illustration",
    },
  },
  {
    heading: "Digital Marketing and SEO",
    image:
      "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
    service: "Marketing & SEO",
    tasks: {
      item1: "SEO Optimization",
      item2: "Social Media Marketing",
      item3: "Content Marketing",
      item4: "Email Marketing",
      item5: "Pay-Per-Click Advertising",
      item6: "Affiliate Marketing",
      item7: "Influencer Marketing",
      item8: "Google Ads & Facebook Ads",
      item9: "Conversion Rate Optimization",
      item10: "Market Research & Strategy",
    },
  },
  {
    heading: "Website Hosting",
    image:
      "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
    service: "Hosting Services",
    tasks: {
      item1: "Cloud Hosting",
      item2: "Domain Management",
      item3: "Shared Hosting",
      item4: "VPS Hosting",
      item5: "Dedicated Servers",
      item6: "SSL Certification",
      item7: "CDN Integration",
      item8: "Database Hosting",
      item9: "Server Security",
      item10: "24/7 Technical Support",
      item11: "24/7 Technical Support",
      item12: "24/7 Technical Support",
    },
  },
  {
    heading: "Branding and Advertisement",
    image:
      "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
    service: "Branding & Advertising",
    tasks: {
      item1: "Brand Identity Development",
      item2: "Ad Campaigns",
      item3: "Logo & Visual Design",
      item4: "Product Packaging Design",
      item5: "Corporate Branding",
      item6: "Print & Digital Advertisements",
      item7: "Influencer Collaborations",
      item8: "Social Media Branding",
      item9: "Marketing Strategy Planning",
      item10: "Customer Engagement Strategies",
    },
  },
];

const ServicesCard = () => {
  return (
    <>
      {datas.map((data, index) => (
        <Link to={`/services/${data.heading}`}>
          <div
            className="border border-gray-400 p-5 md:p-10 transition-transform duration-300 
        hover:scale-105 hover:bg-gradient-to-t from-[#2816CA] to-[#B51AEE] hover:text-white 
        flex flex-col gap-5 shadow-lg "
          >
            <img src={data.image} alt="" className="w-20 h-20" />
            <h1 className="text-xl font-bold">{data.heading}</h1>

            <div className="flex flex-wrap gap-2">
              {data.tasks &&
                Object.values(data.tasks).map((task, index) => (
                  <h1
                    key={index}
                    className="border border-gray-300 p-2 text-sm"
                  >
                    {task}
                  </h1>
                ))}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ServicesCard;
