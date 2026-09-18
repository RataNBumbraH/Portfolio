import Resume from "../assets/Ratan_Singh_Resume.pdf";
import ProfileImage from "../assets/ProfileImage.jpg";
import {projects,getTotalTechCount,experiences} from "../data/Data.js";

function About() {
  return (
    <main className="section about-page">
      <div className="page-container">
        <div className="about-top">
          <div className="about-top-text">
            <p className="eyebrow">About Me</p>
            <h1 className="section-title">
              Passionate{" "}
              <span className="gradient-text">MERN Stack Developer</span> &amp;
              DevOps Enthusiast
            </h1>
            <p className="about-desc">
              I build scalable web applications and cloud solutions that help
              businesses grow and work smarter. I love turning ideas into
              real-world products.
            </p>

            <div className="about-info-grid">
              <div className="card about-info-card">
                <span className="info-label">Name</span>
                <span className="info-value">Ratan Singh</span>
              </div>
              <div className="card about-info-card">
                <span className="info-label">Email</span>
                <span className="info-value">ratansahib41@gmail.com</span>
              </div>
            </div>

            <a href={Resume} download className="btn btn-primary">
              Download CV ↓
            </a>
          </div>

          <div className="about-top-image">
            <div className="about-image-box">
              <div className="hero-image-glow"></div>
              <div className="hero-avatar"><img src={ProfileImage} alt="Profile" /></div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="card stat-box">
            <h3 className="gradient-text">Fresher</h3>
            <span>Years Experience</span>
          </div>
          <div className="card stat-box">
            <h3 className="gradient-text">{projects.length}</h3>
            <span>Projects Completed</span>
          </div>
          <div className="card stat-box">
            <h3 className="gradient-text">{getTotalTechCount()}</h3>
            <span>Technologies</span>
          </div>
          <div className="card stat-box">
            <h3 className="gradient-text">100%</h3>
            <span>Dedication</span>
          </div>
        </div>

        <div className="card journey-card">
          <h2 className="journey-title">My Journey</h2>
          <p className="journey-intro">
            My tech journey is built on a strong academic foundation in computer
            applications and applied AI research. As a versatile MERN stack and
            AI/LLM developer, I combine full-stack web engineering with modern
            machine learning architectures. Coupled with a strong passion for
            DevOps and cloud technologies, I focus on building, scaling, and
            optimizing intelligent, real-world solutions.
          </p>

          <div className="timeline">
            {experiences.map((item, index) => (
              <div className="timeline-item" key={index}>
                <span className="timeline-dot"></span>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h4>{item.role}</h4>
                  <p className="timeline-company" style={{ fontSize: "0.85rem", color: "var(--text-secondary, #94a3b8)", marginTop: "4px" }}>
                    {item.company}
                  </p>
                  <p className="timeline-desc" style={{ fontSize: "0.9rem", marginTop: "8px", color: "var(--text-main, #cbd5e1)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
