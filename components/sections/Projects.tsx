import { projects } from "@/data/projects";
import FeaturedProjectCard from "@/components/project/FeaturedProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="space-y-12"
    >
      <div>
        <p className="text-cyan-300">
          Featured Work
        </p>

        <h2 className="mt-2 bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-5xl font-black text-transparent">
          Selected Projects
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Here are two projects that best represent my experience in frontend
          development, UI/UX implementation, and full-stack collaboration.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}