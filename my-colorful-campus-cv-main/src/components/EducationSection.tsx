import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi)",
    year: "2024 – 2028 (Expected)",
    details: "Relevant Coursework: Data Structures, Algorithms, OOP, DBMS, Web Development",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Dev Samaj Modern School, New Delhi",
    year: "2022 – 2024",
    details: "Science Stream (PCM/CS)",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card rounded-xl p-6 flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-primary text-sm font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground text-xs mt-1">{edu.year}</p>
                  <p className="text-secondary-foreground text-sm mt-2">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
