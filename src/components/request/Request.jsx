import React, { useState } from "react";
import Modal from "../modal/modal";
const Request = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className=" relative flex  justify-center my-10 py-10">
      <div className="border bg-white p-10 rounded-xl flex flex-col items-center justify-center gap-5">
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
    </div>
  );
};

export default Request;
