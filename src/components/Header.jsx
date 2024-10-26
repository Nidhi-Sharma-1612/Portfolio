import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const sectionOffsets = useRef({});
  const sections = ["home", "about", "portfolio", "contact"];

  const isProjectDetailsPage = location.pathname.startsWith("/portfolio/");

  useEffect(() => {
    // Get the offset of each section and store it in sectionOffsets
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        sectionOffsets.current[section] = element.offsetTop;
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 70);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find the section that matches the current scroll position
      for (const section of sections) {
        if (
          scrollPosition >= sectionOffsets.current[section] &&
          scrollPosition <
            sectionOffsets.current[section] +
              document.getElementById(section).offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    handleSetActive("contact");
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    handleSetActive("home");
    if (isProjectDetailsPage) {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
        isProjectDetailsPage
          ? "bg-gray-800 shadow-lg"
          : isScrolled
          ? "bg-gray-900 shadow-lg"
          : "bg-transparent"
      } text-white`}
    >
      <nav className="flex justify-center space-x-6 py-4">
        {isProjectDetailsPage ? (
          <>
            <span
              onClick={handleHomeClick}
              className={`cursor-pointer ${
                activeSection === "home" ? "text-green-400" : "text-white"
              } hover:text-green-400`}
            >
              Home
            </span>
            <RouterLink
              to="/#about"
              className={`cursor-pointer hover:text-green-400 ${
                activeSection === "about" ? "text-green-400" : "text-white"
              }`}
              onClick={() => handleSetActive("about")}
            >
              About
            </RouterLink>
            <RouterLink
              to="/#portfolio"
              className={`cursor-pointer hover:text-green-400 ${
                activeSection === "portfolio" ? "text-green-400" : "text-white"
              }`}
              onClick={() => handleSetActive("portfolio")}
            >
              Portfolio
            </RouterLink>
            <span
              onClick={(e) => {
                handleSetActive("contact");
                handleContactClick(e);
              }}
              className={`cursor-pointer hover:text-green-400 ${
                activeSection === "contact" ? "text-green-400" : "text-white"
              }`}
            >
              Contact
            </span>
          </>
        ) : (
          <>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={`cursor-pointer ${
                activeSection === "home" ? "text-green-400" : "text-white"
              } hover:text-green-400`}
              onClick={() => handleSetActive("home")}
              onSetActive={() => handleSetActive("home")}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-green-400 ${
                activeSection === "about" ? "text-green-400" : "text-white"
              }`}
              onClick={() => handleSetActive("about")}
              onSetActive={() => handleSetActive("about")}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-green-400 ${
                activeSection === "portfolio" ? "text-green-400" : "text-white"
              }`}
              onClick={() => handleSetActive("portfolio")}
              onSetActive={() => handleSetActive("portfolio")}
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className={`cursor-pointer hover:text-green-400 ${
                activeSection === "contact" ? "text-green-400" : "text-white"
              }`}
              onClick={() => handleSetActive("contact")}
              onSetActive={() => handleSetActive("contact")}
            >
              Contact
            </ScrollLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
