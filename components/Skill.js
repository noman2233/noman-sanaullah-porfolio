import Image from "next/image";
import Link from "next/link";

const items = [

  {
    id: 2,
    name: "React Native",
    image: "https://i.ibb.co/B5SN5VFW/download-2-removebg-preview.png",
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
    image: "data:image/png;base64,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",
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
