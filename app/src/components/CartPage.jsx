"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { items, addToCart } = useCart();
  const [quantities, setQuantities] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {}),
  );
  const [removed, setRemoved] = useState([]);
  const [email, setEmail] = useState("");

  const visibleItems = items.filter((item) => !removed.includes(item.id));

  const updateQty = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const removeItem = (id) => setRemoved((prev) => [...prev, id]);

  const subtotal = visibleItems.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || item.quantity),
    0,
  );

  return (
    <section
      className="w-full bg-[#F9F8F2] min-h-screen
      py-14 px-5"
    >
      <div className="absolute display-none bottom-80 -left-8 w-[306.07px] h-[164px] pointer-events-none opacity-90">
        <Image src="/green-leaf.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute display-none bottom-50 right-0 w-[306.07px] h-[164px] pointer-events-none opacity-90">
        <Image src="/image 12.png" alt="" fill className="object-contain" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Table header */}
        <div className="grid grid-cols-5 border-b border-gray-200 pb-3 mb-4 text-sm font-semibold text-gray-700">
          <span>Product</span>
          <span className="text-center">Price</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Total</span>
          <span className="text-center">Remove</span>
        </div>

        {/* Cart items */}
        {visibleItems.length === 0 ? (
          <p className="text-gray-400 text-sm py-8">Your cart is empty.</p>
        ) : (
          visibleItems.map((item) => {
            const qty = quantities[item.id] || item.quantity;
            return (
              <div
                key={item.id}
                className="grid grid-cols-5 items-center py-5 border-b border-gray-100"
              >
                {/* Product */}
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 shrink-0 bg-gray-100 rounded">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      {item.name}
                    </p>
                      {item.flavor && (
    <p className="text-gray-500 text-xs mt-0.5">Flavor: {item.flavor}</p>
  )}
                    <div className="flex text-[#AB0000] mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="12"
                          height="12"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <p className="text-center text-gray-700 text-sm">
                  ${item.price}.00
                </p>

                {/* Quantity */}
                <div className="flex items-center justify-center gap-2">
                  <div
                    className="flex items-center border border-gray-300 bg-white"
                    style={{ borderRadius: "20px" }}
                  >
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-8 h-8 text-gray-600 hover:text-[#AB0000] font-bold flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 h-8 flex items-center justify-center text-gray-800 text-sm border-x border-gray-300">
                      {qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-8 h-8 text-gray-600 hover:text-[#AB0000] font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total */}
                <p className="text-center text-gray-900 font-semibold text-sm">
                  ${(item.price * qty).toFixed(2)}
                </p>

                {/* Remove */}
                <div className="flex justify-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-7 h-7 border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#AB0000] hover:text-[#AB0000] transition text-sm"
                  >
                    ×
                  </button>
                </div>
              </div>
            );
          })
        )}

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row gap-10 mt-12">
          {/* First Bottle On Us */}
          <div className="flex-1">
            <h3 className="text-gray-900 font-bold text-xl mb-3">
              First Bottle&apos;s On Us
            </h3>
            <div className="border border-gray-200 bg-white w-[648px] p-5 rounded-sm">
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                First time here? Drop your email and we&apos;ll send a code for
                a free Zobo bottle with your first order. You&apos;ll also get
                early access.
              </p>
              <div className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:outline-none"
                />
                <button className="bg-[#9F2625] text-white text-sm font-semibold px-5 py-2 hover:bg-[#7a0d07] transition">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Total Bill */}
          <div className=" ">
            <h3 className="text-gray-900 font-bold text-xl mb-3">Total Bill</h3>
            <div className="border border-gray-200 w-[650px] bg-white p-5 rounded-sm">
              <div className="flex justify-between text-sm text-gray-700 mb-3">
                <span>Cart Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                <span>Shipping Charge</span>
                <span>$00.00</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-900 mb-5">
                <span>Total Amount</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#9F2625] text-white font-semibold py-3 text-sm hover:bg-[#7a0d07] transition flex items-center justify-center gap-2">
                Proceed to Checkout
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
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
