import Navbar from "../components/Navbar/Navbar";
import "./Contact.css";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import Footer from "../components/Footer/Footer";



import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
    const { email, phone, location } = useContext(PortfolioContext);
  return (
    <>
      <Navbar />

      <section className="contact">

        <h1 className="contact-title">
          Get In <span>Touch</span>
        </h1>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-left">

            <h2>Contact Information</h2>

            <p>
              Feel free to reach out to me for any questions or opportunities.
              I'm always open to discussing new projects, creative ideas or
              internship opportunities.
            </p>

            <div className="contact-info">

              <div className="info-box">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4>Location</h4>
                  <span>{location}</span>
                </div>
              </div>

              <div className="info-box">
                <div className="icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h4>Email</h4>
                  <span>{email}</span>
                </div>
              </div>

              <div className="info-box">
                <div className="icon">
                  <FaPhone />
                </div>

                <div>
                  <h4>Phone</h4>
                  <span>{phone}</span>
                </div>
              </div>

            </div>

            <h3 className="follow-title">Follow Me</h3>

            <div className="social-icons">

              <a href="#">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/dangar-divyesh-3263583a5?utm_source=share_via&utm_content=profile&utm_medium=member_android">
                <FaLinkedinIn />
              </a>

              <a href="https://www.instagram.com/divyesh_ahir_303?igsh=MXBnaDduM3htZXQ="><FaInstagram /></a>

            </div>

          </div>

          {/* Right Side */}

          <div className="contact-right">

            <h2>Send Me a Message</h2>

            <form>

              <div className="row">

                <div className="input-group">
                  <label>Your Name</label>
                  <input type="text" />
                </div>

                <div className="input-group">
                  <label>Your Email</label>
                  <input type="email" />
                </div>

              </div>

              <div className="input-group">
                <label>Subject</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea rows="6"></textarea>
              </div>

              <button type="submit">
                Send Message
                <FaPaperPlane />
              </button>

            </form>

          </div>

        </div>

      </section>
      <Footer />
    
    </>
  );
}

export default Contact;