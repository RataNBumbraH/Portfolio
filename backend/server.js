import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Middleware ──────────────────────────────────────────────
// Multiple origins or allow production frontend
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:3000",
  "http://localhost:5173"
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Production deployment smoothing
      }
    },
    credentials: true,
  })
);
app.use(express.json());

// ── Models ──────────────────────────────────────────────────
const Project = mongoose.model(
  "Project",
  new mongoose.Schema(
    {
      title:       { type: String, required: true },
      description: { type: String, required: true },
      tags:        [String],
      category:    { type: String, default: "Web Apps" },
      liveUrl:     { type: String, default: "" },
      githubUrl:   { type: String, default: "" },
      gradient:    { type: String, default: "linear-gradient(135deg, #1e293b, #4f6bf6)" },
      featured:    { type: Boolean, default: false },
    },
    { timestamps: true }
  )
);

const Message = mongoose.model(
  "Message",
  new mongoose.Schema(
    {
      name:    { type: String, required: true },
      email:   { type: String, required: true },
      subject: { type: String, required: true },
      message: { type: String, required: true },
      isRead:  { type: Boolean, default: false },
    },
    { timestamps: true }
  )
);

const Admin = mongoose.model(
  "Admin",
  new mongoose.Schema(
    {
      email:    { type: String, required: true, unique: true },
      password: { type: String, required: true },
    },
    { timestamps: true }
  )
);

// ── Auth Middleware ─────────────────────────────────────────
const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({ success: false, message: "Not authorized. Login first." });
  try {
    req.admin = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ success: false, message: "Token invalid or expired." });
  }
};

// ── Nodemailer ──────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ── Rate limiter for contact ────────────────────────────────
const contactLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many requests. Try again after 15 minutes." },
});

// POST  /api/admin/login
app.post("/api/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin || !(await bcrypt.compare(password, admin.password)))
      return res.status(401).json({ success: false, message: "Invalid email or password" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET all projects — public
app.get("/api/projects", async (req, res) => {
  try {
    const filter = {};
    if (req.query.category && req.query.category !== "All")
      filter.category = req.query.category;
    if (req.query.featured === "true")
      filter.featured = true;

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create — admin only
app.post("/api/projects", protect, async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update — admin only
app.put("/api/projects/:id", protect, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ success: false, message: "Project not found" });
    res.json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE — admin only
app.delete("/api/projects/:id", protect, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST submit form — public
app.post("/api/contact", contactLimit, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message)
      return res.status(400).json({ success: false, message: "All fields are required" });

    await Message.create({ name, email, subject, message });

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail({
        from: `"Portfolio" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `📬 New Message: ${subject}`,
        html: `<h3>New Contact Form Message</h3>
               <p><b>Name:</b> ${name}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Subject:</b> ${subject}</p>
               <p><b>Message:</b><br/>${message}</p>`,
      });

      await transporter.sendMail({
        from: `"Ratan" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thanks for reaching out, ${name}! 👋`,
        html: `<p>Hi ${name},</p>
               <p>Thanks for your message! I'll get back to you soon.</p>
               <p>— Ratan</p>`,
      });
    }

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET all messages — admin only
app.get("/api/contact", protect, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get("/api/resume/download", (req, res) => {
  const filePath = path.join(__dirname, "resume.pdf");
  if (!fs.existsSync(filePath))
    return res.status(404).json({ success: false, message: "Add resume.pdf to the backend folder" });
  res.download(filePath, "Ratan_Resume.pdf");
});

// ── Health Check ────────────────────────────────────────────
app.get("/api/health", (_, res) => {
  res.json({ success: true, message: "API is running 🚀" });
});

// ── Database Connection & Server Start ──────────────────────
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();