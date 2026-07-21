import Navbar from "../components/Navbar/Navbar";
import "./Projects.css";
import Footer from "../components/Footer/Footer";

function Projects() {
  return (
    <>
      <Navbar />

      <section className="projects">

        <h1 className="project-title">
          My <span>Projects</span>
        </h1>

        <div className="project-container">
          <div className="project-card">

            <h2>Small Portfolio-card</h2>

            <p>
              I buid my first small react project with just one page of my portfolio-card.
              It consits of my profile photo,some information about me and diaplay the skills I have.
              From this project I learn the basics of REACT,HTML AND CSS.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>React.js</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/divyesh-ahir/Portfolio-card">GitHub</a>
              <a href="https://portfolio-card-opal.vercel.app/">Live Demo</a>
            </div>

          </div>

          <div className="project-card">

            <h2>Profile Login System</h2>

            <p>
              I buid the small profile login system with the help of react concepts.
              Where user can signup for new login and login for already exist user.
              The users data is stores on local storage.This project is only for the frontend and for user experience.
              And it was build for the responsive UI knowledge.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>React.js</span>
              <span>JS</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/divyesh-ahir/Login-pag">GitHub</a>
              <a href="https://login-page-hazel-five.vercel.app/">Live Demo</a>
            </div>

          </div>
      <div className="project-card">

            <h2>Tiny Learners</h2>

            <p>
              An educational web app designed for Nursery, LKG, and UKG kids with interactive learning, audio, rhymes, quizzes, and a responsive UI.
              Building this project helped me strengthen my React fundamentals and frontend development skills.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>React.js</span>
              <span>JS</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/divyesh-ahir/TinyLearners">GitHub</a>
              <a href="https://tiny-learners-nine.vercel.app/">Live Demo</a>
            </div>

          </div>

          

          

        </div>

      </section>
      <Footer />
    </>
  );
}

export default Projects;
