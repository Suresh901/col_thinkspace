import { Form, Field, ErrorMessage } from "formik";
import Drop from "../dropzone/DropZone";

const Basic = ({
  setForm,
  handleChange,
  handleDownloadPdf,
  isValid,
  dirty,
  setSelectedFile,
  selectedFile,
  setFieldValue,
}) => (
  <div>
    <div className="mb-10 ">
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
          <div>
            <h1>
              Full Name <span className="text-red-600">*</span>
            </h1>
            <Field
              type="text"
              name="name"
              className="border-2 bg-white p-4 rounded-lg w-full"
              placeholder="Enter Your Full Name"
              onChange={(e) => {
                setForm((prevForm) => ({
                  ...prevForm,
                  name: e.target.value,
                }));
                handleChange(e);
              }}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          <div>
            <h1>
              Email <span className="text-red-600">*</span>
            </h1>
            <Field
              type="email"
              name="email"
              className="border-2 bg-white p-4 rounded-lg w-full"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setForm((prevForm) => ({
                  ...prevForm,
                  email: e.target.value,
                }));
                handleChange(e);
              }}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          <div>
            <h1>
              Business Role <span className="text-red-600">*</span>
            </h1>
            <Field
              type="text"
              name="role"
              className="border-2 bg-white p-4 rounded-lg w-full"
              placeholder="Enter Your Business Role"
              onChange={(e) => {
                setForm((prevForm) => ({
                  ...prevForm,
                  role: e.target.value,
                }));
                handleChange(e);
              }}
            />
            <ErrorMessage
              name="role"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          <div>
            <h1>
              Phone Number <span className="text-red-600">*</span>
            </h1>
            <Field
              type="text"
              name="phone"
              className="border-2 bg-white p-4 rounded-lg w-full"
              placeholder="Enter Your Phone Number"
              onChange={(e) => {
                setForm((prevForm) => ({
                  ...prevForm,
                  phone: e.target.value,
                }));
                handleChange(e);
              }}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          <div>
            <h1>
              Business/Personal Website <span className="text-red-600">*</span>
            </h1>
            <Field
              type="text"
              name="website"
              className="border-2 bg-white p-4 rounded-lg w-full"
              placeholder="Enter Your Business/Personal Website"
              onChange={(e) => {
                setForm((prevForm) => ({
                  ...prevForm,
                  website: e.target.value,
                }));
                handleChange(e);
              }}
            />
            <ErrorMessage
              name="website"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          <div>
            <h1>
              Address <span className="text-red-600">*</span>
            </h1>
            <Field
              type="text"
              name="address"
              className="border-2 bg-white p-4 rounded-lg w-full"
              placeholder="Enter Your Address"
              onChange={(e) => {
                setForm((prevForm) => ({
                  ...prevForm,
                  address: e.target.value,
                }));
                handleChange(e);
              }}
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="p-4 border-2 rounded-md mt-2 w-full bg-[#172554] text-white font-semibold cursor-pointer"
        onClick={handleDownloadPdf}
        disabled={!(isValid && dirty)}
      >
        Download PDF
      </button>
    </Form>
    <h2 className="italic text-md">
      Note: The generation of PDF can take a few seconds to minutes, so stay
      calm during the process.
    </h2>
  </div>
);

export default Basic;
