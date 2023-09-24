import React from "react";

function About() {
  // Function to handle the download action
  const handleDownload = () => {
    // Specify the path to your CV file
    const cvFilePath = "../public/MyCv.pdf"; // Update with the correct path

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = cvFilePath;

    // Set the download attribute and file name
    anchor.download = "asher_cv.pdf"; // Update with your desired file name

    // Programmatically trigger a click event on the anchor element
    anchor.click();
  };

  return (
    <div className="main">
      <section className="qualification section" id="qualification">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle-2">details</span>

        <div className="qualification__container container grid section__border">
          {/* ==================== QUALIFICATION 1 ==================== */}
          <div className="qualification__content">
            <div className="qualification__info">
              <div className="qualification__div">
                <span className="qualification__details">
                  I'm a highly skilled and motivated software developer with
                  over 2 years of experience in crafting responsive and
                  user-centric software solutions. My expertise spans across a
                  wide spectrum of technologies, enabling me to deliver
                  exceptional software products and services.
                  <br />
                  <br />
                  I am deeply committed to delivering high-quality code and
                  consistently striving for excellence in software development
                  to guarantee an outstanding user experience.
                  <br />
                  <br />I possess a diverse collection of certificates that
                  highlight my expertise in various areas. These certifications
                  reflect my commitment to continuous learning and staying
                  updated with industry trends. From software development,
                  including user experience design, to project management and
                  proficiency in agile methodologies, I bring a versatile skill
                  set to the table.
                </span>

                {/* Trigger download when the button is clicked */}
                <button
                  className="qualification__button"
                  onClick={handleDownload}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          src="assets/img/shape-circle.svg"
          alt="qualification image"
          className="qualification__img"
        />
      </section>
    </div>
  );
}

export default About;
