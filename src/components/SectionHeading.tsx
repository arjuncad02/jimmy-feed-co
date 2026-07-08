"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <RevealOnScroll>
          <span
            className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-body text-xs font-bold uppercase tracking-widest ${
              light ? "bg-white/10 text-accent" : "bg-primary/10 text-primary"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" /> {eyebrow}
          </span>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.1}>
        <h2 className={`font-heading text-4xl font-extrabold leading-tight md:text-5xl ${light ? "text-white" : "text-dark"}`}>
          {title}
        </h2>
      </RevealOnScroll>
      {description && (
        <RevealOnScroll delay={0.2}>
          <p className={`mt-4 font-body text-lg leading-relaxed ${light ? "text-white/70" : "text-dark/60"}`}>
            {description}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}
