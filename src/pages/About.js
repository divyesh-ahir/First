import Navbar from "../components/Navbar/Navbar";
import profile from "../assets/images/photo.jpg";
import "./About.css";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="about">

        <div className="about-image">
          <img src={profile} alt="Profile" />
        </div>

        <div className="about-content">

          <h2>About Me</h2>

          <h3>Computer Engineering Student</h3>

          <p>
            Hello! I'm <strong>Divyesh</strong>, a passionate Computer
            Engineering student with an interest in Web Development and UI/UX
            Design.Currently I am pursuing my 7<sup>th</sup>sem in B.E. of CE branch under GTU at V.V.P. Engineering College,Rajkot.</p><p>I like to work more on frontend more than backend. I enjoy creating responsive, user-friendly websites using
            React, HTML, CSS, JavaScript, and Bootstrap.</p>
          

          <p>
            I love learning new technologies and continuously improving my
            programming and problem-solving skills.
          </p>
       
          <a
            href="/230470107037.pdf"
            download="Divyesh_Resume.pdf"
            className="about-btn"
          >
            Download Resume
          </a>

        </div>

      </section>
      <Footer />
    </>
  );
}

export default About;
