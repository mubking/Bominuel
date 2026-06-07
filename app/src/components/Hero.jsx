import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0d0d0d] overflow-hidden flex items-center">

      {/* Drink image — full bg on desktop, reduced on mobile */}
      <div className="absolute right-0 top-0 h-full z-0
        w-full md:w-[55%]
        opacity-40 md:opacity-100">
        <Image
          src="/hero-drink.png"
          alt="Bominuel drink"
          fill
          className="object-cover object-center md:object-right"
          priority
        />
        {/* Gradient — stronger on mobile to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent
          md:bg-gradient-to-r md:from-[#0d0d0d] md:via-[#0d0d0d]/20 md:to-transparent" />
      </div>

      {/* Leaf top right */}
      <div className="absolute top-0 right-0 z-10 pointer-events-none opacity-60 md:opacity-100">
        <Image src="/leaf-bottom.png" alt="" width={220} height={220} />
      </div>

      {/* Leaf bottom left */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none opacity-60 md:opacity-100">
        <Image src="/leaf-top.png" alt="" width={220} height={220} />
      </div>

      {/* Content — centered on mobile, left-aligned on desktop */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 w-full
        flex flex-col items-center text-center
        md:items-start md:text-left
        py-24 md:py-0">

        {/* Our Story label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-serif italic text-white text-base md:text-lg tracking-wide">Our Story</span>
          <span className="w-8 md:w-10 h-[1px] bg-white/60" />
        </div>

        {/* Headline — bigger on mobile using vw, capped on desktop */}
        <div className="flex flex-col mb-8 md:mb-10">
          {['HEALTHY.', 'FLAVORFUL.', 'UNAPOLOGETICALLY', 'AFRICAN.'].map((word) => (
            <h1
              key={word}
              className="font-black text-[#A80000] leading-tight tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                WebkitTextStroke: 'clamp(3px, 0.8vw, 10px) white',
                paintOrder: 'stroke fill',
              }}
            >
              {word}
            </h1>
          ))}
        </div>

        {/* Buttons — full width on mobile, auto on desktop */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#aa0000] font-semibold text-base
              hover:bg-[#aa0000] hover:text-white transition-colors duration-300 text-center"
          >
            Shop Now
          </Link>
          <Link
            href="/free-pack"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-semibold text-base
              hover:bg-white hover:text-[#0d0d0d] transition-colors duration-300 text-center"
          >
            Claim Your Free Pack
          </Link>
        </div>

      </div>
    </section>
  );
}