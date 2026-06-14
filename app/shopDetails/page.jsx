import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ShopDetails from '../src/components/ShopDetails';

export default function Page() {
  return (
    <div>
      <Navbar />
      {/* Hero banner */}
      <div className="relative w-full h-[410px] overflow-hidden">
        <Image src="/unsplash_4ycv3Ky1ZZU.png" alt="shop banner" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white font-bold text-5xl md:text-6xl tracking-wide">Shop Details</h1>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white text-[20px] transition">Home</Link>
            <span className="text-white/50 text-[20px]">/</span>
            <span className="text-[#E53437] text-[20px]">Details</span>
          </div>
        </div>
      </div>
      <ShopDetails />
      <Footer />
    </div>
  );
}