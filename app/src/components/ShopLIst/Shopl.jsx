"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { toast as toastify, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const flavors = [
  {
    id: "jaggery",
    name: "Jaggery",
    desc: "A rich, natural sweetener made from unrefined cane sugar, jaggery adds a deep caramel-like taste with subtle molasses notes to your zobo. Perfect for those who enjoy a fuller, more traditional sweetness.",
    img: "/Rectangle 8885.png",
  },
  {
    id: "dates",
    name: "Dates",
    desc: "Naturally sweet and fruity, dates add a smooth, mild sweetness with a hint of caramel, creating a lighter and more refreshing zobo experience.",
    img: "/Rectangle 8886.png",
  },
];

export default function ShopList() {
  const [sortBy, setSortBy] = useState("Newest");
  const [show, setShow] = useState("Default");
  const { addToCart } = useCart();

  const [modalProduct, setModalProduct] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState("jaggery");
  const [qty, setQty] = useState(1);

  const openModal = (product) => {
    setModalProduct(product);
    setSelectedFlavor("jaggery");
    setQty(1);
  };

  const closeModal = () => setModalProduct(null);

  const handleAddToCart = () => {
    if (!modalProduct) return;
    addToCart({
      id: modalProduct.id,
      name: modalProduct.name,
      img: modalProduct.img,
      price: modalProduct.price,
  flavor: flavors.find(f => f.id === selectedFlavor)?.name || selectedFlavor,

    });
    toastify.success("Item Added to Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
    setTimeout(() => closeModal(), 1500);
  };

  return (
    <section
      className="w-full py-10 px-5 md:px-10 relative overflow-hidden"
      style={{ backgroundColor: "#F9F8F2" }}
    >
      {/* Green leaf decoration */}
      <div className="absolute -bottom-10 -left-8 w-[180px] h-[150px] pointer-events-none opacity-90">
        <Image src="/green-leaf.png" alt="" fill className="object-contain" />
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
                <div className="flex items-center justify-between mb-3">
                  <h2
                    className="font-bold text-gray-900"
                    style={{ fontSize: "2rem" }}
                  >
                    {p.name}
                  </h2>
                  <span className="text-[#AB0000] font-bold text-3xl">
                    ${p.price}
                  </span>
                </div>
                <p className="text-gray-700 font-medium mb-1">{p.bottles}</p>
                <p className="text-gray-500 text-sm mb-1">{p.desc}</p>
                <p className="text-gray-400 text-sm mb-6">{p.size}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href={`/shopDetails?id=${p.id}`}
                    className="px-8 py-3 border-2 border-[#AB0000] text-[#AB0000] font-semibold text-sm hover:bg-[#AB0000] hover:text-white transition"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => openModal(p)}
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

      {/* Modal */}
      {modalProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-[500px] rounded-lg overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end px-4 pt-3">
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Product image */}
            <div className="relative w-full h-[220px]">
              {modalProduct.inStock && (
                <span className="absolute top-3 left-3 z-10 bg-[#971009] text-white text-xs font-medium px-3 py-1 rounded-sm">
                  In stock
                </span>
              )}
              <Image
                src={modalProduct.img}
                alt={modalProduct.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-gray-900 font-bold text-xl">
                  {modalProduct.name}
                </h3>
                <span className="text-[#AB0000] font-bold text-xl">
                  ${modalProduct.price}
                </span>
              </div>
              <p className="text-gray-500 text-xs mb-1">
                {modalProduct.bottles}
              </p>
              <p className="text-gray-400 text-xs mb-4">{modalProduct.desc}</p>

              <p className="text-gray-900 font-semibold text-sm mb-1">
                Select Flavor
              </p>
              <p className="text-gray-400 text-xs mb-3">Select 1</p>

              <div className="flex flex-col gap-3 mb-5">
                {flavors.map((f) => (
                  <label
                    key={f.id}
                    onClick={() => setSelectedFlavor(f.id)}
                    className={`flex items-start gap-3 p-3 border rounded-md cursor-pointer transition ${
                      selectedFlavor === f.id
                        ? "border-[#AB0000] bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="relative w-12 h-12 shrink-0 rounded overflow-hidden">
                      <Image
                        src={f.img}
                        alt={f.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold text-sm">
                        {f.name}
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 mt-1 shrink-0 flex items-center justify-center ${
                        selectedFlavor === f.id
                          ? "border-[#AB0000]"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedFlavor === f.id && (
                        <div className="w-2 h-2 rounded-full bg-[#AB0000]" />
                      )}
                    </div>
                  </label>
                ))}
              </div>

              {/* Qty + Add to cart */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 bg-white">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 text-gray-600 hover:text-[#AB0000] text-lg font-bold flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-9 h-9 flex items-center justify-center text-gray-800 font-medium border-x border-gray-300 text-sm">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-9 h-9 text-gray-600 hover:text-[#AB0000] text-lg font-bold flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-2.5 bg-[#AB0000] hover:bg-[#7a0d07] text-white font-semibold text-sm transition rounded-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <ToastContainer />
    </section>
  );
}
