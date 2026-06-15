import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const years = useCountUp(5, 1800, inView);
  const projects = useCountUp(50, 2000, inView);
  const kpi = useCountUp(32, 1600, inView);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--c-bg)" }}
    >
      {/* Radial ocean glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 15% 100%, var(--c-glow) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 10%, var(--c-glow2) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 50% 50%, var(--c-glow2) 0%, transparent 70%)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: "var(--c-grain)",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--c-grid) 1px, transparent 1px), linear-gradient(90deg, var(--c-grid) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-10"
          style={{
            border: "1px solid var(--c-accent-border)",
            borderRadius: "100px",
            padding: "6px 14px",
            background: "var(--c-accent-dim)",
          }}
        >
          <Sparkles size={12} style={{ color: "var(--c-accent)" }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-accent)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Business Consulting & Execution
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--c-fg)",
            }}
          >
            Your One Stop
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              fontStyle: "italic",
              color: "var(--c-accent)",
            }}
          >
            Solution
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--c-fg)",
            }}
          >
            for Business.
          </motion.h1>
        </div>

        {/* Sub + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col md:flex-row md:items-end gap-8"
        >
          <p
            className="max-w-md"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "17px", lineHeight: 1.65, fontWeight: 400 }}
          >
            From planning to implementation in media, design, HR, marketing and tech — we simplify challenges with creativity, communication and confidence.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#services"
              className="group flex items-center gap-3 px-7 py-4 rounded-sm transition-all duration-300 hover:opacity-90 hover:gap-4"
              style={{ background: "var(--c-accent)", color: "var(--c-accent-fg)", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, letterSpacing: "0.01em" }}
            >
              Let's Build
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="px-7 py-4 rounded-sm transition-all duration-300"
              style={{ border: "1px solid var(--c-border)", color: "var(--c-fg2)", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 400 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent-border)"; (e.currentTarget as HTMLElement).style.color = "var(--c-accent)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--c-border)"; (e.currentTarget as HTMLElement).style.color = "var(--c-fg2)"; }}
            >
              See Our Work
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex flex-wrap gap-0"
          style={{ borderTop: "1px solid var(--c-border)" }}
        >
          {[
            { value: years, suffix: "+", label: "Years in Business" },
            { value: projects, suffix: "+", label: "Completed Projects" },
            { value: kpi, suffix: "%", label: "Avg. KPI Improvement" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex-1 min-w-[140px] pt-6 pr-8"
              style={{ borderRight: i < 2 ? "1px solid var(--c-border)" : "none", paddingLeft: i > 0 ? "32px" : 0 }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "var(--c-fg)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "13px", marginTop: "6px", letterSpacing: "0.02em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, var(--c-accent), transparent)" }}
        />
        <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
      </motion.div>
    </section>
  );
}
