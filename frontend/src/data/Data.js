import SIMI_AI from "../assets/SIMI AI.png";
import SatQuery_AI from "../assets/SAT QUERY AI.png";
import Village_Information_Hub from "../assets/website for villages.png";
import BidGuard_AI from "../assets/BID GUARD AI.png";

export const skillCategories = {
  Frontend: [
    { name: "React.js", icon: "⚛️" },
    { name: "JavaScript", icon: "JS" },
    { name: "HTML5", icon: "5" },
    { name: "CSS3", icon: "3" },
  ],
  Backend: [
    { name: "Node.js", icon: "⬢" },
    { name: "Express.js", icon: "ex" },
    { name: "FastAPI", icon: "⚡" },
  ],
  Database: [
    { name: "MongoDB", icon: "🍃" },
    { name: "Mongoose", icon: "🐾" },
    { name: "SQL", icon: "🗄️" },
  ],
  AI_ML: [
    { name: "LLM APIs", icon: "🤖" },
    { name: "RAG Pipelines", icon: "🔍" },
    { name: "LoRA / LLaVA", icon: "👁️" },
    { name: "Vector Embeddings", icon: "📊" },
  ],
  DevOps: [
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸" },
    { name: "AWS (EC2, S3)", icon: "☁️" },
    { name: "Jenkins & CI/CD", icon: "⚙️" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Linux & Bash", icon: "🐧" },
  ],
};

export const projects = [
  {
    title: "SIMI AI — AI DevOps Assistant",
    description: "Built an AI-assisted DevOps platform that analyzes code repositories, application logs, and deployment issues through a FastAPI backend and React.js conversational UI using RAG and LLM tool calling.",
    tags: ["FastAPI", "React.js", "LLMs", "RAG", "Docker", "Kubernetes"],
    category: "AI & DevOps",
    image: SIMI_AI,
    gradient: "linear-gradient(135deg, #1e293b, #4f6bf6)",
    github: "https://github.com/RataNBumbraH/SIMI-AI",
  },
  {
    title: "SatQuery AI — Multimodal Satellite Change Analysis",
    description: "Built a multimodal vision-language system that compares multi-temporal satellite imagery, adapting a LLaVA model using LoRA and serving inference via FastAPI.",
    tags: ["Python", "LLaVA", "LoRA", "FastAPI", "React.js", "Docker"],
    category: "AI & ML",
    image: SatQuery_AI,
    gradient: "linear-gradient(135deg, #312e81, #a855f7)",
    github: "https://github.com/RataNBumbraH/Sat-Query-AI",
  },
  {
    title: "Village Information Hub — Full-Stack Community Platform",
    description: "Built a MERN platform managing village records, community camps, service requests, and citizen feedback through role-based JWT workflows and administrative dashboards.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    category: "Web Apps",
    image: Village_Information_Hub,
    gradient: "linear-gradient(135deg, #0f172a, #38bdf8)",
    github: "https://github.com/RataNBumbraH/Website-For-Villages",
  },
  {
    title: "BidGuard AI — GeM Tender & Compliance Verification Platform",
    description: "Engineered an intelligent platform for the Government e-Marketplace (GeM) that automates tender document analysis, requirement extraction, and multi-tier bidder compliance verification using advanced LLMs and RAG architecture.",
    tags: ["React", "FastAPI", "Python", "Gemini API", "PyMuPDF", "Vector DB"],
    category: "AI & ML",
    image: BidGuard_AI,
    gradient: "linear-gradient(135deg, #1e1b4b, #db2777)",
    github: "https://github.com/RataNBumbraH/Bid-Guard-AI"
}
];

export const experiences = [
  {
    period: "2026 – Present",
    role: "AI & LLM Integration",
    company: "Advanced Learning & Projects",
    description: "Deep-dived into AI engineering—learning LLM APIs, building RAG pipelines, and developing multimodal systems like SatQuery AI and BidGuard AI.",
    tags: ["LLMs", "RAG", "Python", "FastAPI"],
  },
  {
    period: "Summer 2025",
    role: "DevOps & Cloud Engineering",
    company: "Self-Directed Intensive Track",
    description: "Transitioned to infrastructure and deployment: mastered Linux, Bash scripting, Docker containerization, Kubernetes orchestration, Jenkins, and AWS.",
    tags: ["Linux", "Bash", "Docker", "Kubernetes", "AWS"],
  },
  {
    period: "2025 – 2026 (Sem 3 & 4)",
    role: "Full-Stack MERN & Advanced Web",
    company: "Baba Farid Group of Institutions",
    description: "Scaled up to full-stack engineering by learning Node.js, Express.js, MongoDB, and React.js, along with foundational Linux concepts.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Linux"],
  },
  {
    period: "Summer 2025",
    role: "Python & Data Analytics",
    company: "1-Month Summer Training Camp",
    description: "Completed intensive training focused on Python programming and core data visualization libraries like NumPy and Matplotlib.",
    tags: ["Python", "NumPy", "Matplotlib"],
  },
  {
    period: "2024 – 2025 (Sem 1 & 2)",
    role: "BCA Foundation & Core Web",
    company: "Baba Farid Group of Institutions",
    description: "Began the BCA degree program, starting from scratch with HTML5 and CSS3, and moving into core JavaScript programming.",
    tags: ["BCA", "HTML5", "CSS3", "JavaScript"],
  },
];

export const getTotalTechCount = () => {
  return Object.values(skillCategories).flat().length;
};