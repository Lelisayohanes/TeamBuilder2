import { useState } from "react";
import '../Styles/Navbar.css'

function Navbar() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Add this line

    const handleToggleNav = () => {
        setIsNavVisible((prevState) => !prevState);
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

  return (
    <div className='whole-navbar'>
      <header className='header' >
        <div className="container row row__nav">
          <div>
            <button
              className="nav-toggle"
              aria-label="open navigation"
              onClick={handleToggleNav}
            >
              {isMenuOpen ? (
                <img src="../../src/assets/images/Close.png" alt="Close Icon" />
              ) : (
                <img src="../../src/assets/images/Menu.png" alt="Menu Icon" />
              )}
            </button>

            <a className={`logo ${isMenuOpen ? "logo--hidden" : ""}`} href="#">
              <img
                className={`${isMenuOpen ? "logo--hidden" : ""}`}
                src="../../src/assets/images/logo 1.svg"
                alt="conquering responsive layouts"
              />
            </a>
          </div>
          <nav className={`nav ${isNavVisible ? "nav--visible" : ""}`}>
            <ul className="nav__list nav__list--primary">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  How to start
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Technologies
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Careers
                </a>
              </li>
            </ul>
            <ul className="nav__list nav__list--secondary">
              
              <li className="nav__item">
                <a href="#" className="nav__link nav__link--button">
                  Build a team
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link nav__link__hidden">
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
    </div>
  );
}

export default Navbar