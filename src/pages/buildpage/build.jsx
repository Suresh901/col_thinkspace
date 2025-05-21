import React, { useState, useRef } from "react";
import BuildForm from "./components/form/Form";
import { Formik } from "formik";
import DetailandQr from "./components/form/DetailandQr";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const build = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    website: "",
    address: "",
    logo: "",
  });

  const [selectedFile, setSelectedFile] = useState([]);
  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    console.log("button clicked");
    const element = printRef.current;
    if (!element) {
      console.error("Print element not found");
      return;
    }

    try {
      const a4Width = 595;
      const a4Height = 842;

      const canvas = await html2canvas(element, {
        scale: 2,
      });

      const pdf = new jsPDF({
        orientation: a4Width > a4Height ? "landscape" : "portrait",
        unit: "px",
        format: [a4Width, a4Height],
        hotfixes: ["px_scaling"],
      });

      pdf.addImage(
        canvas.toDataURL("image/png", 1.0),
        "PNG",
        0,
        0,
        a4Width,
        a4Height
      );

      pdf.save("Business_Card.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please check console for details.");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row md:px-12 py-10 px-6 mb-10 relative">
      <div className=" w-full lg:w-1/2  bg-[#f2f2f2] p-4 rounded-lg">
        <Formik
          initialValues={{
            name: "",
            email: "",
            role: "",
            phone: "",
            website: "",
            address: "",
            logo: null,
          }}
          onSubmit={(values) => {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
              formData.append(key, value);
              console.log(values);
            });
            //api
            fetch("https://admin.colthinkspace.com/api/build-with-us/store", {
              method: "POST",
              headers: {
                "Content-Type": "multipart/form-data",
              },
              body: formData,
            })
              .then((res) => console.log("kokoko", res))
              .then((res) => res.json())
              .then((data) => {
                console.log("Success", data);
              })
              .catch((err) => {
                console.error("Error", err);
              });
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Full name is required";
            }
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.role) {
              errors.role = "Business role is required";
            }
            if (!values.phone) {
              errors.phone = "phone number is required";
            } else if (!/^\+?[0-9]{7,15}$/.test(values.phone)) {
              errors.phone = "Invalid phone number format";
            }
            if (!values.website) {
              errors.website = "Website is required";
            } else if (
              !/^(https?:\/\/)?(www\.)?[a-z0-9]+\.[a-z]{2,}.*$/i.test(
                values.website
              )
            ) {
              errors.website = "Invalid website URL";
            }
            if (!values.address) {
              errors.address = "Address is required";
            }
            if (!values.name) errors.name = "Full name is required";
            if (!values.email) errors.email = "Email is required";
            if (!values.role) errors.role = "Business role is required";
            if (!values.phone) errors.phone = "phone number is required";
            if (!values.website) errors.website = "Website is required";
            if (!values.address) errors.address = "Address is required";
            return errors;
          }}
        >
          {({ handleChange, isValid, dirty, setFieldValue }) => (
            <BuildForm
              setForm={setForm}
              handleChange={handleChange}
              handleDownloadPdf={handleDownloadPdf}
              isValid={isValid}
              dirty={dirty}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              setFieldValue={setFieldValue}
            />
          )}
        </Formik>
      </div>

      <div className="flex flex-col lg:flex-row md:px-5  lg:w-1/2 items-center justify-center">
        <div
          ref={printRef}
          id="print-area"
          className=" bg-white p-0 m-0  lg:w-[595px] lg:h-[842px] box-border"
        >
          <DetailandQr
            form={form}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        </div>
      </div>
    </div>
  );
};

export default build;
