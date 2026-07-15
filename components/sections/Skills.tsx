"use client";

import { motion } from "framer-motion";

import { skills } from "@/data/skills";

import SkillCard from "./SkillCard";

const frontend = skills.filter(
  (s) => s.category === "Frontend"
);

const backend = skills.filter(
  (s) => s.category === "Backend"
);

const tools = skills.filter(
  (s) => s.category === "Tools"
);

function Section({
  title,
  items,
}: {
  title: string;
  items: typeof skills;
}) {
  return (
    <div className="mt-14">
      <h3 className="mb-8 text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="mb-12">
        <p className="text-cyan-300">
          Technical Expertise
        </p>

        <h2 className="mt-2 bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-5xl font-black text-transparent">
          Skills & Technologies
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Technologies, frameworks, and development tools I
          use to build modern, scalable, and responsive web
          applications.
        </p>
      </div>

      <Section
        title="Frontend Development"
        items={frontend}
      />

      <Section
        title="Backend Knowledge"
        items={backend}
      />

      <Section
        title="Tools & Workflow"
        items={tools}
      />
    </section>
  );
}