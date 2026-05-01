"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TopBrands() {
  const brands = [
    { name: "Nike", logo: "/assets/Oneill.png" },
    { name: "Adidas", logo: "/assets/addidas.png" },
    { name: "Puma", logo: "/assets/puma.png" },
    { name: "Zara", logo: "/assets/zara.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-14">Top Brands</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {brands.map((brand, i) => (
          <motion.div
            key={i}
            // scroll animation
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            // hover animation
            whileHover={{ scale: 1.08 }}
            className="group bg-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-md hover:shadow-2xl hover:shadow-orange-200 transition duration-300 cursor-pointer border border-gray-100"
          >
            {/* Logo */}
            <div className="relative w-20 h-20 mb-4">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>

            {/* Name */}
            <p className="font-semibold text-gray-600 group-hover:text-orange-500 transition">
              {brand.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
