import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Full Stack Gym and Sports System",
    description: "Full-stack web application using Next.js, MySQL, and TypeScript for gym access and equipment lending, featuring secure authentication, role-based dashboards, inventory/loan management, and REST API integration. ",
    tech: ["JavaScript", "Node.js", "React", "MySQL"],
    category: "Web",
    github: "https://github.com/Lt-Nova-Ghost-Coder/DBMS_SEMESTER_PROJECT",
    live: "#",
  },
  {
    title: "College ERP System",
    description: "Full-stack university ERP with role-based access, academic workflows, automated grading, and system maintenance.",
    tech: ["Java", "Swing", "MySQL"],
    category: "Web",
    github: "https://github.com/Lt-Nova-Ghost-Coder/Erp_2025",
    live: "#",
  },
  {
    title: "Simple Scheduler",
    description: "C-based scheduler integrated with a shell, supporting program execution, ready queue management, and round-robin scheduling with fixed time slices.",
    tech: ["C", "Operating Systems"],
    category: "System/OS",
    github: "https://github.com/Lt-Nova-Ghost-Coder/simple-unix-scheduler",
  },
  {
    title: "Simple Shell",
    description: "Custom-built shell in C that executes user commands, demonstrating how operating systems handle command execution internally.",
    tech: ["C", "Operating Systems"],
    category: "System/OS",
    github: "https://github.com/Lt-Nova-Ghost-Coder/simple-unix-shell",
  },
  {
    title: "Live Resume website",
    description: "A responsive website for displaying a professional resume with modern design and smooth animations.",
    tech: ["React", "TypeScript", "HTML", "CSS"],
    category: "Web",
    github: "https://github.com/Lt-Nova-Ghost-Coder/resume",
    live: "https://krishnasainiresume.vercel.app/",
  },
];

const filters = ["All", "System/OS", "Web", "AI"];

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:glow-accent transition-shadow duration-500"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
