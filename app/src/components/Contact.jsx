"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission
  };

  return (
    <section className="w-full bg-[#F9F8F2] py-14 px-5 relative overflow-hidden">
      {/* Green leaf decorations */}
      <div className="hidden md:block absolute top-10 right-0 w-[180px] h-[180px] pointer-events-none opacity-80">
  <Image src="/green-leaf.png" alt="" fill className="object-contain" />
</div>
<div className="hidden md:block absolute bottom-20 left-0 w-[180px] h-[180px] pointer-events-none opacity-80">
  <Image
    src="/green-leaf.png"
    alt=""
    fill
    className="object-contain scale-x-[-1]"
  />
</div>
   

      <div className="max-w-6xl mx-auto">
        {/* Top row: Form + Product Image */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Make an Enquiry Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white border h-[670px] w-[563px] border-gray-200 rounded-sm p-8 flex flex-col">
              {" "}
              <h2 className="text-gray-900 font-bold text-2xl text-center mb-1">
                Make an Enquiry?
              </h2>
              <p className="text-gray-400 text-sm text-center mb-8">
                You will get a response within 24 hours. We will explain in
                details.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col h-full">
                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full border-b border-gray-200 px-0 py-3 text-sm text-gray-700 bg-transparent focus:outline-none focus:border-[#AB0000] placeholder-gray-400 transition"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="w-full border-b border-gray-200 px-0 py-3 text-sm text-gray-700 bg-transparent focus:outline-none focus:border-[#AB0000] placeholder-gray-400 transition"
                    />
                  </div>
                  <div>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full border-b border-gray-200 px-0 py-3 text-sm text-gray-700 bg-transparent focus:outline-none focus:border-[#AB0000] placeholder-gray-400 transition"
                    />
                  </div>
                  {/* Message stretches to fill remaining height */}
                  <div className="flex-1 flex flex-col">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="flex-1 w-full border-b border-gray-200 px-0 py-3 text-sm text-gray-700 bg-transparent focus:outline-none focus:border-[#AB0000] placeholder-gray-400 transition resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 mt-4 bg-transparent text-gray-700 font-semibold text-sm hover:text-[#AB0000] transition group"
                >
                  Send Message
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Product Image */}
          <div className="w-[463px] lg:w-1/2 relative min-h-[659px] rounded-sm overflow-hidden">
            <Image
              src="/contacts.png"
              alt="BomiNuel Zobo Hibiscus"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom row: Illustration + Contact Info */}
       {/* Bottom row: Illustration + Contact Info */}
        <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[738px]">

          {/* Product illustration - left side */}
          <div className="w-full lg:w-1/2 relative min-h-[738px]">
            <Image
              src="/Frame 5.png"
              alt="BomiNuel bottles"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Contact us info - right side */}
          <div className="w-full lg:w-1/2 bg-[#F9F8F2] px-10 py-12 flex flex-col justify-center">
            <h2 className="text-gray-900 font-bold text-3xl mb-3">Contact us</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              If you have concerns regarding an order, please contact us as soon
              as possible so that we can assist you promptly.
            </p>

            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div className="flex  flex-col  gap-4 border border-gray-200 bg-white rounded-sm px-4 py-3">
                <div className="w-8 h-8 rounded-full  flex items-center justify-center shrink-0">
                  <svg width="24" height="24" fill="#AB0000" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">00965 - 96659986</p>
              </div>

              {/* Hours */}
              <div className="flex flex-col gap-4 border border-gray-200 bg-white rounded-sm px-4 py-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  <svg width="24" height="24" fill="#AB0000" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">Sun - Sat / 10:00 AM - 8:00 PM</p>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-4 border border-gray-200 bg-white rounded-sm px-4 py-3">
                <div className="w-8 h-8 rounded-full  flex items-center justify-center shrink-0">
                  <svg width="24" height="24" fill="#AB0000" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold text-sm">BomiNuel Zobo Hibiscus</p>
                  <p className="text-gray-500 text-xs">Brantford, Ontario, Canada</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4 border border-gray-200 bg-white rounded-sm px-4 py-3">
                <div className="w-8 h-8 rounded-full  flex items-center justify-center shrink-0">
                  <svg width="24" height="24" fill="#AB0000" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">support@bominuel.ca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
