import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background  */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* S */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-orange-500/5 via-transparent to-yellow-500/5 
        dark:from-orange-500/10 dark:to-yellow-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  src="/assets/logo.png"
                  alt="SunCart logo"
                  width={90}
                  height={90}
                  className="dark:brightness-200"
                />
              </Link>
            
            
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Your one-stop summer shop. Explore the best sunglasses, beachwear,
              skincare, and accessories for the sunny season.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-orange-500 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-orange-500 transition"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-orange-500 transition"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-orange-500 transition"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/products"
                  className="hover:text-orange-500 transition"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Accessories"
                  className="hover:text-orange-500 transition"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Skincare"
                  className="hover:text-orange-500 transition"
                >
                  Skincare
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Beach"
                  className="hover:text-orange-500 transition"
                >
                  Beach Gear
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Clothing"
                  className="hover:text-orange-500 transition"
                >
                  Summer Clothing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="hover:text-orange-500 transition"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-orange-500 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-orange-500 transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>support@suncart.com</li>
              <li>+880 1700-000000</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-orange-500 text-white text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-orange-500 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-500 transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
