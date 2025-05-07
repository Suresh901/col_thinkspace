import React, { useEffect } from "react";
import MultiStepForm from "../multistepform/MultiStepForm";

const Modal = ({ closeModal }) => {
  // Lock scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 h-[100vh] ">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90vw] max-w-xl relative h-auto py-10 ">
        <div>
          <button
            className="absolute top-2 right-3 text-red-700"
            onClick={closeModal}
          >
            ✖
          </button>
          <MultiStepForm closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
