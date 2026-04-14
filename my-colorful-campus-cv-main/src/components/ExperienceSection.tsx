import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Python Developer Intern",
    company: "Mind Aviator Groups",
    period: "May 2025 - Jun 2025",
    location: "New Delhi, India",
    description: [
      "Assisted in debugging and development of Python-based applications, improving code reliability and performance.",
      "Actively participated in code reviews and technical discussions, contributing to problem-solving and code quality",
      "Gained hands-on experience with version control systems and collaborative software development workflows"
    ]
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-background/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Experience <span className="text-gradient">Highlights</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 border border-border/50 shadow-sm"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {experience.role}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {experience.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3 py-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {experience.period}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3 py-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {experience.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 list-disc list-inside text-secondary-foreground">
                  {experience.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
