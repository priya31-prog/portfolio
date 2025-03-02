import {useState} from 'react';
import '../stylesheets/projects.css';
import './Achievements';
import Achivements from './Achievements';
import ListOfWorks from './ListOfWorks';

const Projects = () => {

  const [showInfo, setShowInfo] = useState(false);
  const projects = [
    {
      title: "Mobile Application",
      description: "Developed a platform independent mobile application for one of the world's largest bank State Bank of India. Implemented features like transaction filtering, Payments, Push Notification and NPCI Intergration.",
      technologies: ["Flutter", "Dart", "Flutter Mobx", "Firebase", "GitLab","MasterCraft"],
      companyName: "Tata Consultancy and Services , Chennai",
      Duration: "Aug 2022 - Present"
    },
  
  ];

  

  
 
  const handleOnClick = () => {
    setShowInfo(!showInfo);
    console.log("Button clicked");
  }

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {!showInfo &&
              <>
            <div className="tech-stack">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className='project-links'>
                <span onClick={handleOnClick}>{'To Know More click me...'}</span>

              </div>
              </>
        }
            {showInfo &&
              <div className='keypoints'>
                <br></br>
                <ListOfWorks/>
                  
                  
                 
              
                <div className='project-links'>
                <span onClick={handleOnClick}>Close</span>

              </div>
                </div>
            }

            
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
            
            </div>

           <Achivements/>
            

            
            

    
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;