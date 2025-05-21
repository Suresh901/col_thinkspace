import React, { useState } from "react";
import Modal from "../modal/modal";
import image from "../../assets/image/icon1.png";
const Request = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center md:gap-10 justify-center my-10 py-10 border bg-white p-10 rounded-xl">
      <div className="  flex flex-col items-center justify-center gap-5">
        <h1 className="font-bold text-xl text-center">
          From Concept to Creation. Let's build something that stand out.
        </h1>

        <div className="">
          <button
            className=" border px-4 py-2 border-gray-300 text-sm font-semibold rounded-lg bg-white"
            onClick={openModal}
          >
            Join Us
          </button>
        </div>
        {isModalOpen && <Modal closeModal={closeModal} />}
      </div>
      <div className="w-60 h-60">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Request;
