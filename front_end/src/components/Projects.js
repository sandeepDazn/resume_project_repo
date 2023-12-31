// Projects.js
import React,{useEffect,useState} from 'react';
import { API_URL, } from '../common/constants.js';
import Axios from 'axios';

const Projects = () => {

  const [data, setData] = useState({});
  
  console.log(API_URL, "testing url");

  useEffect(() => {
    Axios.post(`${API_URL}Projects/getProjectByUserPk`, {
      id: "0fb888b5-a0f0-4011-a8b8-ff64aaa43be7",
    })
      .then((response) => setData(response))
      .catch((err) => setData(err));
    //   eslint-disable-next-line
  }, [JSON.stringify(data)]);

  console.log(data, "testing results");

  return (
    <section id="projects" className="container mt-4">
      <h2 className="text-primary">Projects</h2>
      {/* Add your projects content here */}

      <div className="card-deck">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Project Title 1</h3>
          <p className="card-text">Briefly describe the project, including its purpose, features, and technologies used.</p>
          <p className="card-text"><small className="text-muted">Role: Specify your role in the project (e.g., Full Stack Developer, Frontend Developer)</small></p>
          <p className="card-text"><small className="text-muted">Technologies: List key technologies used in the project.</small></p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Project Title 2</h3>
          <p className="card-text">Briefly describe the project, including its purpose, features, and technologies used.</p>
          <p className="card-text"><small className="text-muted">Role: Specify your role in the project (e.g., Full Stack Developer, Frontend Developer)</small></p>
          <p className="card-text"><small className="text-muted">Technologies: List key technologies used in the project.</small></p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Project Title 3</h3>
          <p className="card-text">Briefly describe the project, including its purpose, features, and technologies used.</p>
          <p className="card-text"><small className="text-muted">Role: Specify your role in the project (e.g., Full Stack Developer, Frontend Developer)</small></p>
          <p className="card-text"><small className="text-muted">Technologies: List key technologies used in the project.</small></p>
        </div>
      </div>


      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Project Title 4</h3>
          <p className="card-text">Briefly describe the project, including its purpose, features, and technologies used.</p>
          <p className="card-text"><small className="text-muted">Role: Specify your role in the project (e.g., Full Stack Developer, Frontend Developer)</small></p>
          <p className="card-text"><small className="text-muted">Technologies: List key technologies used in the project.</small></p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Project Title 5</h3>
          <p className="card-text">Briefly describe the project, including its purpose, features, and technologies used.</p>
          <p className="card-text"><small className="text-muted">Role: Specify your role in the project (e.g., Full Stack Developer, Frontend Developer)</small></p>
          <p className="card-text"><small className="text-muted">Technologies: List key technologies used in the project.</small></p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
