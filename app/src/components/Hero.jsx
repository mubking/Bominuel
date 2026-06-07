import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[##020202] overflow-hidden flex items-center">

      {/* Drink image — right side only */}
 {/* Drink image — right side only */}
<div className="absolute right-0 top-0 h-full w-[50%] z-0">
  <Image
    src="/hero-drink.png"
    alt="Bominuel drink"
    fill
    className="object-cover object-right"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
</div>

      {/* Leaf top right */}
      <div className="absolute top-0 right-0 z-10 pointer-events-none">
        <Image src="/leaf-bottom.png" alt="" width={220} height={220} />
      </div>

      {/* Leaf bottom left */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <Image src="/leaf-top.png" alt="" width={220} height={220} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 w-full">

        {/* Our Story label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-serif italic text-white text-lg tracking-wide">Our Story</span>
          <span className="w-10 h-[1px] bg-white/60 mt-3" />
        </div>

        {/* Headline */}
        <div className="flex flex-col mb-10">
          {['HEALTHY.', 'FLAVORFUL.', 'UNAPOLOGETICALLY', 'AFRICAN.'].map((word) => (
            <h1
              key={word}
              className="font-black text-[#A80000] leading-tight tracking-tight"
              style={{
                fontSize: 'clamp(2.8rem, 3vw, 5rem)',
                WebkitTextStroke: '10px white',
                paintOrder: 'stroke fill',
              }}
            >
              {word}
            </h1>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href="/shop"
            className="px-8 py-4 bg-[white] text-[#aa0000] font-semibold text-base hover:bg-[#aa0000] hover:text-[#0d0d0d] transition-colors duration-300"
          >
            Shop Now
          </Link>
          <Link
            href="/free-pack"
            className="px-8 py-4 border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#0d0d0d] transition-colors duration-300"
          >
            Claim Your Free Pack
          </Link>
        </div>
      </div>
    </section>
  );
}