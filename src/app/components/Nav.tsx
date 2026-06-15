import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Services", "Work", "About", "Process"];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "var(--c-nav-blur)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--c-border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-sm flex items-center justify-center"
            style={{ background: "var(--c-accent)" }}
          >
            <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-accent-fg)", fontSize: "11px", fontWeight: 700, letterSpacing: "-0.02em" }}>UG</span>
          </div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-fg)", fontSize: "15px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            UnderGrads
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "14px", fontWeight: 400, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--c-fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--c-muted)")}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA + Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="px-5 py-2 rounded-sm transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--c-accent)", color: "var(--c-accent-fg)", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.02em" }}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2"
            style={{ color: "var(--c-fg)" }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-6"
          style={{ background: "var(--c-nav-blur)", borderBottom: "1px solid var(--c-border)" }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "16px", borderBottom: "1px solid var(--c-border2)" }}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 block text-center px-5 py-3 rounded-sm"
            style={{ background: "var(--c-accent)", color: "var(--c-accent-fg)", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600 }}
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
