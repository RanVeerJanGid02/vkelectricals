import React from "react";
import { Address, EMAIL, PHONE } from "../Constant";

function ContactUs () {
    return (
      <div>

          <section id="contact" className="contact">
          
          <div className="container" data-aos="fade-up">
            <div id="contact" className="section-header">
              <h2>Contact Us</h2>
              <p>Feel free to Contact us throw Email or Call us.Our team will always be there for you</p>
            </div>
          </div>
        
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-map" />
                    <h3>Our Address</h3>
                    <p></p>{Address}
                  </div>
                </div>{/* End Info Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-envelope" />
                    <h3><a href="mailto:jaigurudev.vk@gmail.com">
                    Email Us</a></h3>
                    <p></p>{EMAIL}
                  </div>
                </div>{/* End Info Item */}
                <div className="col-lg-3 col-md-6">
                  <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-telephone" />
                    <h3><a href="tel:9300550509">Call Us</a></h3>
                    <p></p>{PHONE}
                  </div>
                </div>{/* End Info Item */}
              </div>
              <div className="row gy-4 mt-1">
                <div className="sm-4">
                <div><iframe src="https://maps.google.com/maps?q=22.6006761076799, 75.70898879296767&z=15&output=embed" width="100%" height="270" framborder="0" ></iframe>
</div>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen="" style={{border: 0, width: '100%', height: '384px'}}></iframe> */}
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!3m1!4b1!4m5!3m4!1s0x3962562a5336d85f:0x4b0a3f9d195308c2!8m2!3d22.5970751!4d75.7084111" frameBorder={0} style={{border: 0, width: '100%', height: '384px'}} allowFullScreen ></iframe> */}
                </div>{/* End Google Maps */}
                {/* <div className="col-lg-6">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row gy-4">
                      <div className="col-lg-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                      </div>
                      <div className="col-lg-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>End Contact Form */}
              </div>
            </div>
          </section>{/* End Contact Section */}

      
      </div>
    );
  };


export default ContactUs;