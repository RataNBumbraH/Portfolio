import { experiences } from "../data/Data";

function Experience() {
  return (
    <main className="section experience-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="section-title">My Experience</h1>
          <p className="section-subtitle">My professional journey so far</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-dot-col">
                <div className="exp-dot"></div>
                {i < experiences.length - 1 && <div className="exp-line"></div>}
              </div>
              <div className="card exp-card">
                <div className="exp-header">
                  <span className="exp-period">{exp.period}</span>
                  <div className="exp-tags">
                    {exp.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company gradient-text">{exp.company}</p>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Experience;