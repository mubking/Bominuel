'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { items, isOpen, toggleCart, closeCart } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) closeCart();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [closeCart]);

  return (
    <nav className="w-full bg-[#0d0d0d] border-b border-white/10 sticky top-0 z-50">
      <div className="w-full px-5 md:px-[73px] h-[70px] md:h-[90px] flex items-center justify-between relative">

        <Link href="/" className="text-white text-xl md:text-2xl font-semibold tracking-tight shrink-0">
          Bo<span className="text-[#ff383c]">minuel</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '/about' },
            { label: 'Shop', href: '/shop' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="text-white hover:text-[#ff383c] transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop icons */}
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
          <div className="relative" ref={cartRef}>
            <button onClick={toggleCart} className="relative text-white hover:text-[#ff383c] transition-colors" aria-label="Cart">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff383c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
            {isOpen && (
              <div className="absolute right-0 top-10 w-[300px] bg-white shadow-xl rounded-sm z-50 p-4">
                <h3 className="text-gray-900 font-semibold text-base mb-3">Cart</h3>
                {items.length === 0 ? (
                  <p className="text-gray-400 text-sm">Your cart is empty.</p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="relative w-14 h-14 shrink-0 bg-gray-100">
                          <Image src={item.img} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium text-sm">{item.name}</p>
                          <p className="text-gray-400 text-xs">{item.quantity} Pack</p>
                          <p className="text-gray-900 font-semibold text-sm">${item.price * item.quantity}</p>
                        </div>
                        <svg width="16" height="16" fill="none" stroke="#999" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </div>
                    ))}
                  </div>
                )}
                {items.length > 0 && (
                  <Link href="/cart" onClick={closeCart} className="mt-4 block text-center bg-[#971009] text-white text-sm font-semibold py-2 hover:bg-[#7a0d07] transition">
                    View Cart
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile right: cart + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <div className="relative" ref={cartRef}>
            <button onClick={toggleCart} className="relative text-white" aria-label="Cart">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff383c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
            {isOpen && (
              <div className="absolute right-0 top-10 w-[280px] bg-white shadow-xl rounded-sm z-50 p-4">
                <h3 className="text-gray-900 font-semibold text-base mb-3">Cart</h3>
                {items.length === 0 ? (
                  <p className="text-gray-400 text-sm">Your cart is empty.</p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0 bg-gray-100">
                          <Image src={item.img} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium text-sm">{item.name}</p>
                          <p className="text-gray-400 text-xs">{item.quantity} Pack</p>
                          <p className="text-gray-900 font-semibold text-sm">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {items.length > 0 && (
                  <Link href="/cart" onClick={closeCart} className="mt-4 block text-center bg-[#971009] text-white text-sm font-semibold py-2">
                    View Cart
                  </Link>
                )}
              </div>
            )}
          </div>

          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? <path d="M18 6 6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/10 px-5 py-6 flex flex-col gap-5">
          {[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '/about' },
            { label: 'Shop', href: '/shop' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="text-base font-medium text-white hover:text-[#ff383c] transition-colors" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}