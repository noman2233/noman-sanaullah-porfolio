import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

export const metadata = {
  title: "Projects Details",
};

const ProjectDetails = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Mobile Application Design"} />
      {/* ProjectDetails Area start */}
      <section className="projects-details-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="projects-details-image mb-50 wow fadeInUp delay-0-2s">
            <img
              src="https://i.ibb.co/B2P3kRbF/Untitled-design-1.png"
              alt="Project Details"
            />
          </div>
          <div className="row gap-120">
            <div className="col-lg-8">
              <div className="project-details-content wow fadeInUp delay-0-2s">
                <h3>Real Estate App in React Native</h3>
                <p className="big-letter">
                  A fully responsive mobile app built with React Native,
                  optimized for both Android and iOS devices.
                </p>
                <p>
                  The Real Estate App is a cross-platform mobile application
                  designed to help users browse, filter, and explore property
                  listings with ease. Built using React Native, the app features
                  an intuitive UI, real-time data sync with Firebase, and
                  powerful location-based tools using Google Maps API. It
                  provides a complete property browsing experience, from
                  discovering listings to contacting agents directly from the
                  app.
                </p>

                <ul className="list-style-one two-column mt-50 mb-40">
                  <li> React Native CLI</li>
                  <li>Redux for state management</li>
                  <li>Firebase Implementation</li>
                  <li>REST API Integration</li>
                  <li>Google Maps API</li>
                  <li>Advance Search filters</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp delay-0-4s">
              <div
                className="project-details-info rmb-55"
                style={{
                  backgroundImage:
                    "url(assets/images/projects/project-info-bg.png)",
                }}
              >
                <div className="pd-info-item">
                  <span>Category</span>
                  <h5>Product Design</h5>
                </div>
                <div className="pd-info-item">
                  <span>Clients</span>
                  <h5>X_Design Studio</h5>
                </div>
                <div className="pd-info-item">
                  <span>Location</span>
                  <h5>Melbourne, Australia</h5>
                </div>
                <div className="pd-info-item">
                  <span>Published</span>
                  <h5>September 25, 2023</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-15">
            <div className="col-lg-4 col-sm-6">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <img
                  src="https://i.ibb.co/M5R8JpTk/Untitled-design-3.png"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="https://i.ibb.co/sJH6VgDB/Untitled-design-4.png"
                  alt="Project Middle"
                />
              </div>
            </div>
            {/* <div className="col-lg-4 col-sm-6">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/projects/project-middle3.jpg"
                  alt="Project Middle"
                />
              </div>
            </div> */}
          </div>
          <div className="project-bottom-content mb-50 wow fadeInUp delay-0-2s">
            <h3 className="title mb-25">Project Summery</h3>
            <p>
              Key Features 📌 Property Listings with Image Gallery View detailed
              property listings with multiple images, descriptions, pricing,
              location details, and property types. 🔍 Advanced Search & Filters
              Filter properties by city, price range, property type (house,
              apartment, plot), and more to find exactly what you're looking
              for. ☁️ Firebase Backend Integration Real-time database or
              Firestore for storing property data and user activities Firebase
              Authentication for secure user sign-ups and logins 🗺 Google Maps
              Integration Each listing includes a built-in map view showing the
              exact property location for improved accuracy and user confidence.
              ❤️ Saved Listings Users can bookmark their favorite properties for
              quick access anytime. 📞 Contact Agent Each property includes a
              direct call or message button, enabling users to contact agents
              instantly.
            </p>
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
      {/* Project Details Area end */}
      {/* Related Projects Area start */}
      {/* <section className="related-projects-area pb-70 rpb-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <h2>Related Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-2s">
                <div className="project-image before-after-none">
                  <img
                    src="assets/images/projects/related-project1.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Graphics Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Brand Identity Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-4s">
                <div className="project-image before-after-none">
                  <img
                    src="assets/images/projects/related-project2.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Product Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Mobile Apps Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-6s">
                <div className="project-image before-after-none">
                  <img
                    src="assets/images/projects/related-project3.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Product Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Dashboard Development
                    </Link>
                  </h4>
                </div>
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
      </section> */}
    </NoxfolioLayout>
  );
};
export default ProjectDetails;

