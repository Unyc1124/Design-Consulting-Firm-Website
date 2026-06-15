import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Design &\nMedia Production",
    description: "Creative visuals that build trust and connect with your customers. High quality designs and visuals that tell your story and make your audience fall in love with your brand.",
    items: [
      "Logo & Branding",
      "Product Photoshoot",
      "Videography & Documentaries",
      "Packaging Design",
      "IEC Material & Collateral",
      "Creative & Media Production",
      "Social Media Management",
    ],
  },
  {
    num: "02",
    title: "Tech &\nOperational Solutions",
    description: "Tech-enabled and user-friendly solutions to bring you closer to your customers while taking care of real time operations. Making your business future ready.",
    items: [
      "Static Website Development",
      "Functional / Dynamic Websites",
      "Android Mobile Apps",
      "ERP Solutions",
      "Data Analytics & Reporting",
      "Digital Marketing",
      "Event Management Support",
    ],
  },
  {
    num: "03",
    title: "Strategy &\nBusiness Consulting",
    description: "Businesses often get stuck with bottlenecks. We step in with deep discussions, brainstorming, and execution support to solve challenges across HR, finance, marketing, and operations.",
    items: [
      "Business Consulting & Growth Strategy",
      "Manpower Hiring & HR Solutions",
      "Root Cause Problem Solving",
      "Strategic Partnerships",
      "Financial Planning Support",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col p-8 rounded-sm cursor-pointer"
      style={{
        background: "var(--c-card)",
        border: "1px solid var(--c-border)",
        minHeight: "520px",
        transition: "border-color 0.3s, background 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--c-accent-border)";
        el.style.boxShadow = "0 0 40px var(--c-glow)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--c-border)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Number */}
      <div className="flex items-start justify-between mb-8">
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "72px", fontWeight: 800, color: "var(--c-border2)", lineHeight: 1, letterSpacing: "-0.04em", opacity: 0.6 }}>
          {service.num}
        </span>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
          style={{ background: "var(--c-accent)" }}
        >
          <ArrowUpRight size={16} style={{ color: "var(--c-accent-fg)" }} />
        </div>
      </div>

      <h3
        className="mb-4 whitespace-pre-line"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "var(--c-fg)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
      >
        {service.title}
      </h3>

      <p
        className="mb-8"
        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "14px", lineHeight: 1.7 }}
      >
        {service.description}
      </p>

      <div style={{ height: "1px", background: "var(--c-border)", marginBottom: "24px" }} />

      <ul className="flex flex-col gap-2 mt-auto">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-fg2)", fontSize: "13px" }}>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--c-accent)", flexShrink: 0, display: "block", opacity: 0.6 }} />
            {item}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 transition-all duration-200"
        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "var(--c-accent)", letterSpacing: "0.04em", textTransform: "uppercase" }}
      >
        I need this
        <ArrowUpRight size={14} />
      </a>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28" style={{ background: "var(--c-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-block mb-4 px-3 py-1 rounded-sm"
              style={{ background: "var(--c-accent-dim)", border: "1px solid var(--c-accent-border)" }}
            >
              <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-accent)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "var(--c-fg)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Everything your business
              <br />
              <em style={{ color: "var(--c-accent)" }}>needs to grow.</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xs"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "14px", lineHeight: 1.7 }}
          >
            Three pillars, one partner. We cover every dimension of modern business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
