import type { Metadata } from "next";
import Link from "next/link";
import { FaStar, FaMapMarkerAlt, FaClock, FaPhoneAlt, FaDirections, FaArrowRight } from "react-icons/fa";
import { sandwiches } from "@/data/sandwiches";
import { siteConfig, whyJimmys } from "@/data/site";
import SandwichCard from "@/components/SandwichCard";
import IconCard from "@/components/IconCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import FloatingIngredients from "@/components/FloatingIngredients";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeading from "@/components/SectionHeading";
import PhotoFrame from "@/components/PhotoFrame";
import InstagramGallery from "@/components/InstagramGallery";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Jimmy's Feed Co | Waterloo's Favourite Sandwich Shop",
  description: "Fresh sandwiches, wraps, catering and more in Waterloo. Fresh ingredients, generous portions, affordable prices.",
};

const featured = sandwiches.filter((s) => s.popular).concat(sandwiches.slice(0, 6 - sandwiches.filter((s) => s.popular).length)).slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-warm-radial pt-28">
        <FloatingIngredients />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/40 blur-3xl" />

        <div className="container-custom relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
                🥪 Est. Waterloo · Family Owned
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1 className="mt-6 font-heading text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Waterloo&apos;s Favourite <span className="text-dark">Sandwich Shop</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-white/90">
                Fresh ingredients. Generous portions. Affordable prices. Every sandwich, stacked high and made with love, right here on Weber St N.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton>
                  <Link
                    href="/menu"
                    className="flex items-center gap-2 rounded-full bg-dark px-8 py-4 font-heading font-bold text-white shadow-soft-lg transition-transform hover:scale-105"
                  >
                    View Menu <FaArrowRight />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-heading font-bold text-primary shadow-soft-lg transition-transform hover:scale-105"
                  >
                    Order Online
                  </a>
                </MagneticButton>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <div className="flex items-center gap-1 font-heading text-3xl font-extrabold text-white">
                    <FaStar className="text-accent" />
                    <AnimatedCounter value={4.8} decimals={1} />
                  </div>
                  <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wide text-white/70">Rating</p>
                </div>
                <div>
                  <AnimatedCounter value={423} suffix="+" className="font-heading text-3xl font-extrabold text-white" />
                  <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wide text-white/70">Reviews</p>
                </div>
                <div>
                  <span className="font-heading text-3xl font-extrabold text-white">100%</span>
                  <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wide text-white/70">Locally Loved</p>
                </div>
                <div>
                  <span className="font-heading text-3xl font-extrabold text-white">Family</span>
                  <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wide text-white/70">Owned</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2} y={0} className="relative">
            <div className="relative mx-auto aspect-square max-w-lg">
              <div className="absolute inset-6 animate-spin-slow rounded-full border-2 border-dashed border-white/30" />
              <PhotoFrame
                src="/images/hero/hero-sandwich.jpg"
                alt="Signature sandwich from Jimmy's Feed Co."
                rounded="rounded-[3rem]"
                aspect="aspect-square"
                priority
                className="shadow-soft-lg"
              />
              <div className="glass absolute -bottom-6 -left-6 flex items-center gap-3 rounded-3xl px-5 py-4 shadow-glass">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-heading text-sm font-bold text-dark">4.8 / 5.0</p>
                  <p className="font-body text-xs text-dark/60">423+ Google Reviews</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FEATURED SANDWICHES */}
      <section className="relative bg-light py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Fan Favourites"
            title="Featured Sandwiches"
            description="Stacked high with premium meats, fresh vegetables, and Jimmy's signature sauces — every sandwich is built to order."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <SandwichCard key={s.number} sandwich={s} index={i} />
            ))}
          </div>
          <RevealOnScroll className="mt-14 flex justify-center">
            <Link
              href="/menu"
              className="animated-underline flex items-center gap-2 font-heading text-lg font-bold text-primary"
            >
              View Full Menu <FaArrowRight />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHY JIMMY'S */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="container-custom">
          <SectionHeading eyebrow="Why Jimmy's?" title="Made Fresh. Made Right." center />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyJimmys.map((item, i) => (
              <IconCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative overflow-hidden bg-light py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-custom relative">
          <SectionHeading eyebrow="Customer Love" title="What Waterloo is Saying" center />
          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="container-custom grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <PhotoFrame src="/images/about/storefront.jpg" alt="The Jimmy's Feed Co. family" />
            <div className="glass absolute -right-6 -top-6 hidden rounded-3xl px-6 py-4 shadow-glass sm:block">
              <p className="font-heading text-2xl font-extrabold text-primary">Family Owned</p>
              <p className="font-body text-xs text-dark/60">Serving Waterloo with pride</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A Waterloo Favourite, Built on Family"
              description="Jimmy's Feed Co. started with a simple idea: fresh, generous sandwiches at a fair price, served with genuine care. Every sandwich we make carries that same promise today."
            />
            <RevealOnScroll delay={0.25}>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-warm-gradient px-8 py-4 font-heading font-bold text-white shadow-glow transition-transform hover:scale-105"
              >
                Read Our Story <FaArrowRight />
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative bg-light py-24">
        <div className="container-custom">
          <SectionHeading eyebrow="Follow Along" title="Fresh From Our Kitchen" center />
          <div className="mt-14">
            <InstagramGallery />
          </div>
          <RevealOnScroll className="mt-10 flex justify-center">
            <a
              href="https://instagram.com/jimmysfeedco"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-underline flex items-center gap-2 font-heading text-lg font-bold text-primary"
            >
              Follow @jimmysfeedco on Instagram
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* CATERING TEASER */}
      <section className="relative overflow-hidden bg-dark py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="container-custom relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Catering"
              title="Feeding Waterloo, One Platter at a Time"
              description="From office lunches to birthday parties, Jimmy's catering platters make every gathering easier — and tastier. Fresh sandwich trays built for groups of all sizes."
              light
            />
            <RevealOnScroll delay={0.25}>
              <Link
                href="/catering"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-warm-gradient px-8 py-4 font-heading font-bold text-white shadow-glow transition-transform hover:scale-105"
              >
                Request Catering <FaArrowRight />
              </Link>
            </RevealOnScroll>
          </div>
          <PhotoFrame src="/images/catering/wrap-tray.jpg" alt="Jimmy's Feed Co. catering platter" />
        </div>
      </section>

      {/* LOCATION */}
      <section className="relative bg-light py-24">
        <div className="container-custom">
          <SectionHeading eyebrow="Visit Us" title="Find Us in Waterloo" center />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
            <RevealOnScroll className="overflow-hidden rounded-4xl shadow-soft lg:col-span-3">
              <iframe
                title="Jimmy's Feed Co. location map"
                src="https://www.google.com/maps?q=401+Weber+St+N,+Waterloo,+ON&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.15} className="lg:col-span-2">
              <div className="flex h-full flex-col justify-between gap-8 rounded-4xl bg-white p-8 shadow-soft">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-xl text-primary" />
                    <div>
                      <p className="font-heading font-bold text-dark">Address</p>
                      <p className="font-body text-sm text-dark/60">{siteConfig.address.full}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="mt-1 text-xl text-primary" />
                    <div>
                      <p className="font-heading font-bold text-dark">Hours Today</p>
                      <p className="font-body text-sm text-dark/60">9:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="mt-1 text-xl text-primary" />
                    <div>
                      <p className="font-heading font-bold text-dark">Phone</p>
                      <a href={`tel:${siteConfig.phoneHref}`} className="font-body text-sm text-dark/60 hover:text-primary">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=401+Weber+St+N,+Waterloo,+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-dark px-6 py-4 font-heading font-bold text-white transition-transform hover:scale-105"
                >
                  <FaDirections /> Get Directions
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
