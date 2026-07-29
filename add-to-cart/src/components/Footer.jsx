import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Mail } from "lucide-react";
import { themehandler } from "../context/ThemeContext";

const Footer = () => {
  const [theme] = useContext(themehandler);

  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-14 rounded-lg object-cover"
              />

              <div>
                <h1 className="text-2xl font-bold tracking-[0.25em] font-serif">
                  ELVORA
                </h1>

                <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
                  Elevate Every Style
                </p>
              </div>
            </div>

            <p
              className={`leading-7 text-sm ${
                theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              We design and curate premium modern garments with
              timeless aesthetics, sustainable craftsmanship,
              and everyday comfort inspired by contemporary
              minimalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold uppercase mb-5">
              Quick Links
            </h2>

            <ul
              className={`space-y-3 text-sm ${
                theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              <li className="hover:text-cyan-600 cursor-pointer">
                Home
              </li>
              <li className="hover:text-cyan-600 cursor-pointer">
                Shop
              </li>
              <li className="hover:text-cyan-600 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-cyan-600 cursor-pointer">
                Services
              </li>
              <li className="hover:text-cyan-600 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-bold uppercase mb-5">
              Categories
            </h2>

            <ul
              className={`space-y-3 text-sm ${
                theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              <li className="hover:text-cyan-600 cursor-pointer">
                Women's Clothing
              </li>
              <li className="hover:text-cyan-600 cursor-pointer">
                Men's Clothing
              </li>
              <li className="hover:text-cyan-600 cursor-pointer">
                Kids Apparel
              </li>
              <li className="hover:text-cyan-600 cursor-pointer">
                Premium Footwear
              </li>
              <li className="hover:text-cyan-600 cursor-pointer">
                Accessories
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-bold uppercase mb-5">
              Join Our Circle
            </h2>

            <p
              className={`text-sm leading-6 mb-5 ${
                theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Subscribe to unlock exclusive launches,
              premium collections and fashion updates.
            </p>

            <form className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email"
                className={`flex-1 px-3 py-3 outline-none bg-transparent text-sm ${
                  theme === "dark"
                    ? "placeholder:text-gray-500 text-white"
                    : "placeholder:text-gray-400 text-black"
                }`}
              />

              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 transition-all p-3 text-white"
              >
                <Mail size={20} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}

        <hr
          className={`my-10 ${
            theme === "dark"
              ? "border-gray-700"
              : "border-gray-300"
          }`}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 ELVORA. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-500">
            <p className="hover:text-cyan-600 cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-cyan-600 cursor-pointer">
              Terms of Service
            </p>

            <p className="hover:text-cyan-600 cursor-pointer">
              Cookies
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;