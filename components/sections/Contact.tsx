"use client";

import { motion } from "framer-motion";

import { profile } from "@/data/profile";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Mail, Phone, MapPin, Download, ArrowUpRight } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      {/* Heading */}

      <div className="mb-12">
        <p className="text-cyan-300">Get In Touch</p>

        <h2 className="mt-2 bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-5xl font-black text-transparent">
          Let's Build Something Great
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I'm currently looking for Frontend Developer internship opportunities.
          If you have a project or an open position, feel free to reach out.
        </p>
      </div>

      <Card className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-xl">
        <CardContent className="p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white">
                Contact Information
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Whether you have a question, want to collaborate, or just want
                to say hello, my inbox is always open.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Mail className="text-cyan-300" />

                  <div>
                    <p className="text-sm text-slate-400">Email</p>

                    <a
                      href={`mailto:${profile.email}`}
                      className="text-white transition hover:text-cyan-300"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Phone className="text-cyan-300" />

                  <div>
                    <p className="text-sm text-slate-400">Phone</p>

                    <a
                      href="tel:+84912345678"
                      className="text-white transition hover:text-cyan-300"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <MapPin className="text-cyan-300" />

                  <div>
                    <p className="text-sm text-slate-400">Location</p>

                    <p className="text-white">{profile.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
                <h3 className="text-3xl font-bold text-white">
                  Connect With Me
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  You can also find me on GitHub and LinkedIn. Feel free to
                  explore my projects and professional profile.
                </p>

                <div className="mt-10 flex gap-4">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-slate-800 hover:bg-slate-700">
                      <FaGithub className="mr-2" />
                      GitHub
                    </Button>
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-[#0A66C2] hover:bg-[#0A66C2]/90">
                      <FaLinkedin className="mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>

                <a href={profile.resume} download>
                  <Button className="mt-5 w-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white transition-all duration-300 hover:scale-[1.02]">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm uppercase tracking-wider text-cyan-300">
                    Availability
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">
                      Available for Internship
                    </span>

                    <ArrowUpRight className="text-cyan-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
