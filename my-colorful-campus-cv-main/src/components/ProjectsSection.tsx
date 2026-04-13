import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "College ERP System",
    description: "A full-stack University ERP System implementing secure role-based access, academic workflows, grading automation, and system-wide maintenance enforcement.",
    tech: ["Java", "Swing", "MySQL"],
    github: "https://github.com/Lt-Nova-Ghost-Coder/Erp_2025",
    live: "#",
  },
  {
    title: "Simple Scheduler",
    description: "This project implements a SimpleScheduler in C that works with a SimpleShell. It allows users to submit executable programs, manages a ready queue, schedules processes in a round-robin fashion based on a fixed time quantum (TSLICE), and prints job execution summaries upon termination.",
    tech: ["C", "Operating Systems"],
    github: "https://github.com/Lt-Nova-Ghost-Coder/simple-unix-scheduler",
  },
  {
    title: "Simple Shell",
    description: "A shell is a program that allows users to interact with the operating system by typing commands. Instead of using an existing shell like bash, this project builds a basic shell from scratch to understand how commands are executed internally.",
    tech: ["C", "Operating Systems"],
    github: "https://github.com/Lt-Nova-Ghost-Coder/simple-unix-shell",
  },
];

const ProjectsSection = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
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
