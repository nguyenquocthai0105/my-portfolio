"use client";

import ImageSlider from "./ImageSlider";

interface Props {
  images: string[];
  title: string;
}

export default function MacbookMockup({
  images,
  title,
}: Props) {
  return (
    <div className="flex justify-center">

      {/* Body */}

      <div className="relative w-full max-w-5xl">

        {/* Glow */}

        <div className="absolute inset-0 rounded-[40px] bg-cyan-400/10 blur-3xl" />

        {/* Laptop */}

        <div className="relative rounded-[28px] border border-white/10 bg-[#18181b] p-3 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

          {/* Camera */}

          <div className="absolute left-1/2 top-2 z-20 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-700" />

          {/* Screen */}

          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-black">

            <ImageSlider
              images={images}
              title={title}
            />

          </div>
        </div>

        {/* Bottom */}

        <div className="mx-auto h-4 w-[96%] rounded-b-[30px] bg-gradient-to-b from-zinc-500 via-zinc-700 to-zinc-900" />

        {/* Base */}

        <div className="mx-auto h-3 w-56 rounded-full bg-black/40 blur-md" />

      </div>

    </div>
  );
}