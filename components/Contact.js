// import { noman_email, noman_number, noman_location } from "@/utility/data";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4">
//             <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
//               <div className="section-title mb-40">
//                 <span className="sub-title mb-15">Get In Touch</span>
//                 <h2>
//                   Let’s Talk For your <span>Next Projects</span>
//                 </h2>
//                 <p>Got a project or question? Let’s connect!</p>
//               </div>
//               <ul className="list-style-two">
//                 <li>{noman_email}</li>
//                 <li>{noman_number}</li>
//                 <li>{noman_location}</li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-lg-8">
//             <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
//               <form
//                 id="contactForm"
//                 className="contactForm"
//                 name="contactForm"
//                 action="assets/php/form-process.php"
//                 method="post"
//               >
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="name">Full Name</label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="form-control"
//                         defaultValue=""
//                         placeholder="Richard D. Hammond"
//                         required=""
//                         data-error="Please enter your Name"
//                       />
//                       <label htmlFor="name" className="for-icon">
//                         <i className="far fa-user" />
//                       </label>
//                       <div className="help-block with-errors" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="email">Email Address</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="form-control"
//                         defaultValue=""
//                         placeholder="support@gmail.com"
//                         required=""
//                         data-error="Please enter your Email"
//                       />
//                       <label htmlFor="email" className="for-icon">
//                         <i className="far fa-envelope" />
//                       </label>
//                       <div className="help-block with-errors" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="phone_number">Phone Number</label>
//                       <input
//                         type="text"
//                         id="phone_number"
//                         name="phone_number"
//                         className="form-control"
//                         defaultValue=""
//                         placeholder="+880 (123) 456 88"
//                         required=""
//                         data-error="Please enter your Phone Number"
//                       />
//                       <label htmlFor="phone_number" className="for-icon">
//                         <i className="far fa-phone" />
//                       </label>
//                       <div className="help-block with-errors" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <label htmlFor="subject">Subject</label>
//                       <input
//                         type="text"
//                         id="subject"
//                         name="subject"
//                         className="form-control"
//                         defaultValue=""
//                         placeholder="Subject"
//                         required=""
//                         data-error="Please enter your Subject"
//                       />
//                       <label htmlFor="subject" className="for-icon">
//                         <i className="far fa-text" />
//                       </label>
//                       <div className="help-block with-errors" />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="form-group">
//                       <label htmlFor="message">Message</label>
//                       <textarea
//                         name="message"
//                         id="message"
//                         className="form-control"
//                         rows={4}
//                         placeholder="write message"
//                         required=""
//                         data-error="Please enter your Message"
//                         defaultValue={""}
//                       />
//                       <div className="help-block with-errors" />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="form-group mb-0">
//                       <a   className="theme-btn" href="#" >
//                         Send Us Message <i className="far fa-angle-right" />
//                       </a>
//                       <div id="msgSubmit" className="hidden" />
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-lines">
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//       </div>
//     </section>
//   );
// };
// export default Contact;



"use client";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "emailjs-com";
import { noman_email, noman_number, noman_location } from "@/utility/data";

// ── Validation schema (mirrors ContactSection pattern) ──────────────────────
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  phone_number: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

// ── Reusable input sub-component (mirrors InputComponent pattern) ────────────
const FormInput = ({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  icon,
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      className="form-control"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
    <label htmlFor={id} className="for-icon">
      <i className={icon} />
    </label>
    {error && <div className="help-block with-errors">{error}</div>}
  </div>
);

// ── Reusable textarea sub-component ─────────────────────────────────────────
const FormTextarea = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  rows = 4,
}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      name={name}
      className="form-control"
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <div className="help-block with-errors">{error}</div>}
  </div>
);

// ── Main component ───────────────────────────────────────────────────────────
const Contact = () => {
  const handleSubmitForm = (values, { resetForm, setSubmitting }) => {
    const { name, email, phone_number, subject, message } = values;

    emailjs
      .send(
        "service_qthu3vq",
        "template_2sowyv5",
        {
          from_name: name,
          from_email: email,
          subject: subject,
          phone: phone_number,
          message: message,
        },
        "_MwiL1jtvrPJHGfFj"
      )
      .then(
        () => {
          resetForm();
          setSubmitting(false);
          toast.success("Email Sent Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        },
        (error) => {
          console.error("❌ Error sending email:", error.text);
          setSubmitting(false);
          toast.error("Email not sent. Please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <section
        id="contact"
        className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
      >
        <div className="container">
          <div className="row">
            {/* ── Left info panel (unchanged) ── */}
            <div className="col-lg-4">
              <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let's Talk For your <span>Next Projects</span>
                  </h2>
                  <p>Got a project or question? Let's connect!</p>
                </div>
                <ul className="list-style-two">
                  <li>{noman_email}</li>
                  <li>{noman_number}</li>
                  <li>{noman_location}</li>
                </ul>
              </div>
            </div>

            {/* ── Right form panel ── */}
            <div className="col-lg-8">
              <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone_number: "",
                    subject: "",
                    message: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={handleSubmitForm}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isSubmitting,
                  }) => (
                    <form
                      id="contactForm"
                      className="contactForm"
                      name="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <FormInput
                            label="Full Name"
                            id="name"
                            name="name"
                            placeholder="Richard D. Hammond"
                            value={values.name}
                            onChange={handleChange("name")}
                            onBlur={handleBlur("name")}
                            error={touched.name && errors.name ? errors.name : ""}
                            icon="far fa-user"
                          />
                        </div>

                        <div className="col-md-6">
                          <FormInput
                            label="Email Address"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="support@gmail.com"
                            value={values.email}
                            onChange={handleChange("email")}
                            onBlur={handleBlur("email")}
                            error={touched.email && errors.email ? errors.email : ""}
                            icon="far fa-envelope"
                          />
                        </div>

                        <div className="col-md-6">
                          <FormInput
                            label="Phone Number"
                            id="phone_number"
                            name="phone_number"
                            placeholder="+880 (123) 456 88"
                            value={values.phone_number}
                            onChange={handleChange("phone_number")}
                            onBlur={handleBlur("phone_number")}
                            error={
                              touched.phone_number && errors.phone_number
                                ? errors.phone_number
                                : ""
                            }
                            icon="far fa-phone"
                          />
                        </div>

                        <div className="col-md-6">
                          <FormInput
                            label="Subject"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={values.subject}
                            onChange={handleChange("subject")}
                            onBlur={handleBlur("subject")}
                            error={
                              touched.subject && errors.subject
                                ? errors.subject
                                : ""
                            }
                            icon="far fa-text"
                          />
                        </div>

                        <div className="col-md-12">
                          <FormTextarea
                            label="Message"
                            id="message"
                            name="message"
                            placeholder="write message"
                            value={values.message}
                            onChange={handleChange("message")}
                            onBlur={handleBlur("message")}
                            error={
                              touched.message && errors.message
                                ? errors.message
                                : ""
                            }
                          />
                        </div>

                        <div className="col-md-12">
                          <div className="form-group mb-0">
                            <button
                              type="submit"
                              className="theme-btn"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Sending..." : "Send Us Message"}{" "}
                              <i className="far fa-angle-right" />
                            </button>
                            <div id="msgSubmit" className="hidden" />
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>

        {/* ── Background lines (unchanged) ── */}
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </>
  );
};

export default Contact;




export const Contact2 = () => {
  return (
    <section id="contact" className="contact-area py-115 rpy-100 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-8">
            <div className="contact-two-content pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> let’s work together
                </span>
                <h2>let’s Work Together</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <h3>i,m avaiable at</h3>
                  <h5>
                    <i className="far fa-envelope" /> bill.sanders@example.com
                  </h5>
                  <h5>
                    <i className="far fa-phone" /> 239) 555-0108
                  </h5>
                </div>
                <div className="col-sm-4">
                  <div className="arrow">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
              <div className="social-flow">
                <h4>Follow :</h4>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-two form-style-one wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                className="contactForm"
                name="contactForm"
                action="assets/php/form-process.php"
                method="post"
              >
                <div className="form-group">
                  <label className="for-title" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required=""
                    data-error="Please enter your Email"
                  />
                  <label htmlFor="email" className="for-icon">
                    <i className="far fa-envelope" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <label className="for-title" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required=""
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="name" className="for-icon">
                    <i className="far fa-user" />
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={7}
                    placeholder="Write Messege....."
                    required=""
                    data-error="Please enter your Message"
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    <i className="far fa-envelope" /> Messege me
                  </button>
                  <div id="msgSubmit" className="hidden" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
