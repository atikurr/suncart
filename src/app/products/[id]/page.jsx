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

  // Auth check (FIXED)
  useEffect(() => {
    if (isPending) return;

    //  use !user instead of === null
    if (!user) {
      router.replace("/signin");
    }
  }, [user, isPending, router]);

  // Fetch product
  useEffect(() => {
    if (!id) return;

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(id));
        setProduct(found);
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  // Wait for session FIRST
  if (isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p>Checking session...</p>
      </div>
    );
  }

  // Redirect 
  if (!user) return null;

  //  Loading product
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p>Loading product...</p>
      </div>
    );
  }

  //  Not found
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
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>

          <p className="text-sm text-gray-500">Brand: {product.brand}</p>

          <p className="text-sm text-gray-500">Category: {product.category}</p>

          <p className="text-yellow-500">⭐ {product.rating}</p>

          <p className="text-gray-600 mt-3">{product.description}</p>

          <p className="text-2xl font-bold text-orange-500 mt-2">
            ${product.price}
          </p>

          <div className="flex gap-4 mt-5">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-full">
              Buy Now
            </button>

            <button className="px-6 py-3 border rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
