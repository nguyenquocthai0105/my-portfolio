import ProfileCard from "@/components/sections/ProfileCard";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[180px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-28">
        <ProfileCard />

        <Skills />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}