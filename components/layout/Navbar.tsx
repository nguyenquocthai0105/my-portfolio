export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl bg-slate-950/50 border-b border-slate-800">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-xl font-bold">
          Thai<span className="text-sky-400">.</span>
        </h1>

        <nav className="flex gap-8">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </nav>

      </div>
    </header>
  );
}