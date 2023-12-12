// Skills.js
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_URL } from "../common/constants";

const Skills = () => {
  const [users, setUsers] = useState({});
  console.log(API_URL, "testing url");

  useEffect(() => {
    Axios.post(`${API_URL}user/getUserDetailsByPK`, {
      id: "0fb888b5-a0f0-4011-a8b8-ff64aaa43be7",
    })
      .then((response) => setUsers(response))
      .catch((err) => setUsers(err));
    //   eslint-disable-next-line
  }, [JSON.stringify(users)]);

  console.log(users, "testing results");

  return (
    <section id="skills" className="container mt-4">
      <h2 className="text-primary">Skills</h2>
      {/* Add your skills content here */}
      <div className="row">
        <div className="col-md-6">
          <h3>Frontend Development:</h3>
          <ul className="list-unstyled">
            <li>HTML5, CSS3, JavaScript</li>
            <li>Responsive Web Design</li>
            <li>Frontend Frameworks: React, Vue.js</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Backend Development:</h3>
          <ul className="list-unstyled">
            <li>Node.js, Express</li>
            <li>Python, Django</li>
            <li>RESTful API Development</li>
            <li>Database Management (MySQL, MongoDB)</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Development Tools:</h3>
          <ul className="list-unstyled">
            <li>Git, GitHub</li>
            <li>VS Code, Sublime Text</li>
            <li>Webpack, Babel</li>
            <li>Command Line</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Other Skills:</h3>
          <ul className="list-unstyled">
            <li>Web Accessibility (WCAG)</li>
            <li>Cross-Browser Compatibility</li>
            <li>Performance Optimization</li>
            <li>Test-Driven Development (TDD)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
