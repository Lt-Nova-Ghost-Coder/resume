import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold text-gradient">
          YN
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border/60 bg-background/80 p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setMenuOpen((state) => !state)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div className="hidden md:flex gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 pb-4">
            <div className="glass-card rounded-3xl border border-border/50 bg-background/95 backdrop-blur-xl p-4 shadow-xl">
              <div className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/40 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
