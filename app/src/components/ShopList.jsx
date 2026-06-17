import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Shopl from './ShopLIst/Shopl';
import Navbar from './Navbar';
import Footer from './Footer';
function ShopList() {
  return (
      <div>
          <div>
              <Navbar/>
          </div>
            <div className="relative w-full h-[410px] overflow-hidden">
        <Image
          src="/unsplash_4ycv3Ky1ZZU (1).png"
          alt="about image"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Dark overlay */}
{/* Dark overlay */}
<div className="absolute inset-0 bg-black/40" />
        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white font-bold text-5xl md:text-6xl tracking-wide">
            Our Shop
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white text-[20px] transition">
              Home
            </Link>
            <span className="text-white/50 text-[20px]">/</span>
            <span className="text-[#E53437] text-[20px]">Shop</span>
          </div>
        </div>
          </div>
          <div>
                <Shopl/>
          </div>
          <div>
              <Footer/>
          </div>
    </div>
  )
}

export default ShopList