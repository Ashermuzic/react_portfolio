import React from "react";
import Car from "../assets/img/fullcar.png";
import Ecomm from "../assets/img/fulleco02.png";
import Food from "../assets/img/fullfood01.png";
import Blog from "../assets/img/blog05.png";
import Recipe from "../assets/img/rcp.png";

function Projects() {
  const datas = [
    {
      id: 1,
      img: Car,
      title: "Modern Car Website",
      gitLink: "https://github.com/Ashermuzic/car",
      webLink: "https://cheery-sfogliatella-508566.netlify.app",
    },
    {
      id: 2,
      img: Blog,
      title: "Habesha Blog App",
      gitLink: "https://github.com/Ashermuzic/blog_app_Frontend",
      webLink: "https://steady-praline-683fce.netlify.app",
    },
    {
      id: 3,
      img: Ecomm,
      title: "Ecommerce Store",
      gitLink: "https://github.com/Ashermuzic",
      webLink: "https://quiet-malabi-fbf606.netlify.app",
    },
    {
      id: 4,
      img: Food,
      title: "Burger Planet",
      gitLink: "https://github.com/Ashermuzic/food",
      webLink: "https://mellow-halva-9a7427.netlify.app",
    },

    {
      id: 5,
      img: Recipe,
      title: "Recipe App",
      gitLink: "https://github.com/Ashermuzic/recipe",
      webLink: "https://gentle-conkies-88cf4a.netlify.app",
    },
  ];

  return (
    <div className="main">
      <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="container section__border">
          <div className="projects__container">
            <div className="cards">
              {datas.map((data) => (
                <div className="card" key={data.id}>
                  <div className="top">
                    <img src={data.img} alt="" />
                  </div>
                  <div className="bottom">
                    <div className="title">
                      <h1>{data.title}</h1>
                    </div>
                    <div className="body">
                      <a href={data.gitLink} target="_blank">
                        <button>
                          <div>
                            Github{" "}
                            <i
                              className="icon icon-github"
                              style={{ fontSize: "18px" }}
                            ></i>
                          </div>
                        </button>
                      </a>

                      <a href={data.webLink} target="_blank">
                        <button className="demoArrow">
                          <div>
                            Live Demo{" "}
                            <i
                              className="icon icon-arrow-right"
                              style={{ fontWeight: 100 }}
                            ></i>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
