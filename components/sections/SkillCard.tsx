"use client";

import { motion } from "framer-motion";
import { Skill } from "@/data/skills";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
    >
      <div className="flex items-center justify-between">
        <Icon className="text-4xl text-cyan-300" />

        <span className="text-sm font-semibold text-cyan-300">
          {skill.level}%
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-white">
        {skill.name}
      </h3>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${skill.level}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
        />
      </div>
    </motion.div>
  );
}