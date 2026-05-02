"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  if (isPending) return null;

  const handleSignOut = async () => {
    const loadingToast = toast.loading("Logging out..."); 

    try {
      await authClient.signOut();

      toast.success("Logged out successfully", {
        id: loadingToast,
      });
    } catch (err) {
      toast.error("Logout failed", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className=" bg-white px-4">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/assets/logo.png" alt="logo" width={90} height={90} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-orange-500">
              Products
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-orange-500">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/signin"
                className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" color="danger">
                Logout
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-2xl mt-3 p-5 space-y-5">
          {/* Links */}
          <div className="flex flex-col gap-4 font-medium text-gray-700">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Products
            </Link>
            <Link
              href="/profile"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              My Profile
            </Link>
          </div>

          <hr />

          {/* Auth Buttons */}
          {!user ? (
            <div className="flex flex-col gap-3">
              <Link
                href="/signin"
                onClick={() => setMenuOpen(false)}
                className="text-center border py-2 rounded-full hover:bg-gray-100"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="text-center bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <span>{user?.name}</span>
              </div>

              <Button onClick={handleSignOut} size="sm" color="danger">
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
