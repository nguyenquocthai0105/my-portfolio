"use client";

import { Project } from "@/data/projects";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import MacbookMockup from "./MacbookMockup";

import { CalendarDays, CheckCircle2, ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

interface Props {
  project: Project;
}

export default function FeaturedProjectCard({ project }: Props) {
  return (
    <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.06),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,.08),transparent_35%)]" />

      {/* ================= IMAGE ================= */}

      <div className="p-8 pb-2">
        <MacbookMockup images={project.images} title={project.title} />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative px-10 pb-10">
        {/* Header */}

        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-cyan-300">
              {project.subtitle}
            </p>

            <h3 className="mt-3 text-4xl font-black text-white">
              {project.title}
            </h3>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end gap-2 text-slate-400">
              <CalendarDays size={16} />

              <span>{project.period}</span>
            </div>

            <span
              className={`mt-3 inline-flex rounded-full px-4 py-1 text-xs font-semibold ${
                project.status === "Completed"
                  ? "bg-emerald-500/15 text-emerald-300"
                  : "bg-yellow-500/15 text-yellow-300"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}

        <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">
          {project.description}
        </p>

        {/* Highlights */}

        <div className="mt-10">
          <h4 className="mb-5 text-xl font-semibold text-white">Highlights</h4>

          <div className="grid gap-4 md:grid-cols-2">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/5 px-4 py-3"
              >
                <CheckCircle2 size={18} className="text-cyan-400" />

                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* My Contributions */}

        <div className="mt-12">
          <h4 className="mb-5 text-xl font-semibold text-white">
            My Contributions
          </h4>

          <div className="space-y-4">
            {project.contributions.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-cyan-400"
                />

                <p className="leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-12">
          <h4 className="mb-5 text-xl font-semibold text-white">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                className="border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-200 transition-all duration-300 hover:scale-105 hover:bg-cyan-400/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Buttons */}

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-4">
          {/* Nút Git Client */}
          {project.githubClient && (
            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-slate-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <FaGithub className="mr-2" />
                Git Client
              </Button>
            </a>
          )}

          {/* Nút Git Admin */}
          {project.githubAdmin && (
            <a
              href={project.githubAdmin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-slate-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <FaGithub className="mr-2" />
                Git Admin
              </Button>
            </a>
          )}

          {/* Nút Git Backend */}
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-slate-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <FaGithub className="mr-2" />
                Git Backend
              </Button>
            </a>
          )}

          {/* Nút Live Demo */}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-[0_10px_30px_rgba(56,189,248,.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(168,85,247,.35)]">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
