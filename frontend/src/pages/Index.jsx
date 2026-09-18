import { Link } from "react-router-dom";
import { skillCategories, projects } from "../data/Data";
import ProfileImage from "../assets/ProfileImage.jpg";

function Home() {
  const frontendSkills = skillCategories.Frontend;
  const featured = projects.slice(0, 4);

  return (
    <main>
      <section className="hero section">
        <div className="page-container hero-inner">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Ratan Singh</h1>
            <h2 className="hero-role gradient-text">
              BCA (AI & ML) Student<br />&amp; Full-Stack / AI Developer <br/> DevOps Enthusiast
            </h2>
            <p className="hero-desc">
              I build full-stack and applied-AI systems end-to-end — from MERN apps
              and FastAPI microservices to RAG pipelines with containerized workflows 
              and automated CI/CD deployments.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View Projects →
              </Link>
            </div>
            <div className="hero-connect">
              <span>Let's connect:</span>
              <div className="hero-icons">
                <a href="https://github.com/RataNBumbraH" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55v-2.13c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18.93-.26 1.92-.39 2.91-.39.99 0 1.98.13 2.91.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.75.81 1.2 1.83 1.2 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.65.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
                </a>
                <a href="https://linkedin.com/in/ratan-singh-chesslover157" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>
                </a>
                <a href="mailto:ratansahib41@gmail.com" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm19 2.4-8.5 6.3a1 1 0 0 1-1.18 0L3 6.4V18h18V6.4zM3.51 5l8.49 6.3L20.49 5H3.51z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image">
              <div className="hero-image-glow"></div>
              <div className="hero-avatar">
                <img src={ProfileImage} alt="Ratan Singh" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-strip section">
        <div className="page-container">
          <div className="card about-strip-card">
            <div className="about-strip-text">
              <p className="eyebrow">About me</p>
              <p>
                BCA (AI & ML) student focused on building full-stack applications, 
                FastAPI microservices, RAG architectures, and containerized deployments with Docker.
              </p>
            </div>
            <div className="about-strip-stats">
              <div className="stat-box">
                <h3 className="gradient-text">3+</h3>
                <span>Core AI Projects</span>
              </div>
              <div className="stat-box">
                <h3 className="gradient-text">MERN</h3>
                <span>&amp; FastAPI Stack</span>
              </div>
              <div className="stat-box">
                <h3 className="gradient-text">Docker</h3>
                <span>&amp; DevOps Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-strip section">
        <div className="page-container">
          <div className="skills-strip-header">
            <p className="eyebrow">Frontend Skills</p>
            <Link to="/skills" className="view-all-link">View All →</Link>
          </div>
          <div className="skills-strip-grid">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className="card skill-mini-card">
                <div className="skill-mini-top">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-projects section">
        <div className="page-container">
          <div className="skills-strip-header">
            <p className="eyebrow">Featured Projects</p>
            <Link to="/projects" className="view-all-link">View All →</Link>
          </div>
          <div className="featured-grid">
            {featured.map((project) => (
              <div className="card project-mini-card" key={project.title} >
                <div
                  className="project-mini-thumb"
                  style={{ background: project.gradient }}
                >
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github || "https://github.com/RataNBumbraH"} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;