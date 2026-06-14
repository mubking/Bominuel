"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const product = {
  id: 1,
  name: "Loveth Pack",
  desc: "Refresh your day with our rich and naturally brewed zobo drink, made from premium hibiscus petals, fresh fruits, and bold flavors. Every sip delivers a perfect blend of sweetness, freshness, and tropical satisfaction.",
  flavors: ["Jaggery", "Classic", "Mixed Berry"],
  price: 68,
  rating: 5.0,
  reviews: 23,
  category: "Mixed Berry Zobo",
  tag: "Our Shop",
  mainImage: "/vicky-packs.png",
  thumbnails: [
    "/Rectangle 8884.png",
    "/Rectangle 8885.png",
    "/Rectangle 8886.png",
    "/Rectangle 8887.png",
  ],
  tabs: {
    description: `Experience the bold and refreshing taste of our freshly brewed zobo drink, crafted from premium hibiscus petals, fresh fruits, and carefully selected spices. Every bottle is packed with rich flavor, vibrant color, and a smooth refreshing finish perfect for every occasion.\n\nOur zobo is made hygienically with natural ingredients to give you a healthy and satisfying drink you can enjoy anytime, whether chilled at home, at parties, or on the go.\n\nRefreshing, flavorful, and proudly made with love.`,
    keyBenefits: [
      "Made from fresh natural hibiscus petals.",
      "Rich in antioxidants and vitamins.",
      "Refreshing and naturally flavorful.",
      "Perfect for parties, events, and daily refreshment.",
      "Hygienically prepared and packaged.",
    ],
  },
};

const similarProducts = [
  {
    id: 2,
    name: "Vicky Pack",
    price: 45,
    oldPrice: 65,
    img: "/vicky-packs.png",
  },
];

export default function ShopDetails() {
  const [selectedFlavor, setSelectedFlavor] = useState("Jaggery");
  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  return (
    <div className="bg-[#F9F8F2] min-h-screen">
      {/* Product Section */}
      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="absolute -bottom-10 -left-8 w-[180px] h-[150px] pointer-events-none opacity-90">
          <Image src="/green-leaf.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute -bottom-20 -left-8 w-[180px] h-[150px] pointer-events-none opacity-90">
          <Image
            src="/green-leaf-down.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute -bottom-478 -left-20 md:-bottom-280 md:-left-20 w-[180px] h-[150px] pointer-events-none opacity-90">
          <Image
          src="/benefits-bottom.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: 4 thumbnails + main image */}
          {/* Left: 4 thumbnails + main image */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails - horizontal on mobile, vertical on desktop */}
            <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible shrink-0">
              {product.thumbnails.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`relative w-[100px] h-[100px] md:w-[132px] md:h-[129px] shrink-0 border-2 transition ${
                    activeThumb === i ? "border-[#AB0000]" : "border-gray-200"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div
              className="relative w-full border mt-15 border-gray-200"
              style={{
                height: "459px",
                width: "459.67px",
                borderRadius: "5px",
              }}
            >
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full md:w-1/2">
            {/* Prev / Next */}

            <div className="flex items-center gap-5">
              <div>
                <h1 className="text-3xl md:text-[48px] font-bold text-gray-900 mb-5">
                  {product.name}
                </h1>
              </div>
              <div className="flex items-center w-[152px] text-[18px] gap-3 text-sm text-gray-500 mb-3">
                <button className="hover:text-[#AB0000] flex items-center gap-5 justify-center transition">
                  <FaArrowLeft />
                  Prev
                </button>
                <span className="text-gray-300">|</span>
                <button className=" flex items-center gap-5 justify-center hover:text-[#AB0000] transition">
                  <div>next</div>
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <button className="hover:text-[#AB0000] transition">← Prev</button>
              <span className="text-gray-300">|</span>
              <button className="hover:text-[#AB0000] transition">Next →</button>
            </div> */}

            <p className="text-gray-500 w-[457px] h-[130px]  text-[18px] leading-relaxed mb-5">
              {product.desc}
            </p>

            {/* Flavor selector */}
            <div className="mb-4">
              <p className="text-gray-700 font-semibold text-sm mb-2">
                Selected Flavor
              </p>
              <div className="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 w-fit">
                <select
                  value={selectedFlavor}
                  onChange={(e) => setSelectedFlavor(e.target.value)}
                  className="bg-transparent text-gray-700 text-sm focus:outline-none pr-4"
                >
                  {product.flavors.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price */}
            <p className="text-[#AB0000] font-bold text-3xl mb-2">
              {product.price}$
            </p>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-[#AB0000]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                {product.rating} Rating
              </span>
              <span className="text-gray-400 text-sm">
                | {product.reviews} Review
              </span>
            </div>

            <p className="text-[#AB0000] text-xs font-semibold mb-4">
              Best Seller
            </p>

            {/* Qty + CTA */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 bg-white">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-11 text-gray-600 hover:text-[#AB0000] text-lg font-bold flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-11 h-11 flex items-center justify-center text-gray-800 font-medium border-x border-gray-300">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-11 text-gray-600 hover:text-[#AB0000] text-lg font-bold flex items-center justify-center"
                >
                  +
                </button>
              </div>
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    img: product.mainImage,
                    price: product.price,
                  })
                }
                className="flex-1 bg-[#AB0000] text-white font-semibold py-3 px-6 w-[289px] text-sm hover:bg-[#7a0d07] transition"
              >
                Continue to Checkout
              </button>
            </div>

            {/* Badge + Meta */}
            <div className="text-sm text-gray-500 space-y-1 mb-4">
              <div className="flex items-center gap-2">
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke="#AB0000"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <span className="text-gray-700 text-xs">
                  100% Natural Ingredients
                </span>
              </div>
              <p>
                <span className="text-gray-700 font-medium">Category:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="text-gray-700 font-medium">Tag:</span>{" "}
                {product.tag}
              </p>
            </div>

            {/* Social share */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 font-medium">Share :</span>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 bg-[#4F4F4F] flex items-center justify-center text-gray-500 hover:border-[#AB0000] hover:text-[#AB0000] transition"
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.847L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.374l-.36-.214-3.732.979 1.001-3.641-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 bg-[#4F4F4F] text-white flex items-center justify-center text-white hover:border-[#AB0000] hover:text-[#AB0000] transition"
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 bg-[#4F4F4F] flex items-center justify-center text-gray-500 hover:border-[#AB0000] hover:text-[#AB0000] transition"
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.747-8.856L1.506 2.25h6.964l4.255 5.643zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300 flex bg-[#4F4F4F] items-center justify-center text-gray-500 hover:border-[#AB0000] hover:text-[#AB0000] transition"
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.983 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.48 4.807z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-300  bg-[#4F4F4F] flex items-center justify-center text-gray-500 hover:border-[#AB0000] hover:text-[#AB0000] transition"
              >
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto px-5 pb-14">
        <div className="flex gap-0 mb-6 border-b border-gray-200">
          {["description", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-semibold capitalize transition -mb-[2px] ${
                activeTab === tab
                  ? "bg-[#AB0000] text-white border-b-2 border-[#AB0000]"
                  : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "reviews"
                ? `Reviews (${product.reviews})`
                : "Description"}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <div className="max-w-3xl">
            {product.tabs.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">
                {para}
              </p>
            ))}
            <p className="text-gray-700 font-semibold text-sm mb-2">
              Key Benefits:
            </p>
            <ul className="space-y-1">
              {product.tabs.keyBenefits.map((b, i) => (
                <li
                  key={i}
                  className="text-gray-600 text-sm flex gap-2 items-start"
                >
                  <span className="text-[] mt-0.5">•</span> {b}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <p className="text-gray-500 text-sm">No reviews yet.</p>
        )}
      </section>

      {/* Similar Products */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Similar Products
        </h2>
        <div className="flex gap-6 flex-wrap">
          {similarProducts.map((sp) => (
            <Link
              key={sp.id}
              href={`/shop/${sp.id}`}
              className="w-[200px] group"
            >
              <div className="relative w-full h-[200px] mb-3 overflow-hidden">
                <Image
                  src={sp.img}
                  alt={sp.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <p className="text-gray-900 font-semibold text-sm">{sp.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#AB0000] font-bold text-sm">
                  ${sp.price}
                </span>
                <span className="text-gray-400 text-xs line-through">
                  ${sp.oldPrice}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
