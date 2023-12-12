// App.js

import React from "react";
import html2pdf from "html2pdf.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App = () => {

  const [downloadClicked, setDownloadClicked] = React.useState(false);

  const handleDownload = () => { //Will let the user download the HTML in PDF form.
    const element = document.getElementById("resume-container");

    if (element) {
      html2pdf(element, {
        filename: "Nand's Resume.pdf", // Specify the desired filename
      });
      setDownloadClicked(true);
    }
  };

  const handleContactMe = () => { //Will let the viewer contact me on my Email Address
    const subject = encodeURIComponent("Contact Me");
    const body = encodeURIComponent("Hello Nand Patel, I would like to get in touch with you.\nCompany Name: \nPosition: ");

    window.location.href = `mailto:patelnand13204@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="resume-container" id="resume-container">
      <header className="header">
        <div className="header-content">
          <h1>Nand Patel</h1>
          <p>Full Stack Software Developer / Engineer</p>
        </div>
      </header>

      <section className="contact">
        <h2>Contact Information</h2>
        <ul className="contact-info">
          <li>631 Eastern Ave, Apt#10, Lynn, MA, 01902</li>
          <li>(603) 866-4526</li>
          <li>patelnand13204@gmail.com</li>
          <li> <a target="_blank" href="https://www.linkedin.com/in/nand-patel-b88185271/"> Connect Me On linkedin </a> </li>
        </ul>
        <button className="contact_button" onClick={handleContactMe}>
          Contact Me
        </button>
      </section>

      <section className="education">
        <h2>EDUCATION</h2>
        <ul>
          <li>Salem State University, Salem MA — Bachelor’s</li>
          <li>September 2021 - December 2024</li>
          <li>Major: Computer Science</li>
        </ul>
      </section>

      <section className="experience">
        <h2>EXPERIENCE</h2>
        <ul>
          <li>Richdale Convenience, Marblehead, MA — Manager</li>
          <li>2020 - Present</li>
          <li>
            Side Hustle to support my college tuition. Really helped me to
            improve my human interaction skills and taught me a way to
            efficiently deal with money.
          </li>
        </ul>
      </section>

      <section className="projects">
        <h2>PROJECTS</h2>
        <ul>
          <li>
            <b>Salem State University Social Media App</b> — HTML/JavaScript/REACT/MongoDB/NODE
            <ul>
              <li>Developed a comprehensive web application enabling students to share social media posts.</li>
              <li>Integrated multiple APIs, created schemas, and implemented MongoDB.</li>
              <li>Followed Agile methodology during development.</li>
              <li><a href="https://ssu-social-app.onrender.com/" target="_blank">Live Demo</a></li>
            </ul>
          </li>
          <li>
            <b>MBTA Accessibility Tracker</b> — HTML/JavaScript/REACT/Node/CSS
            <ul>
              <li>Designed a web application that retrieves and displays MBTA stop accessibility information.</li>
              <li>Implemented a forum for users to rate stops and leave comments.</li>
              <li>Developed a backend database and RESTful API.</li>
              <li><a href="https://github.com/Nand2004/MBTA-Station-App" target="_blank">GitHub Repository</a></li>
            </ul>
          </li>
          <li>
            <b>Portfolio</b> — React
            <ul>
              <li>Created a portfolio website showcasing comprehensive information for prospective employers.</li>
              <li>Provides an interactive platform for employers to get in touch.</li>
              <li><a href="https://github.com/Nand2004/resume" target="_blank">GitHub Repository</a></li>
            </ul>
          </li>
          <li>
            <b>TicTacToe</b> — Java
            <ul>
              <li>Developed a Tic-Tac-Toe simulator with various difficulty settings.</li>
              <li>Offers the option to play against a human or computer opponent.</li>
              <li><a href="https://github.com/Nand2004/TicTacToe" target="_blank">GitHub Repository</a></li>
            </ul>
          </li>
          <li>
            <b>Calculator</b> — Java
            <ul>
              <li>Designed a versatile calculator app for basic to advanced mathematical operations.</li>
              <li>Supports arithmetic, algebraic calculations, and trigonometric functions.</li>
              <li><a href="https://github.com/Nand2004/Calculator" target="_blank">GitHub Repository</a></li>
            </ul>
          </li>
          <li>
            <b>Various Small Projects</b> — Java / JS / Scripting / DSA etc.
            <ul>
              <li>Dedicated hundreds of hours to enhance proficiency in programming languages and data structures.</li>
              <li>Utilized FreeCodeCamp for learning new languages and tackled LeetCode problems.</li>
            </ul>
          </li>
        </ul>
      </section>


      <section className="skills">
        <h2>SKILLS</h2>
        <ul>
          <li>Java</li>
          <li>JavaScript / React</li>
          <li>HTML / CSS</li>
          <li>Node / PHP</li>
          <li>MongoDb / SQL</li>
          <li>Restful API</li>
          <li>Data Science</li>
          <li>AI / Machine Learning</li>
          <li>Software Development</li>
          <li>CI-CD Process</li>
          <li>Github</li>
        </ul>
      </section>

      <section className="awards">
        <h2>AWARDS</h2>
        <ul>
          <li>3.8 Cumulative GPA</li>
          <li>Salem State Dean’s List</li>
        </ul>
      </section>
      <section className="languages">
        <h2>LANGUAGES</h2>
        <p>English, Hindi, Gujarati</p>
      </section>

      <footer>
        <p>
          GITHUB LINK:{" "}
          <a href="https://github.com/Nand2004" target="_blank">
            https://github.com/Nand2004
          </a>
        </p>
      </footer>


      <button className="download-button" onClick={handleDownload} download="resume.pdf">
        <i className="fas fa-download"></i> Download PDF
      </button>


    </div>
  );
};

export default App;
