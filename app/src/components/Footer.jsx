import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Main footer — dark */}
      <footer className="w-full py-14 px-6" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">

          {/* Left — About */}
          <div className="max-w-xs">
            <h3 className="text-[#FFFFFF] font-bold text-lg mb-2">About Us.</h3>
            <p className="text-[#E1E1E1] text-sm leading-relaxed mb-6">
              BomiNuel Zobo was born from a love for the traditional Nigerian hibiscus drink known as Zobo.
            </p>

            {/* Opening Hours */}
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#AB0000' }}
              >
                <svg width="20" height="20" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <div>
                <p className="text-[#FFFFFF] text-sm font-semibold">Opening Hours</p>
                <p className="text-[#E1E1E1] text-xs">Mon - Sat(8:00 - 6:00)</p>
                <p className="text-[#E1E1E1] text-xs">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Right — Help links */}
          <div>
            <h3 className="text-[#FFFFFF] font-bold text-lg mb-3">Help?</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/policy" className="text-[#E1E1E1] text-sm hover:text-white transition">
                  Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#E1E1E1] text-sm hover:text-white transition">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </footer>

      {/* Bottom bar — slightly lighter dark with copyright + socials */}
      <div className="w-full py-4 px-6" style={{ backgroundColor: '#4F4F4F' }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-[#C8C8C8] text-xs">
            Copyright &copy; 2026. Designed by PixelSphereCreatives. All Rights Reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-sm bg-[#FFFFFF] flex items-center justify-center hover:bg-[#AB0000] transition">
              <svg width="14" height="14" fill="black" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-sm bg-[#FFFFFF] flex items-center justify-center hover:bg-[#AB0000] transition">
              <svg width="14" height="14" fill="black" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-sm bg-[#FFFFFF] flex items-center justify-center hover:bg-[#AB0000] transition">
              <svg width="14" height="14" fill="black" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="black" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-sm bg-[#FFFFFF] flex items-center justify-center hover:bg-[#AB0000] transition">
              <svg width="14" height="14" fill="black" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" aria-label="Pinterest" className="w-8 h-8 rounded-sm bg-[#FFFFFF] flex items-center justify-center hover:bg-[#AB0000] transition">
              <svg width="14" height="14" fill="black" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.26-5.33 1.26-5.33s-.32-.64-.32-1.59c0-1.49.86-2.6 1.94-2.6.91 0 1.36.69 1.36 1.51 0 .92-.58 2.29-.89 3.56-.25 1.06.53 1.93 1.57 1.93 1.88 0 3.14-2.4 3.14-5.24 0-2.16-1.46-3.77-4.1-3.77-2.99 0-4.84 2.24-4.84 4.73 0 .86.25 1.46.64 1.93.18.21.2.3.14.54-.05.17-.15.58-.19.74-.06.24-.25.33-.46.24-1.32-.54-1.93-2-1.93-3.63 0-2.69 2.27-5.93 6.79-5.93 3.63 0 6.02 2.64 6.02 5.47 0 3.74-2.07 6.55-5.12 6.55-1.02 0-1.99-.55-2.32-1.18l-.63 2.53c-.23.88-.84 1.98-1.25 2.65.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}