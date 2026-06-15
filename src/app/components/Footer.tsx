import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const quickLinks = ["Home", "Services", "About us", "Contact us"];
  const platforms = ["Freelancer", "Upwork", "Behance", "Workana"];

  return (
    <footer id="contact" style={{ background: "var(--c-card)", borderTop: "1px solid var(--c-border)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center"
                style={{ background: "var(--c-accent)" }}
              >
                <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-accent-fg)", fontSize: "12px", fontWeight: 700 }}>UG</span>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-fg)", fontSize: "16px", fontWeight: 600, letterSpacing: "-0.02em" }}>
                UnderGrads
              </span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "13px", lineHeight: 1.7, maxWidth: "220px" }}>
              Your partner for building an unforgettable brand and driving business growth.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Li", title: "LinkedIn" },
                { label: "Fb", title: "Facebook" },
                { label: "Ig", title: "Instagram" },
                { label: "Yt", title: "YouTube" },
              ].map((s) => (
                <a
                  key={s.title}
                  href="#"
                  className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{ background: "var(--c-accent-dim)", border: "1px solid var(--c-accent-border)", color: "var(--c-accent)", transition: "all 0.2s" }}
                  title={s.title}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--c-accent)"; el.style.color = "var(--c-accent-fg)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--c-accent-dim)"; el.style.color = "var(--c-accent)"; }}
                >
                  <span style={{ fontSize: "9px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-fg)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "14px", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--c-fg)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--c-muted)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-fg)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Other Platforms
            </h4>
            <ul className="flex flex-col gap-3">
              {platforms.map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    className="flex items-center gap-2"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "14px", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--c-fg)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--c-muted)")}
                  >
                    {p}
                    <ExternalLink size={10} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5" style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-fg)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Connect With Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+917008932329"
                  className="flex items-start gap-3"
                  style={{ color: "var(--c-muted)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--c-fg)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--c-muted)")}
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>+91 7008932329</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Mail@undergradsmedia.com"
                  className="flex items-start gap-3"
                  style={{ color: "var(--c-muted)", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--c-fg)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--c-muted)")}
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>Mail@undergradsmedia.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3" style={{ color: "var(--c-muted)" }}>
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: 1.6 }}>
                    House No. 9, Aiginia, Lane 1, Shreekhetra Vihar, Near N.H-5, Khandagiri, Bhubaneswar, Odisha – 751019, India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid var(--c-border)" }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "12px" }}>
          © 2025 UnderGrads Media. All rights reserved.
        </span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--c-muted)", fontSize: "12px", opacity: 0.5 }}>
          Bhubaneswar, Odisha, India
        </span>
      </div>
    </footer>
  );
}
