import Navbar from "../components/Navbar/Navbar";
import "./Skills.css";
import Footer from "../components/Footer/Footer";

function Skills() {
  return (
    <>
      <Navbar />

      <section className="skills-section">

        <h1 className="skills-title">
          My <span>Skills</span>
        </h1>

        <div className="skills-container">

          {/* Technical Skills */}

          <div className="skills-column">

            <h2>Technical Skills</h2>

            <div className="skill">

              <div className="skill-info">
                <span>HTML/CSS</span>
                <span>95%</span>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "95%" }}></div>
              </div>

            </div>

            <div className="skill">

              <div className="skill-info">
                <span>JavaScript</span>
                <span>70%</span>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }}></div>
              </div>

            </div>

            <div className="skill">

              <div className="skill-info">
                <span>React</span>
                <span>55%</span>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "55%" }}></div>
              </div>

            </div>

            <div className="skill">

              <div className="skill-info">
                <span>Node.js</span>
                <span>40%</span>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "40%" }}></div>
              </div>

            </div>

          </div>

          {/* Professional Skills */}

          <div className="skills-column">

            <h2>Professional Skills</h2>

            <div className="skill">

              <div className="skill-info">
                <span>Communication</span>
                <span>60%</span>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "60%" }}></div>
              </div>

            </div>

            <div className="skill">

              <div className="skill-info">
                <span>Teamwork</span>
                <span>85%</span>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "85%" }}></div>
              </div>

            </div>

            <div className="skill">

              <div className="skill-info">
                <span>Problem Solving</span>
                <span>95%</span>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "95%" }}></div>
              </div>

            </div>

            <div className="skill">

              <div className="skill-info">
                <span>Creativity</span>
                <span>75%</span>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>

            </div>

          </div>

        </div>

      </section>
      <Footer />
    </>
  );
}

export default Skills;