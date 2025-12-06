import React from "react";
import "./Project.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import project_1 from '../../assets/project_1.png'
import project_2 from '../../assets/project_2.png'
import project_3 from '../../assets/project_3.png'
import project_4 from '../../assets/project_4.png'
import project_5 from '../../assets/project_5.png'

// ✅ Add your projects here
const projects = [
  {
    title: "AI Finance Platform ",
    image: project_1,
    description:
      "An AI-powered personal finance platform to track income/expenses, manage recurring transactions, and visualize spending in a responsive dashboard",
    tags: ["Next.js", "Prisma", "Tailwind CSS", "Gemini API", "Clerk auth"],
    code: "https://github.com/aswinen-17/Ai-finance-Platform",
    demo: "https://ai-finance-platform-e8hl.onrender.com",
  },
  {
    title: "QuickAi – Full-Stack AI-SaaS Application",
    image: project_2,
    description:
      "This is a full-stack AI SaaS platform that provides multiple AI-powered tools such as article generation, blog title creation, AI image generation, background removal, object removal, and resume analysis.",
    tags: ["React.js", "Node.js","Express.js","PostgreSQL(Neon)","Gemini AI","Tailwind","Shadcn UI","Clerk"],
    code: "https://github.com/aswinen-17/QuickAi-SaaS-platform",
    demo: "https://quickai-saas-platform.onrender.com",
  },
  {
    title: " QuickShow –  Movie Ticket Booking Platform",
    image: project_3,
    description:
      "QuickShow is a full-stack movie ticket booking app with secure login, Stripe payments, and smart seat handling. Integrated with a powerful admin dashboard to manage all movies, shows, users, and booking operations",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB","Stripe","Clerk","Tailwind CSS","Brevo"],
    code: "https://github.com/aswinen-17/movie-ticket-booking",
    demo: "https://quickshow-sand-alpha.vercel.app",
  },
  {
    title: "HomEase –  Home Service Booking Platform",
    image: project_4,
    description:
      "This is a full-stack home-services booking application with user authentication, service browsing and bookings, an admin panel for managing services and users, and secure payment integration using Stripe",
    tags: ["React.js","Node.js","Express.js","MongoDB", "Stripe"],
    code: "https://github.com/aswinen-17/home-service-booking-platform",
    demo: "https://home-service-booking-platform-frontend.onrender.com",
  },
  {
    title: "CareerNest - Job Portal Platform",
    image: project_5,
    description:
      "A full-stack job portal platform, the user-friendly job portal connecting job seekers and recruiters seamlessly",
    tags: ["React.js","Node.js","Express.js","MongoDB", "Tailwind","Cloudinary"],
    code: "https://github.com/aswinen-17/CareerNest-job-Portal-platform",
    demo: "https://careernest-job-portal-platform.onrender.com",
  }
];

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="heading">
        Featured <span>Projects</span>
      </h2>
      <p className="subheading">
        Showcasing my latest work and innovations
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <img src={project.image} alt={project.title} className="project-img" />

            <h3 className="project-title">{project.title}</h3>

            <p className="project-desc">{project.description}</p>

            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.code} target="_blank" rel="noreferrer">
                <FiGithub /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
