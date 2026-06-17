"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  return (
    <section className="w-full bg-[#F9F8F2] py-16 px-5 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[500px]">

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <Link
            href="/login"
            className="flex-1 text-center pb-3 text-sm font-semibold text-[#AB0000] border-b-2 border-[#AB0000]"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="flex-1 text-center pb-3 text-sm font-semibold text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition"
          >
            Sign Up
          </Link>
        </div>

        <h2 className="text-gray-900 font-bold text-2xl text-center mb-8">Sign In</h2>

        <form className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="block text-gray-500 text-xs mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 text-sm text-gray-700 bg-transparent focus:outline-none focus:border-[#AB0000] placeholder-gray-300 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-500 text-xs mb-1">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 text-sm text-gray-700 bg-transparent focus:outline-none focus:border-[#AB0000] placeholder-gray-300 transition pr-8"
            />
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute right-0 bottom-2 text-gray-400 hover:text-gray-600 transition"
            >
              {showPassword ? (
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between mt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="accent-[#AB0000] w-3.5 h-3.5"
              />
              <span className="text-gray-500 text-xs">Remember me</span>
            </label>
            <Link href="#" className="text-xs text-gray-400 hover:text-[#AB0000] transition">
              Forget Password
            </Link>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-[#AB0000] hover:bg-[#7a0d07] text-white font-semibold py-3 text-sm transition flex items-center justify-center gap-2 mt-2"
          >
            Login →
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-gray-400 text-xs mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#AB0000] font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}