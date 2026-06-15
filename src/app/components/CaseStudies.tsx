import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "Brand & Tech",
    title: "Transforming Saraas Group into a Modern Brand",
    description: "A 15+ year poultry business in Odisha modernized its brand identity, entered new markets, and launched a consumer-facing platform — Tender Bites.",
    image: "https://images.unsplash.com/photo-1775328023996-5946224041b1?w=800&h=600&fit=crop&auto=format",
    tags: ["Branding", "App Development", "HR", "Marketing"],
    span: "lg:col-span-2",
  },
  {
    tag: "App & Brand",
    title: "Building YELO Into a Modern Bike Service Brand",
    description: "A bike service app offering doorstep two-wheeler repair with booking, tracking, and online payment.",
    image: "https://images.unsplash.com/photo-1636761358757-0a616eb9e17e?w=800&h=600&fit=crop&auto=format",
    tags: ["UI/UX", "Mobile App", "Branding"],
    span: "lg:col-span-1",
  },
  {
    tag: "Fashion & Digital",
    title: "Elevating Tantashala to a Digital-First Fashion Brand",
    description: "A handloom brand from Odisha specializing in Sambalpuri sarees — taken from local store to digital-first destination.",
    image: "https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?w=800&h=600&fit=crop&auto=format",
    tags: ["E-Commerce", "Branding", "Photoshoot"],
    span: "lg:col-span-1",
  },
  {
    tag: "Government & NGO",
    title: "UnderGrads × Government Initiatives",
    description: "Partnering with government bodies and PSUs to transform data-heavy reports into powerful, relatable narratives through digital-first communication.",
    image: "https://images.unsplash.com/photo-1758876022363-542ba727f641?w=800&h=600&fit=crop&auto=format",
    tags: ["Branding", "Visual Storytelling", "Digital"],
    span: "lg:col-span-2",
  },
];

function CaseCard({ item, index }: { item: typeof cases[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-sm cursor-pointer ${item.span}`}
      style={{ minHeight: "380px" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(6,13,31,0.96) 0%, rgba(6,13,31,0.5) 50%, rgba(6,13,31,0.2) 100%)" }}
        />
        {/* Oceanic blue tint overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: "rgba(59, 110, 248, 0.08)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col h-full p-8" style={{ minHeight: "380px" }}>
        <div className="flex items-start justify-between">
          <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-accent)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.8 }}>
            {item.tag}
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
            style={{ background: "var(--c-accent)" }}
          >
            <ArrowUpRight size={14} style={{ color: "#fff" }} />
          </div>
        </div>

        <div className="mt-auto">
          <h3
            className="mb-2"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 700, color: "#E8EDF8", lineHeight: 1.2, letterSpacing: "-0.02em" }}
          >
            {item.title}
          </h3>
          <p className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(168,184,216,0.7)", fontSize: "13px", lineHeight: 1.6 }}>
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-sm"
                style={{ background: "rgba(91,140,255,0.1)", border: "1px solid rgba(91,140,255,0.2)", color: "rgba(168,184,216,0.8)", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-28" style={{ background: "var(--c-bg2)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-block mb-4 px-3 py-1 rounded-sm"
              style={{ background: "var(--c-accent-dim)", border: "1px solid var(--c-accent-border)" }}
            >
              <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-accent)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>Case Studies</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "var(--c-fg)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Crafting success
              <br />
              <em style={{ color: "var(--c-accent)" }}>with our clients.</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "14px", lineHeight: 1.7 }}
          >
            Collaborations that blend creativity, strategy and innovation into impactful results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {cases.map((c, i) => (
            <CaseCard key={i} item={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
