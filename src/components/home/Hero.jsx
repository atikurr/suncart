import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-6">
      {/* FULL HERO CONTAINER */}
      <div className="max-w-7xl mx-auto relative h-125 rounded-3xl overflow-hidden">
        {/* BACKGROUND IMAGE*/}
        <Image
          src="/assets/banner.png"
          alt="Summer Sale"
          fill
          priority
          className="object-cover object-right"
        />

        {/* LEFT FADE */}
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/70 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center px-10">
          <div className="max-w-lg">
            <p className="text-orange-500 font-medium mb-2">Hello Summer</p>

            <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
              SUMMER <br />
              <span className="text-orange-500">SALE</span>
            </h1>

            <div className="mt-4 inline-block bg-white px-6 py-2 rounded-xl shadow-md">
              <span className="font-bold text-lg">
                Up to <span className="text-orange-500">50% OFF</span>
              </span>
            </div>

            <p className="mt-4 text-gray-700">
              Cool Vibes. Hot Deals. Huge Savings!
            </p>

            <Link href="/products">
              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
