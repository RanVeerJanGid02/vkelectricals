import React from "react";


function Header() {
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');  
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }
  return (
    <header id="header" style={{zIndex:"1111"}} className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1>
            <img src="/favicon-32x32.png"/>
            
          </h1>
        </a>
        <i onClick={mobileNavToogle} className="mobile-nav-toggle mobile-nav-show bi bi-list" />
        <i onClick={mobileNavToogle} className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a onClick={mobileNavToogle} href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a onClick={mobileNavToogle} href="#services">Services</a>
            </li>
            <li>
              <a onClick={mobileNavToogle} href="#projects">Projects</a>
            </li>
            <li>
              <a onClick={mobileNavToogle} href="#contact">Contact Us</a>
            </li>
            {/* <li>
                <a href="tel:9300550509">CLICK TO CALL</a>
              </li> */}
            {/* <li>
                <a href="blog.html">Blog</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li> */}
            {/* <li>
                <a href="contact.html">Contact</a>
              </li> */}
          </ul>
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
}

export default Header;
