import React, { useState, useRef } from "react";
import BuildForm from "./components/form/Form";
import { Formik } from "formik";
import DetailandQr from "./components/form/DetailandQr";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Request from "../../components/request/Request";
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_API_URL;

const Build = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    website: "",
    address: "",
    // logo: "",
  });

  const [selectedFile, setSelectedFile] = useState([]);
  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      toast.error("Printable area not found.");
      return;
    }

    try {
      const a4Width = 595;
      const a4Height = 842;

      const canvas = await html2canvas(element, {
        scale: 3,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: a4Width > a4Height ? "landscape" : "portrait",
        unit: "px",
        format: [a4Width, a4Height],
        hotfixes: ["px_scaling"],
      });

      pdf.addImage(imgData, "PNG", 0, 0, a4Width, a4Height);
      pdf.save("Business_Card.pdf");

      toast.success("PDF generated and downloaded successfully!");
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <>
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
              // logo: null,
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                const response = await fetch(`${apiUrl}/build-with-us/store`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });

                const data = await response.json();
                if (!response.ok) {
                  throw new Error(data.message || "Something went wrong");
                }

                resetForm();
                setForm({
                  name: "",
                  email: "",
                  role: "",
                  phone: "",
                  website: "",
                  address: "",
                });
                setSelectedFile([]);
                // console.log(form);
                // console.log("Success", data);
              } catch (error) {
                console.error("Error", error.message);
              }
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
                errors.phone = "Phone number is required";
              } else if (!/^(98|97)[0-9]{8}$/.test(values.phone)) {
                errors.phone =
                  "Phone number must start with 98 or 97 and be 10 digits";
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
      <Request />
    </>
  );
};

export default Build;
