"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaGoogle } from "react-icons/fa";
import { reviews } from "@/data/reviews";
import StarRating from "./StarRating";

const filters = ["All", "5 Star", "4 Star"] as const;

export default function ReviewsGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return reviews;
    const stars = active === "5 Star" ? 5 : 4;
    return reviews.filter((r) => r.rating === stars);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-6 py-2.5 font-body text-sm font-semibold transition-all duration-300 ${
              active === f ? "bg-warm-gradient text-white shadow-glow" : "bg-white text-dark/70 shadow-soft hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((review, i) => (
            <motion.div
              key={review.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-4xl bg-white p-7 shadow-soft transition-shadow hover:shadow-soft-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-warm-gradient font-heading text-sm font-bold text-white">
                    {review.initials}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-dark">{review.name}</p>
                    <p className="font-body text-xs text-dark/50">{review.date}</p>
                  </div>
                </div>
                <FaGoogle className="text-dark/20" size={18} />
              </div>
              <StarRating rating={review.rating} size={14} className="mt-4" />
              <FaQuoteLeft className="mt-3 text-xl text-secondary/30" />
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-dark/70">{review.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {review.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-semibold text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
