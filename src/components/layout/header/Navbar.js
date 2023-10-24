import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import LogoutConfirmation from "../../dialogBox/AuthDialogbox"

const Navbar = ({ darkBg, classOption , Home = "#" , Unlock = '#pricing', Features = "#features", Team = "#team", Contact = "#contact", BecomeApartner = "/become-partner" , login = "/login" }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogBox = () => {
   
    setIsDialogOpen(false);
  };


  useEffect(() => {
   
    const authToken = localStorage.getItem('authToken');


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


  const handleLogout = () => {
    // Remove the authToken from local storage
    localStorage.removeItem('authToken');
    // Update the state
    setAuthToken(null);
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
                <HashLink className="nav-link" smooth to= {Home}>
                Home
                  </HashLink>
                
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to= {Unlock}>
                    Unlock
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to={Features}>
                    Features
                  </HashLink>
                </li>              
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to= {Team}>
                    Team
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to= {Contact}>
                    Contact
                  </HashLink>
                </li>
                     <li className="nav-item">
                  <HashLink className={`mr-3 ${scroll > headerTop ? "become-partner-btn" : "become-partner-scroll-btn"}`} to={ authToken ?    "/" : login }>
                    {authToken ? (
                  <>
                      <span onClick={() => setIsDialogOpen(true)} 
                      // onClick={handleLogout}
                      >Logout
                      <LogoutConfirmation handleDialogBox= {handleDialogBox} isDialogOpen = {isDialogOpen} setIsDialogOpen = {setIsDialogOpen} handleLogout = {handleLogout} />
                      </span>  </>
                    ) : (
                      "Login / Register"
                    )}
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className= { `${scroll > headerTop ? "become-partner-scroll-btn" : "become-partner-btn"} ` }
                 smooth to= {BecomeApartner}>
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
