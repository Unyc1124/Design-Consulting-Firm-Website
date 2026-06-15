import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MessageSquare, Lightbulb, Wrench, RefreshCw } from "lucide-react";

const steps = [
  {
    num: "01",
    word: "Discuss",
    icon: MessageSquare,
    description: "We start by listening. Deep conversations to understand your real challenges, goals, and the context behind your business — not just surface-level symptoms.",
  },
  {
    num: "02",
    word: "Brainstorm",
    icon: Lightbulb,
    description: "Combining our expertise with your vision, we generate ideas together. No generic templates — every solution is shaped around your specific situation.",
  },
  {
    num: "03",
    word: "Solve",
    icon: Wrench,
    description: "We move forward with clear, practical steps. Implementation that's grounded in real execution — design, tech, or strategy delivered with precision.",
  },
  {
    num: "04",
    word: "Refine",
    icon: RefreshCw,
    description: "The goal isn't just to deliver — it's to create long-lasting satisfaction. We continue refining through regular feedback cycles until your goals are truly met.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-28 relative overflow-hidden" style={{ background: "var(--c-bg2)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, var(--c-glow) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-5 px-3 py-1 rounded-sm"
            style={{ background: "var(--c-accent-dim)", border: "1px solid var(--c-accent-border)" }}
          >
            <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-accent)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "var(--c-fg)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            Simple, yet{" "}
            <em style={{ color: "var(--c-accent)" }}>powerful.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "16px", lineHeight: 1.7 }}
          >
            Four focused stages that turn your challenges into sustainable growth.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-sm"
                style={{
                  background: "var(--c-card)",
                  border: "1px solid var(--c-border)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c-accent-border)";
                  el.style.boxShadow = "0 0 30px var(--c-glow)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c-border)";
                  el.style.boxShadow = "none";
                }}
              >
                {i < 3 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px z-10"
                    style={{ background: "var(--c-accent-border)" }}
                  />
                )}

                <div className="flex items-start justify-between mb-6">
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "11px", fontWeight: 700, color: "var(--c-accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Step {step.num}
                  </span>
                  <div
                    className="w-8 h-8 rounded-sm flex items-center justify-center"
                    style={{ background: "var(--c-accent-dim)", border: "1px solid var(--c-accent-border)" }}
                  >
                    <Icon size={14} style={{ color: "var(--c-accent)" }} />
                  </div>
                </div>

                <h3
                  className="mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "var(--c-fg)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
                >
                  {step.word}
                </h3>

                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "13px", lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "var(--c-card)",
            border: "1px solid var(--c-border)",
            boxShadow: "0 0 60px var(--c-glow2)",
          }}
        >
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: "var(--c-fg)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Ready to start your growth story?
            </p>
            <p className="mt-2" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "14px" }}>
              Most clients are happy working with us — and that's what keeps us going.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-4 rounded-sm transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--c-accent)", color: "var(--c-accent-fg)", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.02em", whiteSpace: "nowrap" }}
          >
            Start the Conversation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
