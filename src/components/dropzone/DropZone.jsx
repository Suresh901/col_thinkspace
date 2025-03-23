import React from "react";
import { useDropzone } from "react-dropzone";
import { MdDeleteOutline } from "react-icons/md";

function Drop(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path} className="flex justify-between items-center gap-20">
      {file.path}
      <MdDeleteOutline />
    </li>
  ));

  return (
    <section className="container">
      <div
        {...getRootProps({
          className:
            "dropzone outline-dashed outline-gray-300 bg-white p-6 focus-within:outline-sky-500 focus-within:outline-2",
        })}
      >
        <input {...getInputProps()} />
        <p className="text-gray-300 text-2xl flex items-center justify-center">
          Drag or select your logo
        </p>
      </div>

      <aside>
        <div className="flex justify-between">
          <ul>{files}</ul>
        </div>
      </aside>
    </section>
  );
}
export default Drop;
