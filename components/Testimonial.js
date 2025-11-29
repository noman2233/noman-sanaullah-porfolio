"use client";
import { noxfolioSlider } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }





  render() {


      const testimonials = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/happy-man-standing-beach_107420-9868.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Working with this team was a game-changer for our product. Their attention to detail and expertise made the development process seamless.",
    name: "Steve Lucas",
    position: "CEO & Founder",
    delay: "0-3s"
  },
  {
    id: 2,
    image: "assets/images/testimonials/author2.png",
    text: "They delivered our hybrid app on time and exceeded our expectations. Highly professional and responsive throughout.",
    name: "Asad Nizami",
    position: "Product Manager",
    delay: "0-4s"
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?semt=ais_hybrid&w=740&q=80",
    text: "The UI/UX design completely transformed our user engagement. Intuitive, sleek, and user-friendly—couldn’t ask for more.",
    name: "Rodolfo E. Shannon",
    position: "Lead Designer",
    delay: "0-2s"
  },
  {
    id: 4,
    image: "https://i.ibb.co/SwFpyrBs/vfvf.jpg",
    text: "Their backend solutions are rock-solid. We never had a downtime issue and the API integrations were seamless.",
    name: "Kenneth J. Dutton",
    position: "CTO",
    delay: "0-2s"
  }
];


    return (
      <section className="testimonials-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">
                      Clients Testimonials
                    </span>
                    <h2>
                      I’ve 10+ Clients <span>Feedback</span>
                    </h2>
                    <p>
                      Sed ut perspiciatis unde omnin natus totam rem aperiam
                      eaque inventore veritatis
                    </p>
                  </div>
                  <div className="slider-arrows">
                    <button
                      className="testimonial-prev slick-arrow"
                      onClick={this.previous}
                    >
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button
                      className="testimonial-next slick-arrow"
                      onClick={this.next}
                    >
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Slider
                  ref={(c) => (this.slider = c)}
                  {...noxfolioSlider.testimonials}
                  className="testimonials-wrap"
                >
                  {/* <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      At vero eoset accusamus et iusto odio dignissimos ducimus
                      quie blanditiis praesentium voluptatum deleniti atque
                      corrupti dolores
                    </div>
                    <div className="testi-des">
                      <h5>Rodolfo E. Shannon</h5>
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author2.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Nam libero tempore cumsoluta nobise est eligendi optio
                      cumque nihil impedit quominus idquod maxime placeat facere
                      possimus
                    </div>
                    <div className="testi-des">
                      <h5>Kenneth J. Dutton</h5>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      At vero eoset accusamus et iusto odio dignissimos ducimus
                      quie blanditiis praesentium voluptatum deleniti atque
                      corrupti dolores
                    </div>
                    <div className="testi-des">
                      <h5>Rodolfo E. Shannon</h5>
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author2.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Nam libero tempore cumsoluta nobise est eligendi optio
                      cumque nihil impedit quominus idquod maxime placeat facere
                      possimus
                    </div>
                    <div className="testi-des">
                      <h5>Kenneth J. Dutton</h5>
                      <span>Web Developer</span>
                    </div>
                  </div> */}

                    {testimonials.map((item) => (
                  <div className="testimonial-wrapper">
                      <div
                        key={item.id}
                        className={`testimonial-item wow fadeInUp delay-${item.delay}`}
                      >
                        <div className="author">
                          <img src={item.image} alt={item.name}    style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover"
  }} />
                        </div>
                        <div className="text">{item.text}</div>
                        <div className="testi-des">
                          <h5>{item.name}</h5>
                          <span>{item.position}</span>
                        </div>
                      </div>
                  </div>
                    ))}
                </Slider>
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
  }
}
