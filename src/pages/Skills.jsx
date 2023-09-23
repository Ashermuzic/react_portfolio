import React from "react";
import HTML from "../assets/img/html-1.svg";
import CSS from "../assets/img/css-3.svg";
import Javascript from "../assets/img/logo-javascript.svg";
import ReactImg from "../assets/img/react-2.svg";
import Bootstrap from "../assets/img/bootstrap-5-1.svg";
import Git from "../assets/img/git-icon.svg";
import PHP from "../assets/img/php-1.svg";
import Node from "../assets/img/nodejs.svg";
import MySql from "../assets/img/mysql-logo.svg";
import Express from "../assets/img/express.png";
import Mongo from "../assets/img/mongo.png";

function Skills() {
  return (
    <div className="main">
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My favorite skills</span>

        <div className="skills__container container grid section__border">
          {/* ==================== SKILLS 1 ==================== */}
          <div className="skills__content">
            <h3 className="skills__title">
              {/* <i className="icon icon-braces"></i> */}
              <i className="icon icon-code"></i>
              Frontend Developer
            </h3>

            <div className="skills__info">
              <div className="skills__data">
                <div className="skills__blob">
                  <img src={HTML} alt="skills image" />
                </div>

                <h3 className="skills__name">HTML</h3>
                <span className="skills__subtitle">Advanced</span>
              </div>

              <div className="skills__data">
                <div className="skills__blob">
                  <img src={CSS} alt="skills image" />
                </div>

                <h3 className="skills__name">CSS</h3>
                <span className="skills__subtitle">Advanced</span>
              </div>

              <div className="skills__data">
                <div className="skills__blob">
                  <img src={Javascript} alt="skills image" />
                </div>

                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__subtitle">Intermediate</span>
              </div>

              <div className="skills__data">
                <div className="skills__blob">
                  <img src={ReactImg} alt="skills image" />
                </div>

                <h3 className="skills__name">React</h3>
                <span className="skills__subtitle">Intermediate</span>
              </div>

              <div className="skills__data">
                <div className="skills__blob">
                  <img src={Bootstrap} alt="skills image" />
                </div>

                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__subtitle">Advanced</span>
              </div>

              <div className="skills__data">
                <div className="skills__blob">
                  <img src={Git} alt="skills image" />
                </div>

                <h3 className="skills__name">Git</h3>
                <span className="skills__subtitle">Advanced</span>
              </div>
            </div>
          </div>

          {/* ==================== SKILLS 2 ==================== */}
          <div className="skills__content">
            <h3 className="skills__title">
              <i className="icon icon-hdd-o"></i>
              Backend Developer
            </h3>

            <div className="skills__info">
              <div className="skills__data">
                <div
                  className="skills__blob"
                  style={{ transform: "scale(1.4)" }}
                >
                  <img src={PHP} alt="skills image" />
                </div>

                <h3 className="skills__name">PHP</h3>
                <span className="skills__subtitle">Intermediate</span>
              </div>

              <div className="skills__data">
                <div className="skills__blob" style={{ transform: "scale(2)" }}>
                  <img src={Node} alt="skills image" />
                </div>

                <h3 className="skills__name">Node.js</h3>
                <span className="skills__subtitle">Intermediate</span>
              </div>

              <div className="skills__data">
                <div
                  className="skills__blob"
                  style={{ transform: "scale(1.3)" }}
                >
                  <img src={MySql} alt="skills image" />
                </div>

                <h3 className="skills__name">MySQL</h3>
                <span className="skills__subtitle">Intermediate</span>
              </div>

              <div className="skills__data">
                <div className="skills__blob" style={{ transform: "scale(2)" }}>
                  <img src={Express} alt="skills image" />
                </div>

                <h3 className="skills__name">Express js</h3>
                <span className="skills__subtitle">Advanced</span>
              </div>

              <div className="skills__data">
                <div className="skills__blob" style={{ transform: "scale(2)" }}>
                  <img src={Mongo} alt="skills image" />
                </div>

                <h3 className="skills__name">Mongo DB</h3>
                <span className="skills__subtitle">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
