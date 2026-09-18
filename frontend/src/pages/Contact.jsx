import  { useState } from "react";
import { submitContact } from "../Api";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); 
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    try {
      setStatus("loading");
      const res = await submitContact(form);
      if (res.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(res.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error",err);
      setErrorMsg("Server error. Please try again later.");
    }
  };

  return (
    <main className="section contact-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="card contact-form-card">
            {status === "success" && (
              <div className="success-banner">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="error-banner">
                ❌ {errorMsg}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="Enter your name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Enter subject" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message..." rows={5} value={form.message} onChange={handleChange} />
            </div>

            <button
              className="btn btn-primary send-btn"
              onClick={handleSubmit}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message ✉"}
            </button>
          </div>

          {/* Info Panel */}
          <div className="contact-info-panel">
            <div className="card contact-info-card">
              <h3>Contact Information</h3>
              <p className="info-desc">Feel free to reach out to me through any of these channels.</p>
              <ul className="contact-info-list">
                <li>
                  <span className="info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm19 2.4-8.5 6.3a1 1 0 0 1-1.18 0L3 6.4V18h18V6.4zM3.51 5l8.49 6.3L20.49 5H3.51z"/></svg>
                  </span>
                  <div>
                    <span className="info-label">Email</span>
                    <span className="info-value">ratansahib41@gmail.com</span>
                  </div>
                </li>
                <li>
                  <span className="info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                  </span>
                  <div>
                    <span className="info-label">Phone</span>
                    <span className="info-value">+91 82644 00815</span>
                  </div>
                </li>
                <li>
                  <span className="info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                  </span>
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">Sri Muktsar Sahib, Punjab, India</span>
                  </div>
                </li>
                <li>
                  <span className="info-icon linkedin-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>
                  </span>
                  <div>
                    <span className="info-label">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/ratan-singh-chesslover157/" target="_blank" rel="noreferrer" className="info-value info-link">
                      linkedin.com/in/ratan-singh-chesslover157
                    </a>
                  </div>
                </li>
                <li>
                  <span className="info-icon github-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55v-2.13c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18.93-.26 1.92-.39 2.91-.39.99 0 1.98.13 2.91.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.75.81 1.2 1.83 1.2 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.65.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
                  </span>
                  <div>
                    <span className="info-label">GitHub</span>
                    <a href="https://github.com/RatanBumbraH" target="_blank" rel="noreferrer" className="info-value info-link">
                      github.com/RatanBumbraH
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card available-card">
              <span className="available-dot"></span>
              <div>
                <p className="available-title">Available for freelance work</p>
                <p className="available-sub">Let's talk about your project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;