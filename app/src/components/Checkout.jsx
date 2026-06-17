"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const { items } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
    billingSame: true,
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 0;
  const tax = 0;
  const total = subtotal - discount + tax;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  return (
    <section className="w-full bg-[#F9F8F2] py-14 px-5 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left: Shipping Address Form */}
          <div className="flex-1">
            <div className="bg-[#F9F8F2] border border-gray-200 p-6 rounded-sm">
              <h2 className="text-gray-900 font-bold text-lg mb-6 pb-3 border-b border-gray-100">
                Shipping Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-600 text-xs mb-1">First name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-xs mb-1">Last name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-600 text-xs mb-1">Email address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-xs mb-1">Phone number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-600 text-xs mb-1">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-xs mb-1">Country</label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm bg-[#F9F8F2]"
                  >
                    <option value="">Choose country</option>
                    <option value="CA">Canada</option>
                    <option value="US">United States</option>
                    <option value="NG">Nigeria</option>
                    <option value="GB">United Kingdom</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-600 text-xs mb-1">City</label>
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm bg-[#F9F8F2]"
                  >
                    <option value="">Choose city</option>
                    <option value="brantford">Brantford</option>
                    <option value="toronto">Toronto</option>
                    <option value="hamilton">Hamilton</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 text-xs mb-1">Zip code</label>
                  <input
                    name="zipCode"
                    value={form.zipCode}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-600 text-xs mb-1">Address1</label>
                  <input
                    name="address1"
                    value={form.address1}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-xs mb-1">Address 2</label>
                  <input
                    name="address2"
                    value={form.address2}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#AB0000] rounded-sm"
                  />
                </div>
              </div>

              {/* Billing Address */}
              <div className="border-t border-gray-100 pt-5">
                <h2 className="text-gray-900 font-bold text-lg mb-3">Billing Address</h2>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="billingSame"
                    checked={form.billingSame}
                    onChange={handleChange}
                    className="accent-[#AB0000] w-4 h-4"
                  />
                  <span className="text-gray-500 text-sm">Same as shipping address</span>
                </label>
              </div>

              {/* Bottom buttons */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => router.push('/cart')}
                  className="flex items-center gap-2 text-gray-500 text-sm hover:text-[#AB0000] transition"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to cart
                </button>
                <button className="bg-[#AB0000] hover:bg-[#7a0d07] text-white font-semibold text-sm px-8 py-3 transition flex items-center gap-2">
                  Proceed to shipping
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-[340px] shrink-0">
            <div className="bg-[#F9F8F2] border border-gray-200 p-6 rounded-sm">
              {/* Cart items */}
              <div className="flex flex-col gap-4 mb-5 pb-5 border-b border-gray-100">
                {items.length === 0 ? (
                  <p className="text-gray-400 text-sm">No items in cart.</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="relative w-14 h-14 shrink-0 bg-gray-100 rounded-sm overflow-hidden">
                        <Image src={item.img} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-semibold text-sm">{item.name}</p>
                        <p className="text-gray-400 text-xs">500 ML · {item.quantity}</p>
                        {item.flavor && (
                          <p className="text-gray-400 text-xs">{item.flavor}</p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Price breakdown */}
              <div className="flex flex-col gap-2 mb-5 pb-5 border-b border-gray-100 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Sub-total</span>
                  <span className="font-semibold text-gray-900">{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-gray-900">-</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="text-gray-900">-</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between text-gray-900 font-bold text-base mb-5">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Make Payment */}
              <button className="w-full bg-[#AB0000] hover:bg-[#7a0d07] text-white font-semibold text-sm py-3 transition flex items-center justify-center gap-2">
                Make Payment
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}