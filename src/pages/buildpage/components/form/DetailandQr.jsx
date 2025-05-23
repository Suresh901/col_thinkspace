import { MdDeleteOutline, MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import QRCode from "react-qr-code";
import Img from "../../../../assets/image/frame4.png";
import Img1 from "../../../../assets/image/frame5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DetailandQr = ({ form, selectedFile }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full h-full p-0 m-0 flex flex-col">
      {/* Top section with user details */}
      <div
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          flex: 1,
        }}
        className="px-5 lg:px-12 py-5 lg:py-10 w-1/2"
      >
        <div className="flex items-center gap-10 w-full mt-5">
          <FiUser size={32} className="bg-white p-1 rounded-md" />
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-white">
              {form?.name || "Your Name"}
            </h1>
            <h2 className="text-xl text-[#80848d]">
              {form?.role || "Your Role"}
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="text-white mt-10 flex flex-col gap-3 ml-5">
            <div className="flex items-center gap-5 md:gap-10">
              <MdOutlineEmail size={24} />
              <h1 className="text-sm md:text-xl">
                {form?.email || "Your Email"}
              </h1>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <LuPhone size={24} />
              <h2 className="text-sm md:text-xl">
                {form?.phone || "98XXXXXXXX"}
              </h2>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <IoLocationOutline size={24} />
              <h2 className="text-sm md:text-xl">
                {form?.address || "Your Address"}
              </h2>
            </div>
            <div className="flex items-center gap-5 md:gap-10">
              <CiGlobe size={24} />
              <h2 className="text-sm md:text-xl">
                {form?.website || "Your website"}
              </h2>
            </div>
          </div>
          <div className="text-white">
            {selectedFile &&
              selectedFile.length > 0 &&
              selectedFile.map((item) => {
                return (
                  <div
                    className="flex items-center justify-between gap-5"
                    key={item.path}
                  >
                    <img
                      src={URL.createObjectURL(item)}
                      alt=""
                      className="w-30 h-20"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* QR code section */}
      <div
        className="flex flex-col items-center justify-center p-10 "
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          flex: 1,
        }}
      >
        <QRCode
          value={`name=${form?.name} email=${form?.email} role=${form?.role} address=${form?.address} website=${form?.website} phone=${form?.phone}`}
          size={200}
          className="mt-5 mb-5 "
          renderAs="svg"
        />
      </div>
    </div>
  );
};

export default DetailandQr;
