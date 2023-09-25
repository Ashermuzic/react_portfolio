import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_project: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8fmj8ps",
        "template_s3pp0mh",
        form.current,
        "i59tXTKmr2fsYF-jF"
      )
      .then(
        (result) => {
          console.log("message sent successfully");
          setSuccessMessage(true);

          // Clear input fields after sending the message
          setFormData({
            user_name: "",
            user_email: "",
            user_project: "",
          });

          setTimeout(() => {
            setSuccessMessage(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="main">
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid section__border">
          <div className="contact__content">
            <h3 className="contact__title">
              <i className="icon icon-comment-o"></i> Talk to me
            </h3>

            <div className="contact__info">
              <div className="contact__data">
                <span className="contact__data-title">Email</span>
                <span className="contact__data-info">
                  ashersam116@gmail.com
                </span>
              </div>

              <div className="contact__data">
                <span className="contact__data-title">Telegram</span>
                <span className="contact__data-info">+251 900 269 094</span>
                <a
                  href="https://t.me/ashermuzic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__button"
                >
                  Write me <i className="icon icon-arrow-right"></i>
                </a>
              </div>

              <div className="contact__data">
                <span className="contact__data-title">Github</span>
                <span className="contact__data-info">Source codes</span>
                <a
                  href="https://www.github.com/Ashermuzic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__button"
                >
                  Write me <i className="icon icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">
              <i className="icon icon-send"></i> Write me your Project
            </h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label htmlFor="contact-name" className="contact__form-tag">
                  Names
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Write your name"
                  className="contact__form-input"
                  value={formData.user_name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="contact__form-div">
                <label htmlFor="contact-email" className="contact__form-tag">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Write your email"
                  className="contact__form-input"
                  value={formData.user_email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label htmlFor="contact-project" className="contact__form-tag">
                  Project
                </label>
                <textarea
                  name="user_project"
                  placeholder="Write your Project"
                  id="contact-project"
                  className="contact__form-input"
                  value={formData.user_project}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <p className="contact__message" id="contact-message">
                Message
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <button type="submit" value="Send" className="contact__button">
                  Submit <i className="icon icon-arrow-right"></i>
                </button>
                {successMessage && (
                  <p className="successMessage">Message sent successfully !</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
