import Image from "next/image";
import Link from "next/link";

const items = [

  {
    id: 2,
    name: "React Native",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    value: "83",
  },
  {
    id: 3,
    name: "Next Js",
    image: "https://img.icons8.com/fluent-systems-filled/512w/FFFFFF/nextjs.png",
    value: "93",
  },

  {
    id: 5,
    name: "Node JS",
    image: "https://i.ibb.co/bV52VKL/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-misc.png",
    value: "80",
  },
  {
    id: 6,
    name: "MongoDB",
    image: "https://i.ibb.co/DDWTZ0B7/8fcd336e-52a2-4c26-8975-6d4f44846c4e-removalai-preview.png",
    value: "86",
  },
  {
    id: 7,
    name: "Supabsase",
    image: "https://i.ibb.co/JRd1nxM1/supabase-logo-vector-comseeklogo435677-removebg-preview.png",
    value: "62",
  },
  {
    id: 8,
    name: "Firebase",
    image: "https://i.ibb.co/LXyp0xnd/png-clipart-firebase-cloud-messaging-google-developers-software-development-kit-google-angle-triangl.png",
    value: "80",
  },
    {
    id: 4,
    name: "TypeScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    value: "84",
  },
    {
    id: 1,
    name: "Figma",
    image: "assets/images/skills/skill1.png",
    value: "95",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let’s Explore Popular <span>Skills &amp; Experience</span>
                  </h2>
                  <p>
                    My skills cover frontend and backend development, enabling
                    me to build efficient architectures, improve performance,
                    and create solutions guided by clean code and consistent
                    problem-solving.
                  </p>
                </div>
                {/* <Link legacyBehavior href="/about"> */}
                  <a className="theme-btn" href="mailto:nomansanaullah6677@gmail.com">
                    Hire Me <i className="far fa-angle-right" />
                  </a>
                {/* </Link> */}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {items.map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={item.image} alt="Skill" width={100} height={100} />
                        <h5>{item.name}</h5>
                        <span className="percent">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
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
    </section>
  );
};
export default Skill;

export const Skill2 = () => {
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> professional skill of me
                </span>
                <h2>professional skill</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {items.map(
                  (item) =>
                    item.id <= 6 && (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image} alt="Skill" />
                            <span className="percent">{item.value}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                )}
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
    </section>
  );
};
