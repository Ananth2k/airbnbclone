import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Airbnblogo from "./Logo";
import Tab from "./Tabs";


function Header() {
  return (
    <Navbar expand="lg" className="px-3 py-0 sticky-nav d-block nav-gradient-bg">
      
        <div className="d-flex px-3 w-100 justify-content-between align-items-start">
          <div className="my-4 pe-5" ><Airbnblogo/></div>
          <Tab />
          
          <div className="d-none d-lg-block my-4 login-section">
            <div className="align-items-center d-flex">
              <div >
                <p className="fw-semibold me-2 m-0">Become a Host</p></div>
              <div className="me-2 language-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" ><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path></svg></div>
              <div className="menu-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" ><g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g></svg></div>
            </div>

          </div>
        </div>
       
     
      
    </Navbar>
  
  );
}

export default Header;
