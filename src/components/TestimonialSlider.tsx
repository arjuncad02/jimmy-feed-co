"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { reviews } from "@/data/reviews";
import StarRating from "./StarRating";

export default function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5500);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reviews.map((review) => (
            <div key={review.id} className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] lg:flex-[0_0_40%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass flex h-full flex-col rounded-4xl p-8 shadow-glass"
              >
                <FaQuoteLeft className="text-3xl text-secondary/40" />
                <StarRating rating={review.rating} className="mt-4" size={16} />
                <p className="mt-4 flex-1 font-body text-base leading-relaxed text-dark/80">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-warm-gradient font-heading text-sm font-bold text-white">
                    {review.initials}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-dark">{review.name}</p>
                    <p className="font-body text-xs text-dark/50">{review.date} · Google Review</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={scrollPrev}
          aria-label="Previous review"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft transition-transform hover:scale-110 hover:text-primary"
        >
          <FaChevronLeft />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selected === i ? "w-8 bg-warm-gradient" : "w-2 bg-dark/15"
              }`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          aria-label="Next review"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft transition-transform hover:scale-110 hover:text-primary"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
