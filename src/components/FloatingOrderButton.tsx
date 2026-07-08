"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingBag, FaPhone } from "react-icons/fa";
import { siteConfig } from "@/data/site";

export default function FloatingOrderButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-5 z-[997] md:bottom-8 md:right-8">
      <AnimatePresence>
        {open && (
          <motion.a
            href={`tel:${siteConfig.phoneHref}`}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="mb-3 flex items-center gap-2 rounded-full bg-dark px-5 py-3 text-sm font-semibold text-white shadow-soft-lg"
          >
            <FaPhone size={14} /> Call to Order
          </motion.a>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={{ boxShadow: ["0 0 0 0 rgba(214,40,40,0.4)", "0 0 0 14px rgba(214,40,40,0)"] }}
        transition={{ boxShadow: { repeat: Infinity, duration: 2 } }}
        className="flex items-center gap-2 rounded-full bg-warm-gradient px-6 py-4 font-heading font-bold text-white shadow-glow"
        aria-label="Order online"
      >
        <FaShoppingBag />
        <span className="hidden sm:inline">Order Now</span>
      </motion.button>
    </div>
  );
}
