import React from "react";

function Contact() {
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

            <form action="" className="contact__form" id="contact-form">
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
                  id="contact-name"
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
                  id="contact-email"
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
                ></textarea>
              </div>

              <p className="contact__message" id="contact-message">
                Message
              </p>

              <button type="submit" className="contact__button">
                Submit <i className="icon icon-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
