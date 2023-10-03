import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ darkBg, classOption }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header className={`header ${classOption}`}>
        <nav
          className={`navbar navbar-expand-lg fixed-top ${darkBg ? "bg-transparent" : "custom-nav white-bg"
            } ${scroll > headerTop ? "affix" : ""}`}
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              {darkBg ? (
                <img
                  src= { `${scroll > headerTop ? "assets/img/logo-color-1x.png" : "assets/img/logo-white-1x.png"} ` }
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              ) : (
                <img
                  src="assets/img/logo-color-1x.png"
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              )}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ti-menu"></span>
            </button>
            <div
              className="collapse navbar-collapse main-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <HashLink className="nav-link" smooth to='#'>
                Home
                  </HashLink>
                
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to='#pricing'>
                    Unlock
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to="#features">
                    Features
                  </HashLink>
                </li>              
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to="#team">
                    Team
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to="#contact">
                    Contact
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className= { `${scroll > headerTop ? "become-partner-scroll-btn" : "become-partner-btn"} ` }
                 smooth to='/coming-soon'>
                  Become a Partner
                  </HashLink>
                
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
