import React from "react";
import me from "../assets/img/07.png";
import waves from "../assets/img/shape-wawes.svg";
import circle from "../assets/img/shape-circle.svg";

function Home() {
  return (
    <div className="main">
      <section className="home section" id="home">
        <div className="home__container container grid section__border">
          <div className="home__data grid">
            <h1 className="home__title">
              Hi, I’m Asher <br />
              Software Developer
            </h1>

            <div className="home__blob grid">
              <div className="home__perfil">
                <img src={me} alt="home perfil" />
              </div>

              <img src={waves} alt="" className="home__shape-waves" />
              <img src={circle} alt="" className="home__shape-circle" />
            </div>

            <ul className="home__social">
              <li>
                <a
                  href="https://www.linkedin.com/in/asher-samuel-349167282/"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="icon icon-linkedin"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Ashermuzic/"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="icon icon-github"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/ashermuzic"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="icon icon-send"></i>
                </a>
              </li>
            </ul>
          </div>

          {/*==================== HOME INFO 1 ====================*/}
          <div className="home__info">
            <div>
              <h3 className="home__info-title">BIOGRAPHY</h3>
              <p className="home__info-description">
                Hi, I'm Asher, a Software Developer. Passionate about developing
                exquisite and highly responsive digital masterpieces.
              </p>
            </div>

            <div>
              <h3 className="home__info-title">CONTACT</h3>
              <p className="home__info-description">
                ashersam116@gmail.com <br />
                <br />
                +251 900 269 094 <br />
              </p>
            </div>

            <div>
              <h3 className="home__info-title">SERVICES</h3>
              <p className="home__info-description">
                Full-Stack Web Development
                <br />
                Custom Software Development
                <br />
                Website Security
                <br />
              </p>
            </div>
          </div>

          {/*==================== HOME INFO 2 ====================*/}
          <div className="home__info">
            <div>
              <h3 className="home__info-title">YEARS OF EXPERIENCE</h3>
              <p className="home__info-number">02+</p>
            </div>

            <div>
              <h3 className="home__info-title">COMPLETED PROJECTS</h3>
              <p className="home__info-number">12+</p>
            </div>

            {/* <div>
                <h3 className="home__info-title">COMPANIES WORKED</h3>
                <p className="home__info-number">07+</p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
