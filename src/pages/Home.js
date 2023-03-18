import React, { Component, useState } from "react";
import Footer from "../sections/Footer.js";
import Header from "../sections/Header.js";
import Welcome from "../sections/Welcome.js";
import NewSrevices from "../sections/NewServies.js";
import Projects from "../sections/Projects.js";

import ContactUs from "../sections/ContactUs.js";

function Home() {
  return (
    <div>
      <Header />
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <Welcome />
      {/* End Hero Section */}
      <main id="main">
        
        {/* ======= Get Started Section ======= */}
        {/* <section id="get-started" className="get-started section-bg">
          <div className="container">
            <div className="row justify-content-between gy-4">
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="fade-up"
              >
                <div className="content">
                  <h3>
                    Powering Your Home and Business with Quality Electrical
                    Solutions.
                  </h3>
                  <p>
                    Welcome to our Contact Us page! We are here to answer any
                    questions you may have about our electrical services. Our
                    team of experienced professionals is available to provide
                    you with the best advice and solutions for all your
                    electrical needs. Whether you need help with a new
                    installation, repair, or maintenance,.
                  </p>
                  <p>
                    Our team of experienced professionals is available to
                    provide you with the best advice and solutions for all your
                    electrical needs. Whether you need help with a new
                    installation, repair, or maintenance.
                  </p>
                </div>
              </div>
              <div className="col-lg-5" data-aos="fade">
                <form
                onSubmit={onSubmit}
                  className="php-email-form"
                >
                  <h3>Get a quote</h3>
                  <p>
                    Please feel free to contact us via phone, email, or our
                    online form. We look forward to hearing from you and helping
                    you with all your electrical needs.
                  </p>
                  <div className="row gy-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-12 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your quote request has been sent successfully. Thank
                        you!
                      </div>
                        
                        <button
                        type="submit"
                          className="btn btn-warning"
                        >
                          Submit                          
                        </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}
        {/* ======= Alt Services Section ======= */}
        <NewSrevices />
        {/* End Alt Services Section */}
        {/* ======= Our Projects Section ======= */}
        <Projects />
        {/* End Our Projects Section */}
        {/* ======= Recent Blog Posts Section ======= */}
        {/* <Blogs/> */}
        {/* End Recent Blog Posts Section */}
      </main>
      {/* End #main */}
      {/* <Contact/> */}
      <ContactUs />
      {/* ======= Footer ======= */}
      <Footer />
      {/* End Footer */}
      {/* <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a> */}
      {/* <div id="preloader" /> */}
    </div>
  );
}

export default Home;
