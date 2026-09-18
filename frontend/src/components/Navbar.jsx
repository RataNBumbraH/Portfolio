import { NavLink } from "react-router-dom";
import { useState } from "react";
import Resume from "../assets/Ratan_Singh_Resume.pdf";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner page-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          Ratan<span className="dot">.</span>
        </NavLink>

        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={Resume}
          download
          className="btn btn-primary navbar-cv"
        >
          Download CV ↓
        </a>

        <button
          className={`navbar-toggle ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;