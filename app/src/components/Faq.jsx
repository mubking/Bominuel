'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'What is Zobo?',
    a: 'Zobo is a Nigerian hibiscus drink — deep red, naturally tart, lightly sweetened, with hints of ginger and spice. You may know it by other names: sorrel, bissap, karkade, agua de jamaica. Same plant, different traditions.',
  },
  {
    q: 'Is it alcoholic?',
    a: 'No. Zobo is naturally non-alcoholic — safe and enjoyable for everyone, kids included.',
  },
  {
    q: 'How fresh is "fresh"?',
    a: 'We brew the same week we ship. Your Zobo is usually less than 5 days old when it reaches you.',
  },
  {
    q: 'How long does it stay good?',
    a: 'Keep refrigerated and consume within 5-7 days once opened.',
  },
  {
    q: 'Can I customize bottles for my event?',
    a: 'Yes — custom labels, ribbons, and branding available for bulk and event orders.',
  },
  {
    q: 'How fast is delivery?',
    a: 'Usually 1-2 days within Brantford. Event orders need at least 5 days notice.',
  },
];

// Defined OUTSIDE the parent component so it never gets re-created
function Item({ item, index, open, toggle }) {
  return (
    <div className="bg-white p-6 rounded-sm mb-4 last:mb-0">
      <button
        onClick={() => toggle(index)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <span className="text-[#333333] font-semibold text-[15px] leading-snug">{item.q}</span>
        <span className="shrink-0 text-[black] text-xl leading-none mt-0.5">
          {open[index] ? '−' : '+'}
        </span>
      </button>
      {open[index] && (
        <p className="mt-4 text-[#666666] text-[15px] leading-relaxed">{item.a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState({});
  const toggle = (i) => setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  const left  = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="w-full py-16 px-6" style={{ backgroundColor: '#F9F8F2' }}>
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="italic text-[#AB0000] text-base" style={{ fontFamily: 'Georgia, serif' }}>
            We've answered
          </span>
          <span className="inline-block w-10 h-[1.5px] bg-[#AB0000]" />
        </div>

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-900 mb-10" style={{ fontSize: '2.2rem' }}>
          Frequently Asked Questions
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="flex flex-col">
            {left.map((item, i) => (
              <Item key={i} item={item} index={i * 2} open={open} toggle={toggle} />
            ))}
          </div>

          <div className="flex flex-col">
            {right.map((item, i) => (
              <Item key={i} item={item} index={i * 2 + 1} open={open} toggle={toggle} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}