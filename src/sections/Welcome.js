import React, { Component, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

function Welcome() {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">
                  Welcome to <span>V.K. ELECTRICALS</span>
                </h2>
                <p data-aos="fade-up">
                  We are an electrical company
                  </p>
                  <p className="d-none d-sm-block">
                    We specialize in all aspects of electrical work, from wiring
                    and installation to repair and maintenance. Our services
                    include the installation of pillars. With our expertise, you
                    can rest assured that. Our team is dedicated to providing
                    quality service.that provides a wide range of services to
                    residential and commercial customers.
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="btn-get-started"
                  href="https://wa.me/+919300550509?text=I'm%20interested%20in%20your%20services"
                  target="_blank"
                >
                  <BsWhatsapp size={24} />{" "}
                  <span className="m-3">Get Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval={5000}
        >
          <div
            className="carousel-item active"
            style={{
              backgroundImage: "url(assets/img/vk/electricalimage2.jpg)",
            }}
          />
          <div
            className="carousel-item"
            style={{
              backgroundImage: "url(assets/img/vk/electricalimage3.jpg)",
            }}
          />
          <div
            className="carousel-item"
            style={{
              backgroundImage: "url(assets/img/vk/electricalimage11.PNG)",
            }}
          />
          <div
            className="carousel-item"
            style={{
              backgroundImage: "url(assets/img/vk/electricalimage4.jpg)",
            }}
          />
          <div
            className="carousel-item"
            style={{
              backgroundImage: "url(assets/img/vk/electricalimage7.jpg)",
            }}
          />
          <a
            className="carousel-control-prev"
            href="#hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            />
          </a>
          <a
            className="carousel-control-next"
            href="#hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
