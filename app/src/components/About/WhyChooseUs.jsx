import Image from 'next/image';

const features = [
  {
    icon: <Image src="/hugeicons_natural-food (1).png" alt="Natural Ingredients" width={48} height={48} />,
    title: '100% Natural Ingredients',
    desc: 'Made with fresh hibiscus, fruits, and carefully selected spices for authentic flavor.',
  },
  {
    icon: <Image src="/nimbus_drink.png" alt="Multiple Flavors" width={48} height={48} />,
    title: 'Multiple Refreshing Flavors',
    desc: 'Enjoy exciting options like Pineapple, Ginger, Berry Blast, and Lemon Mint.',
  },
  {
    icon: <Image src="/healthicons_clean-hands-outline.png" alt="Clean Preparation" width={48} height={48} />,
    title: 'Clean & Hygienic Preparation',
    desc: 'Prepared and packaged under hygienic conditions to ensure freshness and quality every time.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full relative min-h-[120vh] overflow-hidden" style={{ backgroundColor: '#FDF6F0' }}>

      {/* Hibiscus decoration — top right, matches Figma position */}
      <div className="absolute top-[110] right-0 z-10 pointer-events-none hidden md:block">
        <Image
          src="/benefits-bottom.png"
          alt=""
          width={157}
          height={227}
        />
      </div>

      {/* Eyebrow + heading + subtext */}
      <div className="max-w-3xl mx-auto px-5 pt-16 pb-10 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="italic text-[#AB0000] text-base" style={{ fontFamily: 'Georgia, serif' }}>
            Quality drinks
          </span>
          <span className="inline-block w-10 h-[1.5px] bg-[#AB0000]" />
        </div>

        <h2 className="font-bold text-gray-900 mb-4 text-3xl md:text-[2.5rem]" style={{ lineHeight: 1.15 }}>
          Why Choose us
        </h2>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Freshly brewed, naturally refreshing, and made with premium hibiscus petals and fruit blends. We deliver rich taste, quality ingredients, and the perfect zobo experience in every bottle.
        </p>
      </div>

      {/* Full-width image — shorter on mobile */}
      <div className="w-full relative" style={{ height: 'clamp(220px, 30vw, 420px)' }}>
        <Image
          src="/why-choose.png"
          alt="BomiNuel Zobo close up"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* 3 feature columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center px-6 md:px-10 py-10 md:py-12">
            <div className="mb-5">{f.icon}</div>
            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-3">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{f.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}