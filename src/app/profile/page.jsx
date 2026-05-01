"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import Link from "next/link";

export default function ProfilePage() {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  // Loading state
  if (isPending) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  // Not logged in UI (BEAUTIFUL)
  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center border border-gray-100">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl">
            <span className="font-bold">!</span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            You are not logged in
          </h2>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 mb-6">
            Please login to access your profile and manage your account.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            <Link
              href="/signin"
              className="px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition shadow-md"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-5 py-2 rounded-full border border-gray-200 text-sm hover:bg-gray-50 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Profile UI
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Card className="max-w-md mx-auto p-8 rounded-3xl shadow-lg border border-gray-100 bg-white text-center hover:shadow-xl transition">
        {/* Avatar */}
        <div className="relative mx-auto mb-4">
          <Avatar className="h-24 w-24 ring-4 ring-orange-100 shadow-md">
            <Avatar.Image
              alt={user?.name || "User"}
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
          </Avatar>

          {/* Status badge */}
          <span className="absolute bottom-1 right-1 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
            Active
          </span>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>

        {/* Email */}
        <p className="text-sm text-gray-500 mt-1">{user?.email}</p>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent my-6" />

        {/* Update Button */}
        <div className="flex justify-center">
          <UpdateUserModal />
        </div>
      </Card>
    </div>
  );
}
