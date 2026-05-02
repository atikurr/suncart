import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />

        {/* TOASTER */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={10}
          toastOptions={{
            duration: 3000,
            className: "custom-toast",
            success: {
              className: "toast-success",
            },
            error: {
              className: "toast-error",
            },
            loading: {
              className: "toast-loading",
            },
          }}
        />
      </body>
    </html>
  );
}
