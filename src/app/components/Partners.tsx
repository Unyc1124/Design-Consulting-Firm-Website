import { motion } from "motion/react";

const partners = [
  "ARBeti Bachao", "Election", "Goodlife", "HDFC", "Newton Edwise",
  "PR", "Saaras", "SIDBI", "Solar", "Tantashala", "TBYELO",
  "Pratyaksh", "Vynlet", "Surul", "Gemini",
];

function MarqueeRow() {
  const items = [...partners, ...partners];
  return (
    <div className="overflow-hidden flex" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <motion.div
        className="flex shrink-0 gap-10 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {items.map((name, i) => (
          <div key={i} className="shrink-0 flex items-center gap-3">
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "var(--c-muted)",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </span>
            <span style={{ color: "var(--c-accent-border)", fontSize: "20px", fontWeight: 300 }}>·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Partners() {
  return (
    <section
      className="py-14"
      style={{ background: "var(--c-bg)", borderTop: "1px solid var(--c-border)", borderBottom: "1px solid var(--c-border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-6 flex items-center gap-6">
        <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          Trusted Partners
        </span>
        <div style={{ height: "1px", flex: 1, background: "var(--c-border)" }} />
      </div>
      <MarqueeRow />
    </section>
  );
}
