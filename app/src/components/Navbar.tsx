'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0d0d0d] border-b border-white/10 sticky top-0 z-50">
      <div className="w-full px-[73px] h-[90px] flex items-center justify-between relative">

        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-semibold tracking-tight shrink-0">
          Bo<span className="text-[#ff383c]">minuel</span>
        </Link>

        {/* Desktop Nav Links — truly centered */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          <li>
            <Link href="/" className="text-[#ff383c] border-b border-[#ff383c] pb-0.5">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-[#ff383c] transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-[#ff383c] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-white hover:text-[#ff383c] transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-[#ff383c] transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-white hover:text-[#ff383c] transition-colors" aria-label="Search">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button className="text-white hover:text-[#ff383c] transition-colors" aria-label="Account">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button className="text-white hover:text-[#ff383c] transition-colors" aria-label="Cart">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path d="M18 6 6 18M6 6l12 12"/>
              : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/10 px-[73px] py-6 flex flex-col gap-5">
          {['Home', 'Blog', 'About', 'Shop', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={`text-base font-medium ${item === 'Home' ? 'text-[#ff383c]' : 'text-white'}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}