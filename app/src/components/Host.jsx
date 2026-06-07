'use client';
import { useState } from 'react';
import Image from 'next/image';

const occasions = [
  { label: 'Birthday', img: '/occasion-birthday.png' },
  { label: 'Weddings', img: '/occasion-wedding.png' },
  { label: 'Naming Ceremonies', img: '/occasion-naming.png' },
  { label: 'School Events', img: '/occasion-school.png' },
];

export default function Host() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => (s - 1 + occasions.length) % occasions.length);
  const next = () => setStart((s) => (s + 1) % occasions.length);

  const getVisible = (count) =>
    Array.from({ length: count }, (_, i) => occasions[(start + i) % occasions.length]);

  return (
    <>
      {/* Wave divider */}
      <div className="w-full overflow-hidden" style={{ backgroundColor: 'white', lineHeight: 0 }}>
        <svg
          viewBox="0 0 1365 88"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '88px', display: 'block' }}
        >
          <path
            d="M0,88 C100,88 150,20 300,20 C450,20 480,88 682,10 C884,-68 900,88 1065,20 C1215,20 1265,88 1365,88 L1365,88 L0,88 Z"
            fill="#FFE6E6"
          />
        </svg>
      </div>

      <section className="w-full" style={{ backgroundColor: '#FFE6E6' }}>
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-20">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[#AB0000] text-base italic" style={{ fontFamily: 'Georgia, serif' }}>
              Created for
            </span>
            <span className="inline-block w-10 h-[1.5px] bg-[#AB0000]" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-gray-900 mb-10 text-4xl md:text-5xl font-extrabold">
            Hosting Something?
          </h2>

          {/* Carousel */}
          <div className="flex items-center gap-3">

            {/* PREV */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="shrink-0 w-11 h-11 flex items-center justify-center bg-[#DDA1A1] hover:bg-[#AB0000] transition shadow cursor-pointer"
            >
              <svg width="18" height="18" fill="none" stroke="black" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Mobile: 1 card */}
            <div className="flex-1 grid grid-cols-1 gap-3 sm:hidden">
              {getVisible(1).map((item, i) => (
                <div key={`${item.label}-${i}`} className="flex flex-col gap-3">
                  <div className="relative overflow-hidden w-full" style={{ height: '320px' }}>
                    <Image src={item.img} alt={item.label} fill className="object-cover object-center" sizes="90vw" />
                  </div>
                  <p className="text-center font-bold text-[#5A5959] text-xl">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Tablet: 2 cards */}
            <div className="flex-1 hidden sm:grid grid-cols-2 gap-3 lg:hidden">
              {getVisible(2).map((item, i) => (
                <div key={`${item.label}-${i}`} className="flex flex-col gap-3">
                  <div className="relative overflow-hidden w-full" style={{ height: '360px' }}>
                    <Image src={item.img} alt={item.label} fill className="object-cover object-center" sizes="45vw" />
                  </div>
                  <p className="text-center font-bold text-[#5A5959] text-xl">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Desktop: 4 cards */}
            <div className="flex-1 hidden lg:grid grid-cols-4 gap-3">
              {getVisible(4).map((item, i) => (
                <div key={`${item.label}-${i}`} className="flex flex-col gap-3">
                  <div className="relative overflow-hidden w-full" style={{ height: '420px' }}>
                    <Image src={item.img} alt={item.label} fill className="object-cover object-center" sizes="25vw" />
                  </div>
                  <p className="text-center font-bold text-[#5A5959] text-xl">{item.label}</p>
                </div>
              ))}
            </div>

            {/* NEXT */}
            <button
              onClick={next}
              aria-label="Next"
              className="shrink-0 w-11 h-11 flex items-center justify-center bg-[#AB0000] hover:bg-[#880000] transition shadow cursor-pointer"
            >
              <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

          </div>
        </div>
      </section>
    </>
  );
}