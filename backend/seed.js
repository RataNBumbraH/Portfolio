import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Project = mongoose.model("Project", new mongoose.Schema({
  title: String, description: String, tags: [String],
  category: String, liveUrl: String, githubUrl: String,
  gradient: String, featured: Boolean,
}, { timestamps: true }));

const Admin = mongoose.model("Admin", new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
}, { timestamps: true }));

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Seed projects
    await Project.deleteMany();
    await Project.insertMany(projects);
    console.log("✅ Projects seeded!");

    // Create admin account
    await Admin.deleteMany();
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    await Admin.create({ email: process.env.ADMIN_EMAIL, password: hashedPassword });
    console.log(`✅ Admin created → ${process.env.ADMIN_EMAIL}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedDB();