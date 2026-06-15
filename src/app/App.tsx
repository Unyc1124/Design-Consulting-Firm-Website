import "../styles/fonts.css";
import { ThemeProvider } from "next-themes";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      themes={["dark", "light", "pink"]}
      enableSystem={false}
    >
      <div
        style={{
          background: "var(--c-bg)",
          fontFamily: "'DM Sans', sans-serif",
          overflowX: "hidden",
          minHeight: "100vh",
          transition: "background 0.4s ease",
        }}
      >
        <Nav />
        <Hero />
        <Partners />
        <Services />
        <CaseStudies />
        <About />
        <Process />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
