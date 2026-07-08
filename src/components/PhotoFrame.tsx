"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoFrame({
  src,
  alt,
  className = "",
  rounded = "rounded-4xl",
  priority = false,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  aspect?: string;
}) {
  return (
    <motion.div
      className={`group relative overflow-hidden ${rounded} ${aspect} shadow-soft ${className}`}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/10 to-transparent" />
    </motion.div>
  );
}
