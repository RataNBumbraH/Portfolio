import { useState } from "react";
import { skillCategories } from "../data/Data";
const categories = Object.keys(skillCategories);

function Skills() {
  const [active, setActive] = useState("Frontend");

  const otherCategories = categories.filter((c) => c !== "Frontend");

  return (
    <main className="section skills-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="section-title">My Skills</h1>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skill-tab ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="card active-skills-card">
          {skillCategories[active].map((skill) => (
            <div className="active-skill-row" key={skill.name}>
              <span className="skill-icon-lg">{skill.icon}</span>
              <span className="active-skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="other-skills-grid">
          {otherCategories.map((cat) => (
            <div className="card other-skill-card" key={cat}>
              <h3>{cat}</h3>
              {skillCategories[cat].map((skill) => (
                <div className="other-skill-row" key={skill.name}>
                  <div className="other-skill-top">
                    <span className="skill-icon-sm">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Skills;