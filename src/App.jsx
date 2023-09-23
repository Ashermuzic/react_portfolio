import "./styles.css";
import "./assets/icomoon/style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <About />
      <Service />
      <Projects />
      <Testimonial />
      <Contact />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
