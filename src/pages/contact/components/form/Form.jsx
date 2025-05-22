import { useFormik } from "formik";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="Your First Name"
          className="p-4 rounded-lg"
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder="Your Last Name"
          className="p-4 rounded-lg"
        />
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Your Email Address"
          className="p-4 rounded-lg"
        />
        <input
          id="contact"
          name="contact"
          type="contact"
          onChange={formik.handleChange}
          value={formik.values.contact}
          placeholder="Your Contact Address"
          className="p-4 rounded-lg"
        />

        <textarea
          id="message"
          name="message"
          type="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder="Your Message Address"
          className="p-4 rounded-lg col-span-full"
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-t from-[#2816CA] to-[#B51AEE] px-6 py-3 text-xl tracking-tight text-white shadow-[inset_0_0.15rem_0_#B51AEE,inset_0_-0.12rem_0_#2816CA] max-lg:px-4 max-lg:py-3 max-lg:text-sm max-sm:rounded-lg max-sm:px-4 max-sm:py-2 max-sm:text-sm "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
