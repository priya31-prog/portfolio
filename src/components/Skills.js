
import '../stylesheets/skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "HTML5", level: 85},
        { name: "CSS3", level: 80 },
        { name: "React", level: 75 },
      ]
    },
   
    {
      category: "Programming languages",
      technologies: [
        { name: "Python", level: 80 },
        { name: "Javascript", level: 80 },
        { name: "Dart", level: 75 },
        { name: "MySQL", level: 75 }
      
      
      ]
    },
    {
      category: "Frameworks",
      technologies: [
        { name: "Flutter Mobx", level: 90 },
        { name: "Django", level: 80 },
        { name: "Django REST Framework", level: 80 },
  
      
      ]
    },
     {
      category: "Platform & Services",
      technologies: [
        { name: "Git", level: 85 }, 
        { name: "Firebase", level: 90 },
        { name: "MasterCraft", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "Windows", level: 70 },
        { name: "NPCI", level: 70 },
        { name: "Android Studio", level: 70 },
        { name: "VS code", level: 90 },
        { name: "MySQL workbench", level: 90 }
      ]
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <div className="skills-grid">
              { skillGroup.technologies.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  {skillGroup.category !== "Platform & Services" &&
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;