"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔒 Auth check
  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/signin");
    }
  }, [user, isPending, router]);

  // 📦 Fetch product (only when user ready)
  useEffect(() => {
    if (!id || isPending || !user) return;

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          setProduct(null);
          setLoading(false);
          return;
        }

        const found = data.find((p) => String(p.id) === String(id));
        setProduct(found);
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [id, user, isPending]);

  // ⏳ Loading
  if (loading || isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading product...</p>
      </div>
    );
  }

  // Not found
  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500 text-lg">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-3xl shadow-lg">
        {/* 🖼 Image */}
        <div className="relative w-full h-100 rounded-2xl overflow-hidden">
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* 📄 Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h2>

          <p className="text-sm text-gray-500 mb-2">
            Brand: <span className="font-medium">{product.brand}</span>
          </p>

          <p className="text-sm text-gray-500 mb-2">
            Category: {product.category}
          </p>

          <p className="text-yellow-500 mb-3">⭐ {product.rating}</p>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-2xl font-bold text-orange-500 mb-2">
            ${product.price}
          </p>

          <p className="text-sm text-gray-500 mb-6">Stock: {product.stock}</p>

          {/* 🔘 Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-md hover:shadow-lg transition">
              Buy Now 🛒
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
