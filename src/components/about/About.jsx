import "./about.css";
import Award from "../../img/award.png";
import Coding from "../../img/coding.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Coding}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for
        customers with various business objectives. Judicious and creative when crafting effective websites, apps
        and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical
        problem solver with calm and focused demeanor.
        </p>
      </div>
    </div>
  );
};

export default About;
