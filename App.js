// Import necessary React modules
import React from 'react';
import './App.css';

// Header Component
const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

// Contact Info Component
const ContactInfo = () => {
  return (
    <section className="contact-info">
      <h2>Contact Information</h2>
      <p>Phone: 7729952923</p>
      <p>Email: <a href="mailto:shaikrahamath106@gmail.com">shaikrahamath106@gmail.com</a></p>
    </section>
  );
};

// Social Links Component
const SocialLinks = () => {
  return (
    <section className="social-links">
      <h2>Find Me Online</h2>
      <a href="https://github.com/Rahamathshaik10" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/rahamath-shaik-563319282" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </section>
  );
};

// About Me Component
const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <h2>About Me</h2>
      <p>Hi! I am Rahamath Shaik, a skilled and passionate web designer specializing in visually appealing and user-friendly websites.</p>
      <p>I have hands-on experience in website design, frontend development, and many more technologies.</p>
    </section>
  );
};

// Skills Component
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Frontend Design</li>
      </ul>
    </section>
  );
};

// Education Component
const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <h3>Schooling</h3>
      <p>Servite School - Grade: 9.5</p>

      <h3>Intermediate</h3>
      <p>Sri Harshini Junior College - Grade: 9.7</p>

      <h3>Graduation</h3>
      <p>B.Tech in CSE (AI & Data Science) - KIET Women’s Engineering College - Grade: 8.0</p>
    </section>
  );
};

// App Component
const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Education />
        <ContactInfo />
        <SocialLinks />
      </main>
    </div>
  );
};

export default App;
