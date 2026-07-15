"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  title: string;
}

const AUTO_PLAY = 5000;

export default function ImageSlider({
  images,
  title,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (pause || images.length <= 1) return;

    const timer = setInterval(next, AUTO_PLAY);

    return () => clearInterval(timer);
  }, [pause, current]);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

      {/* Left */}

      {images.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-black"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Right */}

      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-black"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Counter */}

      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 z-30 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur">
          {current + 1} / {images.length}
        </div>
      )}

      {/* Dots */}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-cyan-400"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}