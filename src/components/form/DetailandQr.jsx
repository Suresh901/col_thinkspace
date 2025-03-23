import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import QRCode from "react-qr-code";
import Img from "../../assets/image/frame4.png";
import Img1 from "../../assets/image/frame5.png";

const DetailandQr = ({ form }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "auto",
        }}
        className=" px-12 py-10"
      >
        <div className="flex items-center gap-10 w-full mt-5 ">
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
        <div className="text-white mt-10 flex flex-col gap-3 ml-5">
          <div className="flex items-center gap-5 md:gap-10">
            <MdOutlineEmail size={24} />
            <h1 className="text-lg md:text-xl">
              {form?.email || "Your Email"}
            </h1>
          </div>
          <div className="flex items-center gap-5 md:gap-10">
            <LuPhone size={24} />
            <h2 className="text-lg md:text-xl">
              {form?.contact || "98XXXXXXXX"}
            </h2>
          </div>
          <div className="flex items-center gap-5 md:gap-10">
            <IoLocationOutline size={24} />
            <h2 className="text-lg md:text-xl">
              {form?.address || "Your Address"}
            </h2>
          </div>
          <div className="flex items-center gap-5 md:gap-10">
            <CiGlobe size={24} />
            <h2 className="text-lg md:text-xl">
              {form?.website || "Your website"}
            </h2>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center p-10 "
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "auto",
        }}
      >
        <QRCode
          value={`name=${form?.name} email=${form?.email} role=${form?.role} address=${form?.address} website=${form?.website} contact=${form?.contact}`}
          size={200}
          className="mt-5 mb-5"
        />
      </div>
    </div>
  );
};

export default DetailandQr;
