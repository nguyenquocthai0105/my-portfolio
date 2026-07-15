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
    <Card className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl backdrop-blur-xl">
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-[330px_1fr]">
          {/* LEFT */}
          <div className="border-b border-slate-800 bg-slate-900/90 p-10 lg:border-b-0 lg:border-r">
            <div className="flex flex-col items-center">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={200}
                height={200}
                className="rounded-3xl border border-slate-700 object-cover shadow-xl"
              />

              <h2 className="mt-8 text-center text-3xl font-bold text-white">
                {profile.name}
              </h2>

              <div className="mt-8 w-full space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-sky-400" />
                  {profile.location}
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-sky-400" />
                  {profile.email}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-10">
            <Badge className="border border-sky-500/30 bg-sky-500/15 px-3 py-1 text-sky-300">
              🚀 Available for Internship
            </Badge>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white">
              Frontend Developer
            </h1>

            <h2 className="mt-2 text-2xl font-semibold text-sky-400">
              React Native Developer
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
              {profile.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="border border-slate-700 bg-slate-800 px-3 py-1 text-slate-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href={profile.resume} download>
                <Button className="bg-sky-500 text-black hover:bg-sky-400">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>

              <a href="#projects">
                <Button
                  variant="outline"
                  className="border-slate-700 bg-transparent hover:bg-slate-800"
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
                className="text-slate-400 transition-all duration-300 hover:scale-110 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                className="text-slate-400 transition-all duration-300 hover:scale-110 hover:text-sky-400"
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