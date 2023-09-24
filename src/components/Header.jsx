import React, { useEffect, useState } from "react";

function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isScrollUpVisible, setIsScrollUpVisible] = useState(false);
  const [isHeaderBackground, setIsHeaderBackground] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 50) {
      setIsHeaderBackground(true);
    } else {
      setIsHeaderBackground(false);
    }
  };

  const scrollUp = () => {
    if (window.scrollY >= 50) {
      setIsScrollUpVisible(true);
    } else {
      setIsScrollUpVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    window.addEventListener("scroll", scrollUp);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHeader);
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };
  // Define the dark theme and icon theme as constants
  const darkTheme = "dark-theme";
  const iconTheme = "icon-sun-o";

  // Function to get the current theme
  const getCurrentTheme = () => {
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  };

  // Function to get the current icon
  const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "icon-moon-o" : "icon-sun-o";

  // Use useEffect to run the logic after the component has rendered
  useEffect(() => {
    // Previously selected theme and icon (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "icon-moon-o" ? "add" : "remove"](
        iconTheme
      );
    }
  }, []);

  // Handle theme toggle click
  const handleThemeToggleClick = () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  return (
    <div>
      <header
        className={`header ${isHeaderBackground ? "bg-header" : ""}`}
        id="header"
      >
        <nav class="nav container">
          <a href="#home" class="nav__logo">
            Ash3r
          </a>

          <div
            class="nav__menu"
            className={`nav__menu ${isMenuShown ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul class="nav__list grid">
              <li class="nav__item">
                <a href="#home" class="nav__link" onClick={toggleMenu}>
                  <i class="icon icon-home"></i> Home
                </a>
              </li>

              <li class="nav__item">
                <a href="#skills" class="nav__link" onClick={toggleMenu}>
                  <i class="icon icon-trophy"></i> Skills
                </a>
              </li>

              <li class="nav__item">
                <a href="#qualification" class="nav__link" onClick={toggleMenu}>
                  <i class="icon icon-book"></i> About
                </a>
              </li>

              <li class="nav__item">
                <a href="#services" class="nav__link" onClick={toggleMenu}>
                  <i class="icon icon-briefcase"></i> Services
                </a>
              </li>

              <li class="nav__item">
                <a href="#projects" class="nav__link" onClick={toggleMenu}>
                  <i class="icon icon-image"></i> Projects
                </a>
              </li>

              <li class="nav__item">
                <a href="#contact" class="nav__link" onClick={toggleMenu}>
                  <i class="icon icon-chat"></i> Contact
                </a>
              </li>
            </ul>

            {/* Close button  */}

            <div class="nav__close" id="nav-close" onClick={toggleMenu}>
              <i class="icon icon-close"></i>
            </div>
          </div>

          <div class="nav__buttons">
            {/* Theme change button  */}
            <i
              class="icon icon-moon-o change-theme"
              id="theme-button"
              onClick={handleThemeToggleClick}
            ></i>

            {/* Toggle button  */}
            <div class="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <i class="icon icon-menu"></i>
            </div>
          </div>
        </nav>

        <a
          href="#home"
          id="scroll-up"
          className={`default ${isScrollUpVisible ? "show-scroll" : ""}`}
        >
          <i className="icon icon-arrow-up"></i>
        </a>
      </header>
    </div>
  );
}

export default Header;
