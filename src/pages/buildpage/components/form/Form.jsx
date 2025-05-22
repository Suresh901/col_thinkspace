import { Form, Field, ErrorMessage } from "formik";
import Drop from "../dropzone/DropZone";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Basic = ({
  setForm,
  handleChange,
  handleDownloadPdf,
  isValid,
  dirty,
  setSelectedFile,
  selectedFile,
  setFieldValue,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-right" data-aos-duration="2000">
      <div className="mb-10">
        <h1 className="font-bold text-3xl">Create Your Card Business</h1>
        <h2>Please fill the form to generate your Business Card.</h2>
      </div>
      <Form>
        <div className="flex flex-col gap-5">
          <h1>
            Your Company Logo <span className="text-red-600">*</span>
          </h1>
          <Drop
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            setForm={setForm}
            setFieldValue={setFieldValue}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            {[
              {
                label: "Full Name",
                name: "name",
                type: "text",
                placeholder: "Enter Your Full Name",
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "Enter Your Email",
              },
              {
                label: "Business Role",
                name: "role",
                type: "text",
                placeholder: "Enter Your Business Role",
              },
              {
                label: "Phone Number",
                name: "phone",
                type: "text",
                placeholder: "Enter Your Phone Number",
              },
              {
                label: "Business/Personal Website",
                name: "website",
                type: "text",
                placeholder: "Enter Your Business/Personal Website",
              },
              {
                label: "Address",
                name: "address",
                type: "text",
                placeholder: "Enter Your Address",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <h1>
                  {label} <span className="text-red-600">*</span>
                </h1>
                <Field
                  type={type}
                  name={name}
                  className="border-2 bg-white p-4 rounded-lg w-full"
                  placeholder={placeholder}
                  onChange={(e) => {
                    setForm((prevForm) => ({
                      ...prevForm,
                      [name]: e.target.value,
                    }));
                    handleChange(e);
                  }}
                />
                <ErrorMessage
                  name={name}
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="p-4 border-2 rounded-md mt-2 w-full bg-[#172554] text-white font-semibold cursor-pointer disabled:opacity-50"
          onClick={handleDownloadPdf}
          disabled={!(isValid && dirty)}
        >
          Download PDF
        </button>
      </Form>
      <h2 className="italic text-md mt-2">
        Note: The generation of PDF can take a few seconds to minutes, so stay
        calm during the process.
      </h2>
    </div>
  );
};

export default Basic;
