"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PopularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch(() => setProducts([]));
  }, []);

  //  3 popular products
  const popular = Array.isArray(products) ? products.slice(0, 3) : [];

  return (
    <section className="mt-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold  mb-10">
        Popular Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Popular Products */}
        {Array.isArray(popular) && popular.length > 0 ? (
          popular.map((p, index) => (
            <div key={p.id ?? index} className="bg-white rounded-xl shadow p-4">
              <div className="relative w-full h-52">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded"
                />
              </div>

              <h3 className="mt-2 font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-500">⭐ {p.rating}</p>
              <p className="text-orange-500 font-bold">${p.price}</p>

              <Link href={`/products/${p.id}`}>
                <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No products found
          </p>
        )}
      </div>
    </section>
  );
}
