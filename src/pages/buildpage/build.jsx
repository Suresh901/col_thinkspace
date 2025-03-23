import React, { useEffect, useState, useRef } from "react";
import BuildForm from "../../components/form/Form";
import { Formik } from "formik";
import DetailandQr from "../../components/form/DetailandQr";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const build = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    contact: "",
    website: "",
    address: "",
  });

  // useEffect(() => console.log(form), [form]);

  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth - 2 * 20;
    const imgHeight = (imgProperties.height * imgWidth) / imgProperties.width;

    // Calculate position to center the content
    const x = (pdfWidth - imgWidth) / 2; // Center horizontally
    const y = (pdfHeight - imgHeight) / 2; // Center vertically

    pdf.addImage(data, "PNG", x, y, imgWidth, imgHeight);
    pdf.save("YourDetail.pdf");
  };

  return (
    <div className="flex flex-col lg:flex-row md:px-12 py-10 px-6 mb-10 relative">
      <div className=" w-full lg:w-1/2  bg-[#f2f2f2] p-4 rounded-lg">
        <Formik
          initialValues={{
            name: "",
            email: "",
            role: "",
            contact: "",
            website: "",
            address: "",
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
            if (!values.contact) {
              errors.contact = "Contact number is required";
            } else if (!/^\+?[0-9]{7,15}$/.test(values.contact)) {
              errors.contact = "Invalid contact number format";
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
            if (!values.contact) errors.contact = "Contact number is required";
            if (!values.website) errors.website = "Website is required";
            if (!values.address) errors.address = "Address is required";
            return errors;
          }}
        >
          {({ handleChange, isValid, dirty }) => (
            <BuildForm
              setForm={setForm}
              handleChange={handleChange}
              handleDownloadPdf={handleDownloadPdf}
              isValid={isValid}
              dirty={dirty}
            />
          )}
        </Formik>
      </div>

      <div ref={printRef} className="lg:w-1/2 md:px-12 mt-10 lg:mt-0">
        <DetailandQr form={form} />
      </div>
    </div>
  );
};

export default build;
