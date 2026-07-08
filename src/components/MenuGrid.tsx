"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sandwiches } from "@/data/sandwiches";
import SandwichCard from "./SandwichCard";

const categories = ["All", "Signature", "Vegetarian", "Wraps", "Keto"] as const;

export default function MenuGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? sandwiches : sandwiches.filter((s) => s.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-6 py-2.5 font-body text-sm font-semibold transition-all duration-300 ${
              active === cat
                ? "bg-warm-gradient text-white shadow-glow"
                : "bg-white text-dark/70 shadow-soft hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((s, i) => (
            <motion.div
              key={s.number}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              <SandwichCard sandwich={s} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
