import React from "react";
import { Address, EMAIL, PHONE, PHONE1 } from "../Constant";

function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>V.K. ELECTRICALS</h3>
                  <p>
                    {Address}
                    <br />
                    <br />
                    <strong>Phone:</strong> {PHONE}
                    <br />
                    <strong></strong>{PHONE1}
                    <br />
                    
                    
                    <strong>Email:</strong> {EMAIL}
                    <br />
                  </p>
                  <div className="social-links d-flex mt-3">
                    {/* <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-twitter" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-instagram" />
                    </a> */}
                    {/* <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-linkedin" />
                    </a> */}
                  </div>
                </div>
              </div>
              {/* End footer info column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#header">Home</a>
                  </li>

                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact us</a>
                  </li>
                  {/* <li>
                    <a href="#">Privacy policy</a>
                  </li> */}
                </ul>
              </div>
              {/* End footer links column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#services">Industrial</a>
                  </li>
                  <li>
                    <a href="#services">Commercial</a>
                  </li>
                  <li>
                    <a href="#services">Colonies</a>
                  </li>
                  <li>
                    <a href="#services">Residential</a>
                  </li>
                  {/* <li>
                    <a href="#">Graphic Design</a>
                  </li> */}
                </ul>
              </div>
              {/* End footer links column*/}
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Projects</h4>
                <ul>
                  <li>
                    <a href="#projects">Construction</a>
                  </li>
                  <li>
                    <a href="#projects">Remodeling</a>
                  </li>
                  <li>
                    <a href="#projects">Repairs</a>
                  </li>
                  <li>
                    <a href="#projects">Design</a>
                  </li>
                  {/* <li>
                    <a href="#">Sit quas consectetur</a>
                  </li> */}
                </ul>
              </div>
              {/* End footer links column*/}
              {/* <div className="col-lg-2 col-md-3 footer-links">
                <h4>Nobis illum</h4>
                <ul>
                  <li>
                    <a href="#">Ipsam</a>
                  </li>
                  <li>
                    <a href="#">Laudantium dolorum</a>
                  </li>
                  <li>
                    <a href="#">Dinera</a>
                  </li>
                  <li>
                    <a href="#">Trodelas</a>
                  </li>
                  <li>
                    <a href="#">Flexo</a>
                  </li>
                </ul>
              </div> */}
              {/* End footer links column*/}
            </div>
          </div>
        </div>
        <div className="footer-legal text-center position-relative">
          <div className="container">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>V.K. Electrical</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/ */}
              {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
            </div>
          </div>
        </div>
      </footer>
      {/* <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> */}
    </div>
  );
}

export default Footer;
