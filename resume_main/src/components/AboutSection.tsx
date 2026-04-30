import { motion } from "framer-motion";
import { User, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="glass-card rounded-xl p-8">
            <p className="text-secondary-foreground text-lg leading-relaxed mb-6">
              I'm a passionate second-year Computer Science student with a keen interest
              in web development, data structures, and problem-solving. I love building
              projects that make a real difference and I'm always looking to learn new
              technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: User, label: "Name", value: "Krishna Saini" },
                { icon: MapPin, label: "Location", value: "New Delhi, India" },
                { icon: Calendar, label: "Year", value: "2nd Year, B.Tech-CSE" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <Icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                    <p className="text-foreground font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
