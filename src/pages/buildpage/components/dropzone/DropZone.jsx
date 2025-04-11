import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdDeleteOutline } from "react-icons/md";

const Drop = ({ selectedFile, setSelectedFile }) => {
  // const [selectedFile, setSelectedFile] = useState([]);
  const onDrop = useCallback((files) => {
    // console.log(files);
    setSelectedFile(files);
  });
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  console.log(selectedFile);
  return (
    <section className="container">
      <div
        {...getRootProps({
          className:
            "dropzone outline-dashed outline-gray-300 bg-white p-6 focus-within:outline-sky-500 focus-within:outline-2 mb-5",
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-gray-300 text-2xl flex items-center justify-center">
            Drop the files here ....
          </p>
        ) : (
          <p className="text-gray-300 text-2xl flex items-center justify-center">
            Drag 'n' drop some files here ....
          </p>
        )}
      </div>

      <div>
        {selectedFile &&
          selectedFile.length > 0 &&
          selectedFile.map((item) => {
            return (
              <div className="flex items-center justify-between gap-5">
                <img
                  src={URL.createObjectURL(item)}
                  alt=""
                  className="w-30 h-20"
                />
                <MdDeleteOutline size={26} />
              </div>
            );
          })}
      </div>
    </section>
  );
};
export default Drop;
