"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks, siteConfig } from "@/data/site";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[999] transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-custom">
        <div
          className={`glass flex items-center justify-between rounded-full px-4 py-2 shadow-glass transition-all duration-500 md:px-6 ${
            scrolled ? "shadow-soft" : ""
          }`}
        >
          <Link href="/" className="flex items-center gap-2 font-heading text-lg font-extrabold text-dark">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-gradient text-xl shadow-glow">
              🥪
            </span>
            <span className="hidden sm:block">
              Jimmy&apos;s <span className="text-gradient">Feed Co.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`animated-underline font-body text-sm font-semibold tracking-wide transition-colors ${
                  pathname === link.href ? "text-primary" : "text-dark/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton className="hidden md:block">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="rounded-full bg-dark px-5 py-2.5 font-body text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
              >
                Order Online
              </a>
            </MagneticButton>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-dark/5 text-dark lg:hidden"
            >
              {open ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="container-custom mt-2 lg:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-3xl p-4 shadow-glass">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 font-body text-base font-semibold ${
                      pathname === link.href ? "bg-primary/10 text-primary" : "text-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="mt-2 rounded-xl bg-warm-gradient px-4 py-3 text-center font-body font-semibold text-white"
              >
                Call to Order
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
