import React from "react";
import "./Hero.css";
import profile from "../../assets/images/profile.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h3>Hello, It's Me</h3>

        <h1>Dangar Divyesh A.</h1>

        <h2>
          And I'm a <span>Full Stack Developer.</span>
        </h2>

        <p>
          I am a Computer Engineering student passionate about web development.
          I love creating beautiful, responsive, and user-friendly websites.
        </p>

        <div className="social-icons">

          <a href="https://www.facebook.com/share/1EPZMdFjdd/"><FaFacebookF /></a>

          <a href="https://www.instagram.com/divyesh_ahir_303?igsh=MXBnaDduM3htZXQ="><FaInstagram /></a>

          <a href="https://www.linkedin.com/in/dangar-divyesh-3263583a5?utm_source=share_via&utm_content=profile&utm_medium=member_android"><FaLinkedinIn /></a>

          <a href="#"><FaGithub /></a>

        </div>

        <div className="hero-buttons">

           <a
            href="/resume.pdf"
            download="Divyesh_Resume.pdf"
            className="btn1"
          >
            Download CV
          </a>

      

        </div>

      </div>

      <div className="hero-right">

        <img src={profile} alt="profile"/>

      </div>

    </section>
  );
}

export default Hero;