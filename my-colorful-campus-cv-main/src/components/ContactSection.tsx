import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "ks.krishnasaini19@gmail.com", href: "mailto:ks.krishnasaini19@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-9310435419", href: "tel:+91-9310435419" },
  { icon: Github, label: "GitHub", value: "https://github.com/Lt-Nova-Ghost-Coder", href: "https://github.com/Lt-Nova-Ghost-Coder" },
  { icon: Linkedin, label: "LinkedIn(to be added)", value: "https://linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" },
];

const ContactSection = () => {  
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="text-foreground text-sm font-medium">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
