"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type Testimonial = {
  blurb: string;
  name: string;
  role: string;
  avatar: string;
  alt: string;
};

const QUOTE = (
  <svg viewBox="0 0 24 24" className="testimonials__quote-icon" aria-hidden="true">
    <path
      d="M9.5 5.5c-2.9 0-5 2.3-5 5.3 0 2.6 1.7 4.4 3.5 5.2-.4 1.7-1.6 2.8-3.6 3.3a.75.75 0 0 0 .19 1.48c4.08-.54 6.41-3.21 6.41-7.1 0-4.5-2.37-8.2-1.5-8.2zM19.5 5.5c-2.9 0-5 2.3-5 5.3 0 2.6 1.7 4.4 3.6 5.2-.4 1.7-1.6 2.8-3.6 3.3a.75.75 0 0 0 .19 1.48c4.08-.54 6.41-3.21 6.41-7.1 0-4.5-2.37-8.2-1.6-8.2z"
      fill="currentColor"
    />
  </svg>
);

const DATA: Testimonial[] = [
  {
    blurb:
      `Ichwan always finds a way to make complex problems sound simple. He's the guy you want on your team when code feels overwhelming — calm, patient, and with a sense of humor.`,
    name: "siti.",
    role: "Bootcamp Teammate",
    avatar: "/testimonial3.jpg", // woman
    alt: "Siti smiling",
  },
  {
    blurb:
      `Working with Ichwan was effortless. He asks sharp questions, ships quickly, and keeps the team grounded when deadlines get noisy.`,
    name: "joni.",
    role: "working partner",
    avatar: "/testimonial2.jpg", // man
    alt: "joni smiling",
  },
  {
    blurb:
      `Reliable, thoughtful, and curious. Ichwan bridges design and engineering smoothly and never hesitates to help others level up.`,
    name: "budi.",
    role: "Project Lead",
    avatar: "/testimonial1.jpg", // man
    alt: "Budi smiling",
  },
];

function useInterval(cb: () => void, delay: number | null) {
  const saved = useRef(cb);
  useEffect(() => void (saved.current = cb), [cb]);
  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => setActive((i) => (i - 1 + DATA.length) % DATA.length);
  const next = () => setActive((i) => (i + 1) % DATA.length);
  useInterval(() => !paused && next(), 5000);

  // swipe support
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    startX.current = null;
  };

  const visible = useMemo(() => {
    const left = (active - 1 + DATA.length) % DATA.length;
    const right = (active + 1) % DATA.length;
    return [left, active, right];
  }, [active]);

  return (
    <section
      id="testimonials"
      className="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="testimonials__inner">
        <h2 className="testimonials__title">Testimonials</h2>

        <div
          className="testimonials__container"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="testimonials__slider">
            {DATA.map((t, i) => {
              const idx = visible.indexOf(i);
              const isCenter = idx === 1;
              
              let positionClass = "testimonials__card--hidden";
              if (idx === 0) positionClass = "testimonials__card--left";
              if (idx === 1) positionClass = "testimonials__card--center";
              if (idx === 2) positionClass = "testimonials__card--right";

              return (
                <article
                  key={i}
                  aria-hidden={!isCenter}
                  className={`testimonials__card ${positionClass}`}
                >
                  <div className="testimonials__quote">{QUOTE}</div>

                  <p className="testimonials__text">
                    "{t.blurb}"
                  </p>

                  <div className="testimonials__author">
                    <img
                      src={t.avatar}
                      alt={t.alt}
                      className="testimonials__avatar"
                    />
                    <div className="testimonials__info">
                      <div className="testimonials__name">{t.name}</div>
                      <div className="testimonials__role">{t.role}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* arrows */}
          <div className="testimonials__arrows">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="testimonials__arrow testimonials__arrow--prev"
            >
              ←
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="testimonials__arrow testimonials__arrow--next"
            >
              →
            </button>
          </div>

          {/* dots */}
          <div className="testimonials__dots">
            {DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
