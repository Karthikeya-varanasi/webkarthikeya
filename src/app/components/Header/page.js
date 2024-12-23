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



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: '',
});
console.log(formData, "ter")


const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState('');
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
};

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//         const res = await fetch('/api/contact', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),  // Ensure formData is properly passed
//         });

//         const result = await res.json();
//         console.log(result, "tr");

//         if (res.ok) {
//             setSubmitStatus('Message sent successfully!');
//         } else {
//             setSubmitStatus('Failed to send message.');
//         }
//     } catch (error) {
//         setSubmitStatus('An error occurred.');
//     } finally {
//         setIsSubmitting(false);
//     }
// };

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // const formData = {
    //     name: "John Doe",
    //     email: "john@example.com",
    //     mobile: "1234567890",
    //     service: "Consultation",
    //     message: "I would like to know more.",
    // };

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        console.log(data,"data")

        if (res.ok) {
            setSubmitStatus('Message sent successfully!');
        } else {
            setSubmitStatus(data.error || 'Failed to send message.');
        }
    } catch (error) {
        setSubmitStatus('An error occurred.');
    } finally {
        setIsSubmitting(false);
    }
};


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
                    title="Home"
                    onClick={handleNavLinkClick}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#about"
                    className="nav-links"
                    title="About"
                    onClick={handleNavLinkClick}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#services"
                    className="nav-links"
                    title="Service"
                    onClick={handleNavLinkClick}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#resume"
                    className="nav-links"
                    title="Resume"
                    onClick={handleNavLinkClick}
                  >
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#skills"
                    className="nav-links"
                    title="Skills"
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
                  title="Hire Me"
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
            <form onSubmit={handleSubmit} className="form">
                                    <label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="input"
                                            placeholder=""
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span>Firstname</span>
                                    </label>

                                    <label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="input"
                                            placeholder=""
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span>Email</span>
                                    </label>

                                    <label>
                                        <input
                                            type="text"
                                            name="mobile"
                                            id="mobile"
                                            className="input"
                                            placeholder=""
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span>Phone Number</span>
                                    </label>

                                    <label>
                                        <select
                                            name="service"
                                            id="service"
                                            className="input"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="Website Customize">Website Customize</option>
                                            <option value="Single Landing Page Design">Single Landing Page Design</option>
                                            <option value="Design">Design</option>
                                            <option value="Development">Development</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                        </select>
                                        <span>Service</span>
                                    </label>

                                    <label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="5"
                                            className="input"
                                            placeholder="Enter your Text"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </label>


                                    <button type="submit" className="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </button>

                                    {submitStatus && <p>{submitStatus}</p>}
                                </form>
          </div>
        </div>
      </div>
    </>
  );
}
