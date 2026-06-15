import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "var(--c-bg)" }}>
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 0%, var(--c-glow) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="inline-block mb-6 px-3 py-1 rounded-sm"
              style={{ background: "var(--c-accent-dim)", border: "1px solid var(--c-accent-border)" }}
            >
              <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-accent)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>About Us</span>
            </div>

            <h2
              className="mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 800, color: "var(--c-fg)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
            >
              Business minds meet
              <br />
              <em style={{ color: "var(--c-accent)" }}>creative thinkers.</em>
            </h2>

            <p
              className="mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "16px", lineHeight: 1.75 }}
            >
              We are a mix of business-oriented minds and creative thinkers, passionate about taking your ideas to the next level. Our team brings together experienced professionals from the industry and young, innovative Gen Z talent — creating the perfect balance to move your brand story forward.
            </p>

            <p
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "16px", lineHeight: 1.75 }}
            >
              Over the years, we've worked with clients across industries, government projects, and NGOs. The common thread? They value our ability to simplify problems, deliver consistently, and build long-term partnerships.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Brand Management", "Digital Marketing", "Corporate Videos"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-sm"
                  style={{ border: "1px solid var(--c-border)", color: "var(--c-fg2)", fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-0"
          >
            {[
              { value: "5+", label: "Years in Business", desc: "Building brands and solving business challenges since 2019." },
              { value: "50+", label: "Completed Projects", desc: "Delivered across industries, from startups to government bodies." },
              { value: "32%", label: "Avg. KPI Improvement", desc: "Measurable growth across marketing, operations, and digital presence." },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="py-8"
                style={{ borderBottom: "1px solid var(--c-border)" }}
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 800, color: "var(--c-fg)", lineHeight: 1, letterSpacing: "-0.04em" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, color: "var(--c-accent)", letterSpacing: "0.04em", textTransform: "uppercase" }}
                  >
                    {stat.label}
                  </span>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "13px", lineHeight: 1.6 }}>
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
