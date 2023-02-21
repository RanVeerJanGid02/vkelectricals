import React from "react";

function Projects() {
  const projectsList = [
    {
      image: "assets/img/vk/1.jpeg",
      title: "1",

      filterBy: "filter-construction",
    },
    {
      image: "assets/img/vk/2.jpeg",
      title: "2",

      filterBy: "filter-construction",
    },
    {
      image: "assets/img/vk/3.jpeg",
      title: "3",

      filterBy: "filter-remodeling",
    },
    {
      image: "assets/img/vk/4.jpeg",
      title: "4",

      filterBy: "filter-construction",
    },
    {
      image: "assets/img/vk/5.jpeg",
      title: "5",

      filterBy: "filter-remodeling",
    },
    {
      image: "assets/img/vk/6.jpeg",
      title: "6",

      filterBy: "filter-design",
    },
    {
      image: "assets/img/vk/7.jpeg",
      title: "7",

      filterBy: "filter-remodeling",
    },
    {
      image: "assets/img/vk/8.jpeg",
      title: "8",

      filterBy: "filter-repairs",
    },
    {
      image: "assets/img/vk/9.jpeg",
      title: "9",

      filterBy: "filter-remodeling",
    },
    {
      image: "assets/img/vk/10.jpeg",
      title: "10",

      filterBy: "filter-repairs",
    },
    {
      image: "assets/img/vk/11.jpeg",
      title: "11",

      filterBy: "filter-design",
    },
    {
      image: "assets/img/vk/12.jpeg",
      title: "12",

      filterBy: "filter-repairs",
    },
    {
      image: "assets/img/vk/13.jpeg",
      title: "13",

      filterBy: "filter-repairs",
    },
    {
      image: "assets/img/vk/14.jpeg",
      title: "14",

      filterBy: "filter-design",
    },
    {
      image: "assets/img/vk/15.jpeg",
      title: "15",

      filterBy: "filter-construction",
    },
    {
      image: "assets/img/vk/17.jpeg",
      title: "16",

      filterBy: "filter-design",
    },
  ];

  return (
    <div className="projects1 bg-light">
      <section id="projects" className="projects">
        <div className="container" data-aos="fade-up">
          <div id="projects" className="section-header">
            <h2>Our Projects</h2>
            <p>
              Design and installation of Electric pillars systems.Our team can
              design and install Electric pillars systems for residential,
              commercial, and industrial customers.
            </p>
          </div>
          <div
            className="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
          >
            <ul
              className="portfolio-flters"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-remodeling">Remodeling</li>
              <li data-filter=".filter-construction">Construction</li>
              <li data-filter=".filter-repairs">Repairs</li>
              <li data-filter=".filter-design">Design</li>
            </ul>
            {/* End Projects Filters */}
            <div
              className="row gy-4 portfolio-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {projectsList.map((item, i) => (
                <div
                  className={
                    "col-lg-4 col-md-6 portfolio-item " + item.filterBy
                  }
                  key={i}
                >
                  <div className="portfolio-content h-100">
                    <img src={item.image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.discription}</p>
                      <a
                        href={item.image}
                        title="Construction 1"
                        data-gallery="portfolio-gallery-construction"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in" />
                      </a>
                      <a
                        href="project-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              {/* End Projects Item */}
            </div>
            {/* End Projects Container */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
