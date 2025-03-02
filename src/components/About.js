import { useState } from 'react';
import '../stylesheets/about.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('story');

    const aboutData = {
        story: {
            title: "My Little Journey",
            content: "Hello..! I'm a passionate Frontend Developer with a creative mindset and a determination to deliver engaging user experiences. My journey in web development started with a curiosity about how websites work, and it has evolved into a full-fledged career where I bring ideas to life through code."
        },
        journey: {
            title: "Career Path",
            content: "With 2.5 years of hands-on experience in frontend development, I've had the opportunity to work on the projects that have sharpened my skills in React, JavaScript, Flutter and modern web technologies. Each project has been a stepping stone in my continuous learning journey."
        },
        interests: {
            title: "Beyond Coding",
            content: "When I'm not coding, you'll find me exploring new web technologies, contributing to open-source projects, or sharing my knowledge through tech blogs. I believe in the power of community and continuous learning in the ever-evolving tech landscape."
        }
    };

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="profile-section">
                    <div className="profile-card">
                        <div className="profile-image-container">
                            <img src={process.env.PUBLIC_URL + '/images/self_image.png'} alt="Profile" className="profile-image" />
                        </div>
                        <div className="profile-info">
                        
                            <p className="title">Frontend Developer</p>
                            <div className="quick-info">
                                <span>📍 Chennai, TamilNadu</span>
                                <span> 💼 Available for opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <div className="tab-navigation">
                        {Object.keys(aboutData).map((tab) => (
                            <button
                                key={tab}
                                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {aboutData[tab].title}
                            </button>
                        ))}
                    </div>

                    <div className="tab-content">
                        <h2>{aboutData[activeTab].title}</h2>
                        <p>{aboutData[activeTab].content}</p>
                    </div>

                    <div className="highlight-cards">
                        <div className="highlight-card">
                            <span className="highlight-icon">🎯</span>
                            <h3>Goal-Oriented</h3>
                            <p>Focused on delivering high-quality solutions</p>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-icon">💡</span>
                            <h3>Creative Problem Solver</h3>
                            <p>Finding innovative solutions to complex challenges</p>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-icon">🤝</span>
                            <h3>Collaborator</h3>
                            <p>Drive project success through effective communication and mutual support</p>
                        </div>
                           <div className="highlight-card">
                            <span className="highlight-icon">🤝</span>
                            <h3>Facilitator</h3>
                            <p>Experienced facilitator skilled in guiding teams toward shared objectives and promoting a culture of collaboration and innovation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;