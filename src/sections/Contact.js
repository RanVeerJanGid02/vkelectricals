import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsTelephonePlus } from "react-icons/bs";

function Contact() {
  return (
    <div>
      <section  className="contact" style={{ backgroundColor: "#F0F0F0  " }}>
      <main id="main">
        <section className="section">
          <div className="container" data-aos="fade-up">
            <div id="contact" className="section-header">
              <h2>Contact Us</h2>
              <p>Feel free to Contact us throw Email or Call us</p>
            </div>
          </div>
        </section>
      </main>
      <section id="contact" className="contact">
        <div className="aos-animate container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                <BsFillPersonLinesFill size={40} style={{ color: "orange" }} />
                <h1>Our Address</h1>
                <p>CJRM-76 Nayay Nagar</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 container mt-4">
              <div className="info-item d-flex flex-column justify-content-center align-items-center container">
                <BsFillEnvelopeFill size={40} style={{ color: "orange" }} />
                <h1>Email Us</h1>
                <p>Contact@gmail</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 container mt-4">
              <div className="info-item d-flex flex-column justify-content-center align-items-center container">
                <BsTelephonePlus size={40} style={{ color: "orange" }} />
                <h1>Call Us</h1>
                <p>+91854915368@gmail</p>
              </div>
            </div>
          </div>
          <div className="row gy-4 mt-1">
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
      <div className="row gy-4 mt-1">
        <div className="col-lg-6 ">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameBorder={0}
            style={{ border: 0, width: "100%", height: "384px" }}
            allowFullScreen
          /> */}
        </div>
        {/* End Google Maps */}
        <div className="col-lg-6 container">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row gy-4">
              <div className="col-lg-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-lg-6 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message"
                required
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
        {/* End Contact Form */}
      </div>
      </section>
    </div>
  );
}

export default Contact;
