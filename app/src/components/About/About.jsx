import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import Image from "next/image";
import She from "../She";
import WhyChooseUs from "./WhyChooseUs";
import Host from "../Host";
import Footer from "../Footer";

function About() {
  return (
    <div className="">
      <Navbar />
      <div className="absolute -bottom-130 left-0 w-[200px] h-[760px] pointer-events-none">
        <Image
          src="/green-leaf.png"
          alt=""
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      {/* Hero banner with image + text overlay */}
      <div className="relative w-full h-[410px] overflow-hidden">
        <Image
          src="/about.png"
          alt="about image"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "" }} />

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-white font-bold text-5xl md:text-6xl tracking-wide">
            About
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white text-[20px] transition">
              Home
            </Link>
            <span className="text-white/50 text-[20px]">/</span>
            <span className="text-[#E53437] text-[20px]">About</span>
          </div>
        </div>
      </div>
      <div>
        <She />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <Host />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default About;
