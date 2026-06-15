import { useTheme } from "next-themes";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const THEMES = ["dark", "light", "pink"] as const;
type Theme = typeof THEMES[number];

const meta: Record<Theme, { icon: typeof Sun; label: string }> = {
  dark:  { icon: Moon,     label: "Switch to Light" },
  light: { icon: Sun,      label: "Switch to Pink"  },
  pink:  { icon: Sparkles, label: "Switch to Dark"  },
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: 36, height: 36 }} />;

  const current = (THEMES.includes(theme as Theme) ? theme : "dark") as Theme;
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
  const { icon: Icon, label } = meta[current];

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
      className="relative flex items-center justify-center w-9 h-9 rounded-sm transition-all duration-300"
      style={{ background: "var(--c-accent-dim)", border: "1px solid var(--c-accent-border)", color: "var(--c-accent)" }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "var(--c-accent)";
        el.style.color = "var(--c-accent-fg)";
        el.style.borderColor = "var(--c-accent)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "var(--c-accent-dim)";
        el.style.color = "var(--c-accent)";
        el.style.borderColor = "var(--c-accent-border)";
      }}
    >
      <Icon size={15} />
    </button>
  );
}
