"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { Sandwich } from "@/data/sandwiches";

export default function SandwichCard({ sandwich, index = 0 }: { sandwich: Sandwich; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`
    );
  };

  const handleLeave = () => setTransform("perspective(1000px) rotateY(0deg) rotateX(0deg)");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-3d group"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ transform }}
        className="relative flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-soft transition-shadow duration-500 hover:shadow-soft-lg"
      >
        {sandwich.popular && (
          <span className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-warm-gradient px-3 py-1 text-xs font-bold text-white shadow-glow">
            <FaFire size={11} /> Popular
          </span>
        )}
        <span className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-dark/80 font-heading text-sm font-bold text-white backdrop-blur">
          {String(sandwich.number).padStart(2, "0")}
        </span>

        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-accent/30 via-secondary/20 to-primary/20">
          <div className="absolute inset-0 flex items-center justify-center text-7xl transition-transform duration-700 group-hover:scale-110">
            🥪
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-xl font-bold text-dark">
              {sandwich.name} {sandwich.emoji}
            </h3>
          </div>
          <p className="mt-2 font-body text-sm leading-relaxed text-dark/60">{sandwich.description}</p>
          <p className="mt-3 font-body text-xs uppercase tracking-wide text-dark/40 line-clamp-2">
            {sandwich.ingredients.join(" · ")}
          </p>
          <div className="mt-auto flex items-center justify-between pt-5">
            <span className="font-heading text-2xl font-extrabold text-primary">${sandwich.price}</span>
            <button className="rounded-full bg-dark px-5 py-2.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-warm-gradient hover:shadow-glow">
              Order
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
