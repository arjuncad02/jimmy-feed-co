"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { siteConfig } from "@/data/site";

const gallery = [
  { src: "/images/gallery/gallery-1.jpg", alt: "Fresh deli sandwich, sliced and stacked" },
  { src: "/images/gallery/gallery-2.jpg", alt: "Wrap platter for office catering" },
  { src: "/images/gallery/gallery-3.jpg", alt: "Fresh garden salads" },
  { src: "/images/gallery/gallery-4.jpg", alt: "Giant pretzel sandwich ring" },
  { src: "/images/gallery/gallery-5.jpg", alt: "Greek salad at Jimmy's Feed Co." },
  { src: "/images/gallery/gallery-6.jpg", alt: "Sandwich platter tray" },
];

export default function InstagramGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
      {gallery.map((img, i) => (
        <motion.a
          key={img.src}
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="group relative aspect-square overflow-hidden rounded-3xl shadow-soft"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 16vw"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-dark/0 opacity-0 transition-all duration-300 group-hover:bg-dark/40 group-hover:opacity-100">
            <FaInstagram className="text-2xl text-white" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
