const API = "http://localhost:5000/api";

// ── Projects ────────────────────────────────────────────────
export const getProjects = async (category = "All") => {
  const query = category !== "All" ? `?category=${category}` : "";
  const res = await fetch(`${API}/projects${query}`);
  const data = await res.json();
  return data.data || [];
};

export const getFeaturedProjects = async () => {
  const res = await fetch(`${API}/projects?featured=true`);
  const data = await res.json();
  return data.data || [];
};

// ── Contact ─────────────────────────────────────────────────
export const submitContact = async (form) => {
  const res = await fetch(`${API}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  return res.json();
};

// ── Resume ──────────────────────────────────────────────────
export const getResumeUrl = () => `${API}/resume/download`;