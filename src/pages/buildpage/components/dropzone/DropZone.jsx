import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdDeleteOutline } from "react-icons/md";

const Drop = ({ selectedFile, setSelectedFile, setForm, setFieldValue }) => {
  const onDrop = useCallback(
    (files) => {
      if (files.length > 0) {
        const file = files[0];
        setSelectedFile([file]);

        // Set the file into Formik field
        setFieldValue("logo", file);
      }
    },
    [setSelectedFile, setFieldValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
        {selectedFile?.length > 0 &&
          selectedFile.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between gap-5">
              <img
                src={URL.createObjectURL(item)}
                alt="logo-preview"
                className="w-30 h-20"
              />
              {/* <MdDeleteOutline size={26} /> */}
            </div>
          ))}
      </div>
    </section>
  );
};
export default Drop;
