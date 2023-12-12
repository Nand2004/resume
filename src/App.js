// App.js

import React from "react";
import "./App.css";

const App = () => {
 
  const handleContactMe = () => { //Will let the viewer contact me on my Email Address
    const subject = encodeURIComponent("Contact Me");
    const body = encodeURIComponent("Hello Nand Patel, I would like to get in touch with you.\nCompany Name: \nPosition: ");

    window.location.href = `mailto:patelnand13204@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="resume-container">
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
            <b>Salem State University Social Media App</b> —
            HTML/JavaScript/REACT/MongoDB/NODE
          </li>
          <ul>
            <li>
              The SSU social media app is a large web application that lets
              students share social media posts. This is one of the most
              ambitious projects which me and my friends worked on.
              <ul>
                <li>
                  Created schemas and integrated multiple API's.
                </li>
                <li>
                  Implemented a MongoDB.
                </li>
                <li>
                  Developed in an Agile format.
                </li>
              </ul>
              <li>
                <a href="https://ssu-social-app.onrender.com/" target="_blank">
                  Check out the Social Media App on Live Server.
                </a>
              </li>
            </li>
          </ul>
          <li>
            <b>MBTA Accessibility Tracker</b> — HTML/JavaScript/REACT/Node/CSS
          </li>
          <ul>
            <li>
              Created a web application retrieving information from the MBTA’s
              API and displaying which stops are handicap accessible.
              <ul>
                <li>
                  Created a forum where users can rate a stop’s accessibility,
                  give ratings, and leave comments.
                </li>
                <li>Developed a backend database and RESTful API.</li>
              </ul>
              <li>
                <a
                  href="https://github.com/Nand2004/MBTA-Station-App"
                  target="_blank"
                >
                  {" "}
                  Check out the MBTA Accessibility App on GitHub.
                </a>
              </li>
            </li>
          </ul>
          <li>
            <b>Portfolio</b> — React
          </li>
          <ul>
            <li>
              In today's highly competitive job market, it is essential for an
              employee to distinguish themselves. To stand out and sharpen my
              React skills, I designed a 3D portfolio website that not only
              showcases my comprehensive information for prospective employers
              but also provides them with an opportunity to get in touch with
              me.
            </li>
            <li>
              <a
                href="https://github.com/Nand2004/Nand-Patel-Resume-Website"
                target="_blank"
              >
                {" "}
                Check out the online resume on Github
              </a>
            </li>
          </ul>
          <li>
            <b>TicTacToe</b> — Java
          </li>
          <ul>
            <li>
              Developed a Tic-Tac-Toe simulator featuring a range of difficulty
              settings, offering users the option to play against either a human
              opponent or a computer.
            </li>
            <li>
              <a href="https://github.com/Nand2004/TicTacToe" target="_blank">
                {" "}
                Check out the TicTacToe on Github
              </a>
            </li>
          </ul>
          <li>
            <b>Calculator</b> — Java
          </li>
          <ul>
            <li>
              This Calculator App is a versatile tool that provides a
              user-friendly interface for performing a wide range of
              mathematical operations. Whether you need to execute basic
              arithmetic, advanced algebraic calculations, or trigonometric
              functions, this app has you covered.
            </li>
            <li>
              <a href="https://github.com/Nand2004/Calculator" target="_blank">
                {" "}
                Check out the Calculator on Github
              </a>
            </li>
          </ul>
          <li>
            <b>Various Small Projects</b> — Java / JS / Scripting / DSA etc..
          </li>
          <li>
            Dedicated hundreds of hours to enhancing my proficiency in various
            programming languages and deepening my understanding of language
            fundamentals, as well as data structures and algorithms. To
            practice, in addition to my coursework, I utilized FreeCodeCamp to
            learn new languages and tackled various LeetCode problems to enhance
            my knowledge of data structures and algorithms.
          </li>
        </ul>
      </section>

      <section className="skills">
        <h2>SKILLS</h2>
        <ul>
          <li>Java</li>
          <li>JavaScript / React</li>
          <li>Node / PHP</li>
          <li>MongoDb / SQL</li>
          <li>Restful API</li>
          <li>HTML / CSS</li>
          <li>Data Science</li>
          <li>AI / Machine Learning</li>
          <li>Github</li>
          <li>Software Development</li>
          <li>CI-CD Process</li>
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
    </div>
  );
};

export default App;
