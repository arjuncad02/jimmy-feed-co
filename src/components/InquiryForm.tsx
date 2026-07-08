"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function InquiryForm({ variant = "catering" }: { variant?: "catering" | "contact" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-4xl bg-white p-12 text-center shadow-soft"
      >
        <FaCheckCircle className="text-5xl text-primary" />
        <h3 className="mt-4 font-heading text-2xl font-bold text-dark">Thanks — we got it!</h3>
        <p className="mt-2 font-body text-dark/60">
          {variant === "catering"
            ? "We'll reach out shortly to confirm details for your event."
            : "We'll get back to you as soon as possible."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-4xl bg-white p-8 shadow-soft sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-body text-sm font-semibold text-dark/70">Full Name</label>
          <input required type="text" className="w-full rounded-2xl border border-dark/10 bg-light px-4 py-3 font-body text-sm outline-none transition-colors focus:border-primary" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="mb-1.5 block font-body text-sm font-semibold text-dark/70">Phone</label>
          <input required type="tel" className="w-full rounded-2xl border border-dark/10 bg-light px-4 py-3 font-body text-sm outline-none transition-colors focus:border-primary" placeholder="(519) 000-0000" />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block font-body text-sm font-semibold text-dark/70">Email</label>
        <input required type="email" className="w-full rounded-2xl border border-dark/10 bg-light px-4 py-3 font-body text-sm outline-none transition-colors focus:border-primary" placeholder="jane@email.com" />
      </div>
      {variant === "catering" && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block font-body text-sm font-semibold text-dark/70">Event Date</label>
            <input type="date" className="w-full rounded-2xl border border-dark/10 bg-light px-4 py-3 font-body text-sm outline-none transition-colors focus:border-primary" />
          </div>
          <div>
            <label className="mb-1.5 block font-body text-sm font-semibold text-dark/70">Guest Count</label>
            <input type="number" min={1} className="w-full rounded-2xl border border-dark/10 bg-light px-4 py-3 font-body text-sm outline-none transition-colors focus:border-primary" placeholder="10" />
          </div>
        </div>
      )}
      <div>
        <label className="mb-1.5 block font-body text-sm font-semibold text-dark/70">
          {variant === "catering" ? "Tell us about your event" : "Message"}
        </label>
        <textarea rows={4} className="w-full resize-none rounded-2xl border border-dark/10 bg-light px-4 py-3 font-body text-sm outline-none transition-colors focus:border-primary" placeholder="Let us know how we can help..." />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-warm-gradient px-6 py-4 font-heading font-bold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
      >
        {loading ? "Sending..." : variant === "catering" ? "Request a Quote" : "Send Message"}
      </button>
    </form>
  );
}
