"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-dark pt-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />

      <div className="relative overflow-hidden border-y border-white/10 py-4">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {["Fresh Ingredients", "Generous Portions", "Affordable Prices", "Locally Loved", "Family Owned", "Fast Service"].map(
                (t) => (
                  <span key={t} className="mx-6 font-heading text-2xl font-extrabold text-white/10">
                    {t} <span className="text-secondary/40">✦</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom relative grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-heading text-xl font-extrabold">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-gradient text-xl">🥪</span>
            Jimmy&apos;s Feed Co.
          </Link>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-white/60">
            Waterloo&apos;s favourite sandwich shop. Fresh ingredients, generous portions, affordable prices — made with love, every single day.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <FaInstagram />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-secondary">Explore</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="animated-underline font-body text-sm text-white/70 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-secondary">Visit Us</h3>
          <ul className="mt-4 space-y-3 font-body text-sm text-white/70">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-accent" /> {siteConfig.address.full}
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="shrink-0 text-accent" />
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="shrink-0 text-accent" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-secondary">Newsletter</h3>
          <p className="mt-4 font-body text-sm text-white/60">Get specials and updates straight to your inbox.</p>
          <form onSubmit={handleSubmit} className="mt-4 flex overflow-hidden rounded-full bg-white/10 p-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder-white/40 outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-warm-gradient px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Join
            </button>
          </form>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-xs text-accent"
            >
              Thanks for subscribing! 🎉
            </motion.p>
          )}
        </div>
      </div>

      <div className="container-custom relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50 md:flex-row">
        <p>© {new Date().getFullYear()} Jimmy&apos;s Feed Co. All rights reserved.</p>
        <p>401 Weber St N, Waterloo, ON · Made with 🧡 in Waterloo</p>
      </div>
    </footer>
  );
}
