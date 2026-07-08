"use client";

import { motion } from "framer-motion";

const items = [
  { emoji: "🍅", top: "10%", left: "6%", size: "text-4xl", duration: 7 },
  { emoji: "🥬", top: "68%", left: "4%", size: "text-5xl", duration: 9 },
  { emoji: "🧀", top: "20%", left: "88%", size: "text-4xl", duration: 8 },
  { emoji: "🥓", top: "72%", left: "90%", size: "text-4xl", duration: 6.5 },
  { emoji: "🫒", top: "45%", left: "94%", size: "text-3xl", duration: 10 },
  { emoji: "🌿", top: "85%", left: "50%", size: "text-3xl", duration: 7.5 },
];

export default function FloatingIngredients() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item, i) => (
        <motion.span
          key={i}
          className={`absolute ${item.size} opacity-40 md:opacity-70`}
          style={{ top: item.top, left: item.left }}
          animate={{ y: [0, -25, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          {item.emoji}
        </motion.span>
      ))}
    </div>
  );
}
