import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full min-h-[135vh] md:min-h-screen bg-[#F9F8F2] py-14 md:py-20 relative overflow-hidden">

      {/* Green leaf decoration */}
      <div className="absolute -bottom-10 -left-8 w-[180px] h-[150px]  pointer-events-none opacity-90">
        <Image
          src="/green-leaf.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Images */}
          <div className="w-full md:w-1/2 flex gap-3">
            <div className="w-1/2">
              <Image
                src="/about-main.png"
                alt="BomiNuel bottle"
                width={280}
                height={380}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-3 mt-6 md:mt-8">
              <Image src="/about-top.png" alt="BomiNuel bottles" width={280} height={185} className="w-full object-cover" />
              <Image src="/about-bottom.png" alt="BomiNuel bottles" width={280} height={185} className="w-full object-cover" />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#AB0000] font-serif italic text-base">About us</span>
              <span className="w-8 h-[1px] bg-[#AB0000]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How BomiNuel Zobo Began
            </h2>

            <p className="text-gray-600 text-base md:text-[18px] leading-relaxed mb-4">
              Hibiscus drink shows up in homes all over the world. In Nigeria, we call it Zobo. In Senegal Bissap, in Jamaica sorrel, in Mexico Agua de Jamaica. Different names, same magic: a deep red drink that&apos;s part celebration, part comfort, part tradition.
            </p>

            <p className="text-gray-600 text-base md:text-[18px] leading-relaxed mb-4">
              The version we grew up with is Nigerian Zobo: bold hibiscus, balanced sweetness, a slow warmth of ginger and spice that catches you on the first sip. When we moved to Brantford, we missed a lot. The food, the noise, the way the air smells before rain back home. But what we really missed was that bottle in the fridge — deep red, beaded with cold, waiting for whoever walked through the door. So we started making it.
            </p>

            <p className="text-gray-600 text-base md:text-[18px] leading-relaxed mb-4">
              First for ourselves, then for friends. Then for friends-of-friends who&apos;d heard there was real Zobo in Brantford. Today, BomiNuel Zobo is shared by Nigerians who grew up on it, Caribbean families who know it as sorrel, and Canadians who&apos;d never heard of it until their neighbour passed them a glass. That&apos;s exactly how we wanted it.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}