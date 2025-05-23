import { Formik, ErrorMessage } from "formik";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const Form = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        message: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName.trim())
          errors.firstName = "First name is required";
        if (!values.lastName.trim()) errors.lastName = "Last name is required";
        if (!values.email) errors.email = "Email is required";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
          errors.email = "Invalid email address";
        if (!values.contact.trim()) errors.contact = "Contact is required";
        if (!values.message.trim()) errors.message = "Message is required";
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        toast.success("Thank you for reaching us");
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto p-4">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                placeholder="Your First Name"
                className="p-4 rounded-lg w-full"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Your Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="p-4 rounded-lg w-full"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="p-4 rounded-lg w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <input
                id="contact"
                name="contact"
                type="text"
                placeholder="Your Contact Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact}
                className="p-4 rounded-lg w-full"
              />
              <ErrorMessage
                name="contact"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="md:col-span-2">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="p-4 rounded-lg w-full"
                rows={5}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="rounded-xl bg-gradient-to-t from-[#2816CA] to-[#B51AEE] px-6 py-3 text-xl text-white shadow-lg w-full hover:opacity-90 disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
