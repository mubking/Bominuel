'use client';
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "As an event planner, I got a lot of thumbs up from left, right and center, the Zobo was perfect",
    name: "Stoney Creek",
    role: "Founder & CEO",
    avatar: "/avatar-stoney.png",
  },
  {
    quote: "BomiNuel Zobo was the highlight of our wedding reception. Guests kept asking where to buy it!",
    name: "Amaka Obi",
    role: "Bride",
    avatar: "/avatar-amaka.png",
  },
  {
    quote: "We served it at our naming ceremony and it was a massive hit. Natural, refreshing and beautiful.",
    name: "Tunde Adeyemi",
    role: "Parent",
    avatar: "/avatar-tunde.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '622px' }}>

      {/* LEFT — dark panel with quote */}
      <div
        className="flex flex-col justify-center items-center px-12 py-16"
        style={{ backgroundColor: '#1E1E1E' }}
          >
        {/* Section label */}
        <p className="text-[#C4C4C4] text-xl w-[127.23px] h-[25.79px]  tracking-widest uppercase mb-6">
          Testimonials
        </p>

        {/* Quote marks */}
        <div className="flex gap-1 mb-4">
              <img src="/Quotes.png" alt="" />
        </div>

        {/* Heading */}
        <h2 className="text-white text-5xl font-bold mb-6" style={{ lineHeight: 1.15 }}>
          Our customer say
        </h2>

        {/* Quote text */}
        <p className="text-[#C4C4C4] text-[20px] leading-relaxed mb-8 max-w-sm">
          &ldquo;{current.quote}&rdquo;
        </p>

        {/* Avatar + name */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-white/20">
            <Image
              src={current.avatar}
              alt={current.name}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-base">{current.name}</p>
            <p className="text-[#C4C4C4] text-sm">{current.role}</p>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                backgroundColor: i === active ? '#AB0000' : '#555',
              }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT — product image with play button overlay */}
      <div className="relative w-full h-full" style={{ minHeight: '622px' }}>
        <Image
          src="/testimonial-bottles.png"
          alt="BomiNuel Zobo Hibiscus Drink bottles"
          fill
          className="object-cover"
          sizes="50vw"
        />
        {/* Play button overlay */}
        <button
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Play video"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#FFFFFF', backdropFilter: 'blur(4px)' }}
          >
            <svg width="24" height="24" fill="#B32020" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>

    </section>
  );
}