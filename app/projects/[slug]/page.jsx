

import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import { projects } from "@/utility/data";

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: project ? project.title : "Project Details",
  };
}

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <h1 className="text-center py-40">Project Not Found</h1>;
  }

  return (
    <NoxfolioLayout>
      <PageBanner pageName={project.title} />

      <section className="projects-details-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          {/* Banner */}
          <div className="projects-details-image mb-50">
            <img src={project.banner} alt={project.title} />
          </div>

          <div className="row gap-120">
            {/* LEFT CONTENT */}
            <div className="col-lg-8">
              <div className="project-details-content">
                <h3>{project.title}</h3>

                <p className="big-letter">{project.description}</p>

                <p>{project.details}</p>

                <ul className="list-style-one two-column mt-50 mb-40">
                  {project.tech.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4">
              <div
                className="project-details-info"
                style={{
                  backgroundImage:
                    "url(/assets/images/projects/project-info-bg.png)",
                }}
              >
                <div className="pd-info-item">
                  <span>Category</span>
                  <h5>{project.category}</h5>
                </div>
                <div className="pd-info-item">
                  <span>Clients</span>
                  <h5>{project.client}</h5>
                </div>
                <div className="pd-info-item">
                  <span>Location</span>
                  <h5>{project.location}</h5>
                </div>
                <div className="pd-info-item">
                  <span>Published</span>
                  <h5>{project.published}</h5>
                </div>
              </div>
            </div>
          </div>

          {/* EXTRA IMAGES */}
          <div className="row pb-15">
            {project.images.map((img, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="image mb-30">
                  <img src={img} alt={project.title} />
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="project-bottom-content mb-50">
            <h3 className="title mb-25">Project Summary</h3>
            <p>{project.details}</p>
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
    </NoxfolioLayout>
  );
}
