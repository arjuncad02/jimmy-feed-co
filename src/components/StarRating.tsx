"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function StarRating({
  rating,
  size = 18,
  className = "",
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 15 }}
        >
          <FaStar
            size={size}
            color={i < Math.round(rating) ? "#FCBF49" : "#e5e0d8"}
          />
        </motion.span>
      ))}
    </div>
  );
}
