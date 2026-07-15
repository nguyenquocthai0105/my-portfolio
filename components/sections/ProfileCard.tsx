"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  MapPin,
  Mail,
  Download,
  ExternalLink,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <Card className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30">
      {/* Glow nền */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

      <CardContent className="relative p-0">
        <div className="grid lg:grid-cols-[330px_1fr]">
          {/* LEFT */}
          <div className="border-b border-white/10 bg-slate-950/70 p-10 lg:border-b-0 lg:border-r">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-violet-500/30 blur-2xl" />
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={200}
                  height={200}
                  className="relative rounded-3xl border border-white/10 object-cover shadow-2xl"
                />
              </div>

              <h2 className="mt-8 text-center text-3xl font-bold text-white">
                {profile.name}
              </h2>

              <div className="mt-8 w-full space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors hover:border-cyan-400/20 hover:bg-white/[0.05]">
                  <MapPin size={18} className="text-cyan-400" />
                  {profile.location}
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors hover:border-violet-400/20 hover:bg-white/[0.05]">
                  <Mail size={18} className="text-violet-400" />
                  {profile.email}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-10">
            <Badge className="border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-300 hover:bg-cyan-400/10">
              ✨ Available for Internship
            </Badge>

            <h1 className="mt-6 text-5xl font-black leading-tight text-transparent bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text">
              Frontend Developer
            </h1>

            <h2 className="mt-2 text-2xl font-semibold text-violet-300">
              React Native Developer
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
              {profile.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href={profile.resume} download>
                <Button className="bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-[0_10px_30px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(168,85,247,0.35)]">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>

              <a href="#projects">
                <Button
                  variant="outline"
                  className="border-white/10 bg-white/[0.03] text-slate-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </a>
            </div>

            <div className="mt-12 flex gap-6 text-3xl">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-violet-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
