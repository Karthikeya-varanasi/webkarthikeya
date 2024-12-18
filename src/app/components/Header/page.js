"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const [headerTop, setHeaderTop] = useState(0); 
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  const [lastScrollY, setLastScrollY] = useState(0); 

  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  // Handle navigation link clicks in mobile mode
  const handleNavLinkClick = () => {
    if (isNavOpen) {
      closeNav(); // Close the menu after clicking a link
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setHeaderTop(-120); 
      } else {
        setHeaderTop(0); 
      }

      setIsActive(currentScrollY < lastScrollY); 
      setIsScrolled(currentScrollY > 150); 

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        style={{ top: `${headerTop}px` }}
        className={`header ${isActive ? "active" : ""} ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="container">
          <div className="page-header-section">
            <nav className="navbar">
              <div className="logo">
                <img src="/img/logo.svg" alt="Logo" />
                <div className="menu-icon" onClick={openNav}>
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>

              <ul
                className={`overlay nav-menu ${isNavOpen ? "open" : ""}`}
                id="myNav"
              >
                <a
                  href="#"
                  className="closebtn"
                  onClick={closeNav}
                >
                  &times;
                </a>
                <li className="nav-item">
                  <a
                    href="#home"
                    className="nav-links"
                    onClick={handleNavLinkClick}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#about"
                    className="nav-links"
                    onClick={handleNavLinkClick}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#services"
                    className="nav-links"
                    onClick={handleNavLinkClick}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#resume"
                    className="nav-links"
                    onClick={handleNavLinkClick}
                  >
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#skills"
                    className="nav-links"
                    onClick={handleNavLinkClick}
                  >
                    Skills
                  </a>
                </li>
              </ul>

              <div className="mobile">
                <button
                  className="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Hire Me!
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ background: "none" }}>
            <div className="modal-header">
              <button
                type="button"
                className="btn-close float-end"
                style={{ color: "white" }}
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <form action="includes/action.php" method="post" className="form">
              <label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder=""
                  required
                />
                <span>Firstname</span>
              </label>

              <label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  required
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  className="input"
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder=""
                />
                <span>Phone Number</span>
              </label>
              <label>
                <textarea
                  className="input"
                  type="text"
                  name="message"
                  id="message"
                  style={{ width: "100%", height: "100px", padding: "10px" }}
                  placeholder="Enter your Text"
                ></textarea>
              </label>
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
