import { useState } from "react";
import { projects } from "../data/Data.js"; 

const filters = ["All", "AI & ML", "AI & DevOps", "Web Apps"];

function Projects() {
  const [active, setActive] = useState("All");

  const filteredProjects = active === "All" 
    ? projects 
    : projects.filter((project) => project.category === active);

  return (
    <main className="section projects-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">Some of the projects I've worked on</p>
        </div>

        <div className="skills-tabs">
          {filters.map((f) => (
            <button
              key={f}
              className={`skill-tab ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

          <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="card project-card" key={index}>
              <div
                className="project-thumb"
                style={{ background: project.gradient }}
              >
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} 
                  />
                )}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="fetch-status">No projects found in this category.</p>
        )}
      </div>
    </main>
  );
}

export default Projects;