import Navbar from '@/app/src/components/Navbar';
import Footer from '@/app/src/components/Footer';
import Terms from '../src/components/Terms';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[410px] overflow-hidden">
        <Image src="/policy.png" alt="terms banner" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white font-bold text-4xl md:text-5xl tracking-wide">Terms</h1>
          <div className="flex items-center gap-2 text-white/80">
            <Link href="/" className="hover:text-white text-base transition">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-[#E53437] text-base">Terms</span>
          </div>
        </div>
      </div>
      <Terms />
      <Footer />
    </div>
  );
}