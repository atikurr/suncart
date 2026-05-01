"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  //  Loading UI
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading products...</p>
      </div>
    );
  }

  //  No products
  if (products.length === 0) {
    return (
      <div className="text-center mt-10 text-red-500 text-lg">
        No products found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold  mb-10">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
          >
            {/* Image */}
            <div className="relative w-full h-52 rounded-xl overflow-hidden">
              <Image
                src={p.image || "/placeholder.png"}
                alt={p.name}
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <h3 className="mt-3 font-semibold text-lg">{p.name}</h3>

            <p className="text-sm text-gray-500">
              {p.category} • {p.brand}
            </p>

            <p className="text-yellow-500 text-sm mt-1">⭐ {p.rating}</p>

            <p className="font-bold text-orange-500 mt-1">${p.price}</p>

            <Link
              href={`/products/${p.id}`}
              className="block mt-3 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-lg transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
