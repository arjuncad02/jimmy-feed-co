"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaBolt, FaTag, FaLayerGroup, FaMapMarkerAlt, FaSmile } from "react-icons/fa";

const icons: Record<string, React.ElementType> = {
  leaf: FaLeaf,
  bolt: FaBolt,
  tag: FaTag,
  layers: FaLayerGroup,
  "map-pin": FaMapMarkerAlt,
  smile: FaSmile,
};

export default function IconCard({
  title,
  description,
  icon,
  index = 0,
}: {
  title: string;
  description: string;
  icon: string;
  index?: number;
}) {
  const Icon = icons[icon] ?? FaLeaf;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-4xl bg-white p-8 shadow-soft transition-shadow duration-500 hover:shadow-soft-lg"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-warm-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-gradient text-2xl text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <Icon />
      </div>
      <h3 className="relative mt-6 font-heading text-lg font-bold text-dark">{title}</h3>
      <p className="relative mt-2 font-body text-sm leading-relaxed text-dark/60">{description}</p>
    </motion.div>
  );
}
