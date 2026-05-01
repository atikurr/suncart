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

  // 🔐 Auth check
  useEffect(() => {
    if (isPending) return;

    if (!user) {
      router.replace("/signin");
    }
  }, [user, isPending, router]);

  // 📦 Fetch product (user থাকলেই)
  useEffect(() => {
    if (!id || isPending || !user) return;

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
  }, [id, user, isPending]);

  if (isPending || loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Image src={product.image} alt={product.name} width={400} height={300} />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}
