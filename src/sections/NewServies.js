import React from "react";

function NewSrevices() {
  return (
    <div>
      <section id="alt-services" className="alt-services">
        <div className="container" data-aos="fade-up">
          <div id="services" className="section-header">
            <h2>Services</h2>
            <p>
              Thank you for your interest in our services. Our team of
              experienced professionals is dedicated to providing the highest
              quality of service to our clients.
            </p>
          </div>
        </div>
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4">
            <div
              className="col-lg-6 img-bg"
              style={{ backgroundImage: "url(assets/img/alt-services.jpg)" }}
              data-aos="zoom-in"
              data-aos-delay={100}
            />
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Services We Offer</h3>
              <p>
                We look forward to helping you get the most out of your
                experience with us.
              </p>
              <div
                className="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                {/* <i className="bi bi-easel flex-shrink-0" /> */}
                <div>
                  <h4>
                    <a className="stretched-link">Industrial</a>
                  </h4>
                  <p>
                    They involve the renovation or expansion of existing
                    facilities.An industrial project is a large-scale
                    undertaking that involves the construction of a facility or
                    infrastructure for industrial purposes.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div
                className="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* <i className="bi bi-patch-check flex-shrink-0" /> */}
                <div>
                  <h4>
                    <a className="stretched-link">Commercial</a>
                  </h4>
                  <p>
                    Commercial projects typically require complex planning and
                    execution.commercial projects include developing a new
                    product or service or developing.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div
                className="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                {/* <i className="bi bi-brightness-high flex-shrink-0" /> */}
                <div>
                  <h4>
                    <a className="stretched-link">Colonies</a>
                  </h4>
                  <p>
                    A colony project involves the study of a group of organisms
                    living in a particular environment.A colony project is a
                    project that involves the establishment of a new settlement
                    or community in an area that is not currently inhabited.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div
                className="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                {/* <i className="bi bi-brightness-high flex-shrink-0" /> */}
                <div>
                  <h4>
                    <a className="stretched-link">Residential</a>
                  </h4>
                  <p>
                    Residential projects can range from small renovations to
                    large-scale development.Residential projects can include a
                    variety of different types of construction.These projects
                    may involve new construction or renovations to existing
                    structures.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewSrevices;
