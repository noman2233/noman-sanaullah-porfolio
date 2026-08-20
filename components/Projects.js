// import { projects } from "@/utility/data";
// import Link from "next/link";

// const Projects = () => {
 
//   return (
//     <section
//       id="portfolio"
//       className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
//     >
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-12">
//             <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
//               <span className="sub-title mb-15">Latest Works</span>
//               <h2>
//                 Explore My Popular  <span>Projects</span>
//               </h2>
//             </div>
//           </div>
//         </div>
//         {/* <div className="row align-items-center pb-25">
//           <div className="col-lg-6">
//             <div className="project-image wow fadeInLeft delay-0-2s">
//               <img src="assets/images/projects/project1.jpg" alt="Project" />
//             </div>
//           </div>
//           <div className="col-xl-5 col-lg-6">
//             <div className="project-content wow fadeInRight delay-0-2s">
//               <span className="sub-title">Product Design</span>
//               <h2>
//                 <Link legacyBehavior href="project-details">
//                   Mobile Application Design
//                 </Link>
//               </h2>
//               <p>
//                 Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
//                 inventore veritatis architecto beatae
//               </p>
//               <Link legacyBehavior href="/project-details">
//                 <a className="details-btn">
//                   <i className="far fa-arrow-right" />
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div> */}

//         {projects?.slice(0,5).map((project) => (
//           <Link legacyBehavior href={`/projects/${project?.slug}`}>
//             <div className="row align-items-center pb-25" key={project.id}>
//               {/* IMAGE */}
//               <div
//                 className={`col-lg-6 ${project.reverse ? "order-lg-2" : ""}`}
//               >
//                 <div className="project-image wow fadeInLeft delay-0-2s">
//                   <img src={project?.card_image} alt={project.title} />
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div
//                 className={`col-xl-5 col-lg-6 ${
//                   project.reverse ? "ms-auto" : ""
//                 }`}
//               >
//                 <div className="project-content wow fadeInRight delay-0-2s">
//                   <span className="sub-title">{project.category}</span>

//                   <h2>{project.title}</h2>

//                   <p>{project.description}</p>

//                   <a className="details-btn">
//                     <i className="far fa-arrow-right" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}

//         {/* <div className="project-btn text-center wow fadeInUp delay-0-2s">
//           <Link legacyBehavior href="/projects">
//             <a className="theme-btn">
//               View More Projects <i className="far fa-angle-right" />
//             </a>
//           </Link>
//         </div> */}
//       </div>
//       <div className="bg-lines">
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//       </div>
//     </section>
//   );
// };
// export default Projects;




"use client"

import { useState, useMemo } from "react";
import { projects } from "@/utility/data";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Dynamically extract categories and construct Tab items
  const categories = useMemo(() => {
    const rawCategories = projects.map((p) => p.category);
    const uniqueCategories = Array.from(new Set(rawCategories));
    return ["All", ...uniqueCategories];
  }, []);

  // Filter projects according to selected active tab
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects?.slice(0, 6);
    return projects.filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Latest Works
              </span>
              <h2>
                Explore My Popular <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Dynamic Category Filter Tabs */}
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10">
            <ul className="project-filter-nav d-flex flex-wrap justify-content-center gap-2 list-unstyled">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`btn-tab ${
                      activeCategory === cat ? "active" : ""
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Responsive Grid Cards */}
        <div className="row g-4 justify-content-center">
          {filteredProjects.map((project, index) => {
            const categoryLower = project.category?.toLowerCase() || "";
            const isWebOrDashboard =
              categoryLower === "web development" ||
              categoryLower === "dashboards";

            // Identify external linking behavior
            const isExternal = isWebOrDashboard || Boolean(project.external_url);
            const targetUrl = isExternal
              ? project.external_url || "#"
              : `/projects/${project.slug}`;

            return (
              <div
                key={project.slug || index}
                className="col-xxl-4 col-lg-4 col-md-6 col-sm-12"
              >
                <div className="project-card-modern h-100 d-flex flex-column wow fadeInUp delay-0-2s">
                  {/* Card Image Wrapper */}
                  <div className="card-image-wrap position-relative overflow-hidden">
                    {isExternal ? (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-block h-100 w-100"
                      >
                        <Image
                          src={project.card_image || project.banner}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-fit-cover"
                        />
                      </a>
                    ) : (
                      <Link legacyBehavior href={targetUrl}>
                        <a className="d-block h-100 w-100">
                          <Image
                            src={project.card_image || project.banner}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-fit-cover"
                          />
                        </a>
                      </Link>
                    )}

                    <div className="category-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill bg-primary text-white text-capitalize fs-14">
                      {project.category}
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="card-content p-4 d-flex flex-column flex-grow-1">
                    <h3 className="card-title h5 font-weight-bold mb-2">
                      {isExternal ? (
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-decoration-none"
                        >
                          {project.title}
                        </a>
                      ) : (
                        <Link legacyBehavior href={targetUrl}>
                          <a className="text-white text-decoration-none">
                            {project.title}
                          </a>
                        </Link>
                      )}
                    </h3>

                    <p className="card-description text-muted mb-4 flex-grow-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Conditional Button Actions */}
                    <div className="card-action-btn mt-auto">
                      {isExternal ? (
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-project-link d-inline-flex align-items-center gap-2 fw-bold text-decoration-none"
                        >
                          Visit Site
                          <i className="far fa-external-link-alt" />
                        </a>
                      ) : (
                        <Link legacyBehavior href={targetUrl}>
                          <a className="btn-project-link d-inline-flex align-items-center gap-2 fw-bold text-decoration-none">
                            View Case Study
                            <i className="far fa-arrow-right" />
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default Projects;





export const Projects2 = () => {
  return (
    <section
      id="projects"
      className="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> start my projects
              </span>
              <h2>Explore My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-3">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two5.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="project-details-btn mb-50">
              <Link legacyBehavior href="/project-details">
                <a className="more-btn wow zoomIn delay-0-2s">
                  <span>More</span>
                  <i className="fal fa-arrow-up" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
