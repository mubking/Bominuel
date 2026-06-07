import Image from 'next/image';

export default function Benefits() {
  return (
    <section className="w-full bg-[#F9F8F2] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-10 items-center">

          {/* Text */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#AB0000] font-serif italic text-base">Quality drinks</span>
              <span className="w-8 h-[1px] bg-[#AB0000]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              What We Stand For
            </h2>

            <p className="text-gray-600 text-base md:text-xl leading-relaxed mb-8">
              You might know it as Zobo, or Sorrel, or Bissap, Karkade, Agua de Jamaica, Wonjo. Wherever you've had it, the soul of the drink is the same — hibiscus, steeped slow, sweetened just right.
            </p>

            <div className="flex items-start gap-4 mb-5 p-4 border bg-[#FEFEFE] border-gray-200">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#565656" strokeWidth="1.5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#4F4F4F] text-base md:text-[20px] mb-1">Real ingredients. Real flavour</h4>
                <p className="text-gray-500 text-sm md:text-[16px] leading-relaxed">
                  Hibiscus petals, fresh fruit, natural spices, healthy drink. That's it.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-5 p-4 border bg-[#FEFEFE] border-gray-200">
              <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#000000" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base md:text-[20px] mb-1">Roots without walls</h4>
                <p className="text-gray-500 text-sm md:text-[16px] leading-relaxed">
                  This drink came from somewhere, we honour that and we share it with anyone who wants a taste.
                </p>
              </div>
            </div>
          </div>

          {/* Images — fixed overflow on mobile */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] overflow-hidden">
            <div className="absolute top-0 left-0 w-[65%] h-[75%] z-0">
              <Image src="/benefit-top.png" alt="BomiNuel bottles" fill className="object-cover object-center" sizes="(max-width: 768px) 65vw, 35vw" />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-[85%] z-10">
              {/* removed right-[-20px] — was causing horizontal scroll on mobile */}
              <Image src="/benefit-bottom.png" alt="BomiNuel bottle splash" fill className="object-cover object-center" sizes="(max-width: 768px) 60vw, 35vw" />
            </div>
            <div className="absolute top-0 right-0 z-0 pointer-events-none hidden md:block">
              <Image src="/benefits-bottom.png" alt="" width={270} height={250} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}