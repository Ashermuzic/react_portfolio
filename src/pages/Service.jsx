import React from "react";

function Service() {
  return (
    <div className="main">
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid section__border">
          <div className="services__card">
            <i className="icon icon-code-fork"></i>

            <h2 className="services__title">
              UI/UX <br />
              Designer
            </h2>

            <p className="services__description">
              Service that provides the best quality and at the request of the
              client, with professional work and customer support.
            </p>

            <div className="services__border"></div>
          </div>

          <div className="services__card">
            <i className="icon icon-code"></i>

            <h2 className="services__title">
              Website <br />
              Design
            </h2>

            <p className="services__description">
              I use different tools and techniques to plan, and organize the
              structure, content, and visual elements of a website.
            </p>

            <div className="services__border"></div>
          </div>

          <div className="services__card">
            <i className="icon icon-css3"></i>

            <h2 className="services__title">
              Fluid <br />
              Layout
            </h2>

            <p className="services__description">
              Allow page elements to resize proportionally based on the user's
              screen size.
            </p>

            <div className="services__border"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
