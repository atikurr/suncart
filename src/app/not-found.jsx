"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { BiArrowBack } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        
        {/* 404 Number */}
        <h1 className="text-7xl font-bold text-orange-500 drop-shadow-sm">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-500 text-sm leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or go back to the homepage.
        </p>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <Link href="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 flex items-center gap-2 shadow-md hover:shadow-lg transition">
              <BiArrowBack />
              Back to Home
            </Button>
          </Link>

          <Link href="/products">
            <Button
              variant="secondary"
              className="rounded-full px-6 py-2 border border-gray-200 hover:bg-gray-100 transition"
            >
              Browse Products
            </Button>
          </Link>
        </div>

        {/* Small hint */}
        <p className="mt-6 text-xs text-gray-400">
          Error code: 404 • OpenMed Solutions
        </p>
      </div>
    </div>
  );
}