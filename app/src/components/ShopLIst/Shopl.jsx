"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const products = [
  {
    id: 1,
    name: "Loveth Pack",
    bottles: "12 bottles",
    desc: "Includes Ginger, spice and natural flavors",
    size: "500 ML",
    price: 68,
    img: "/loveth-pack.png",
    inStock: true,
    layout: "image-left",
  },
  {
    id: 2,
    name: "Vicky Pack",
    bottles: "12 bottles",
    desc: "Includes Ginger, spice and natural flavors",
    size: "500 ML",
    price: 45,
    img: "/vicky-pack.png",
    inStock: true,
    layout: "image-right",
  },
];

export default function ShopList() {
  const [sortBy, setSortBy] = useState("Newest");
  const [show, setShow] = useState("Default");
  const { addToCart } = useCart();

  return (
    <section
      className="w-full min-h-[170vh] md:min-h-[120vh] md: py-10 px-5 md:px-10  relative overflow-hidden"
      style={{ backgroundColor: "#F9F8F2" }}
    >
      {/* Green leaf decoration */}
      <div className="absolute -bottom-10 -left-8 w-[180px] h-[150px] pointer-events-none opacity-90">
        <Image
          src="/green-leaf.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Sort / Filter bar */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium text-sm">Sort By :</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 bg-white text-gray-700 text-sm px-3 py-2 rounded-sm focus:outline-none"
            >
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium text-sm">Show :</span>
            <select
              value={show}
              onChange={(e) => setShow(e.target.value)}
              className="border border-gray-300 bg-white text-gray-700 text-sm px-3 py-2 rounded-sm focus:outline-none"
            >
              <option>Default</option>
              <option>6 per page</option>
              <option>12 per page</option>
            </select>
          </div>
        </div>

        {/* Product rows */}
        <div className="flex flex-col gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className={`flex flex-col ${p.layout === "image-right" ? "md:flex-row-reverse" : "md:flex-row"} gap-0 overflow-hidden`}
              style={{ backgroundColor: "#F9F8F2" }}
            >
              {/* Image side */}
              <div
                className="w-full md:w-1/2 relative"
                style={{ minHeight: "380px" }}
              >
                {p.inStock && (
                  <span className="absolute top-4 left-4 z-10 bg-[#971009] text-white text-xs font-medium px-3 py-1 rounded-sm shadow-sm">
                    In stock
                  </span>
                )}
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text side */}
              <div className="w-full md:w-1/2 flex flex-col px-8 md:px-14 py-10">
                {/* Name + Price on same row */}
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold text-gray-900" style={{ fontSize: "2rem" }}>
                    {p.name}
                  </h2>
                  <span className="text-[#AB0000] font-bold text-3xl">${p.price}</span>
                </div>

                <p className="text-gray-700 font-medium mb-1">{p.bottles}</p>
                <p className="text-gray-500 text-sm mb-1">{p.desc}</p>
                <p className="text-gray-400 text-sm mb-6">{p.size}</p>

                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href={`/shopDetails`}
                    className="px-8 py-3 border-2 border-[#AB0000] text-[#AB0000] font-semibold text-sm hover:bg-[#AB0000] hover:text-white transition"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() =>
                      addToCart({
                        id: p.id,
                        name: p.name,
                        img: p.img,
                        price: p.price,
                      })
                    }
                    className="px-8 py-3 bg-[#AB0000] text-white font-semibold text-sm hover:bg-[#7a0d07] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}