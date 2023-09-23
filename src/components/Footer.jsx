import React from "react";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer__container container">
          <h1 class="footer__title">Asher</h1>
          <p>Frontend Developer</p>

          <ul class="footer__list">
            <li>
              <a href="#home" class="footer__link">
                Home
              </a>
            </li>

            <li>
              <a href="#skills" class="footer__link">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" class="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <ul class="footer__social">
            <a
              href="https://www.linkedin.com/in/asher-samuel-349167282/"
              target="_blank"
              class="footer__social-link"
            >
              <i class="icon icon-linkedin"></i>
            </a>

            <a
              href="https://github.com/Ashermuzic"
              target="_blank"
              class="footer__social-link"
            >
              <i class="icon icon-github"></i>
            </a>

            <a
              href="https://t.me/ashermuzic"
              target="_blank"
              class="footer__social-link"
            >
              <i class="icon icon-send"></i>
            </a>
          </ul>

          <span class="footer__copy">
            &#169; Copyright Asher | 2023. All rights reserved
          </span>
        </div>
      </footer>
      ;
    </div>
  );
}

export default Footer;
