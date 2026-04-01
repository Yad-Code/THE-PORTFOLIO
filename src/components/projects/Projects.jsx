import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth animations and a clean layout.",
    projectUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/yourusername/portfolio",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Task Manager App",
    description:
      "Full‑stack task manager with authentication, real‑time updates, and drag‑and‑drop functionality.",
    projectUrl: "https://example.com/taskmanager",
    githubUrl: "https://github.com/yourusername/taskmanager",
    tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
  },
  {
    title: "E‑Commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and customers. Includes charts, analytics, and role‑based access.",
    projectUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/yourusername/dashboard",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            MY WORK
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one taught me
            something new and pushed me to grow as a developer.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 