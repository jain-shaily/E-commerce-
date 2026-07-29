import React, { useContext } from "react";
import { MoveRight, Sparkles } from "lucide-react";
import purple from "../assets/purple.avif";
import { themehandler } from "../context/ThemeContext";

const Hero = () => {
  const [theme] = useContext(themehandler);

  return (
    <section
      className={`flex justify-center px-4 py-10 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`w-full max-w-7xl rounded-[40px] px-8 py-12 md:px-16 md:py-16
        flex flex-col-reverse md:flex-row items-center justify-between gap-10
        ${
          theme === "dark"
            ? "bg-gray-800"
            : "bg-yellow-50"
        }`}
      >
        {/* LEFT */}

        <div className="w-full md:w-1/2">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-cyan-700 px-5 py-2 rounded-full font-semibold text-sm">
            <Sparkles size={18} />
            Jaipur Handlooms 2026
          </div>

          <h1
            className={`mt-8 font-extrabold leading-tight
            text-4xl sm:text-5xl lg:text-7xl
            ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Vibrant
            <br />
            Festive Edit
          </h1>

          <p
            className={`mt-6 text-lg leading-8 ${
              theme === "dark"
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            Shaped from lightweight organic cottons,
            delicate hand-block prints and
            traditional motifs. Perfect comfort
            for everyday luxury.
          </p>

          <button className="mt-10 bg-cyan-700 hover:bg-cyan-800 transition text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold">
            Explore Collection
            <MoveRight size={20} />
          </button>

        </div>

        {/* RIGHT */}

        <div className="w-full md:w-1/2 flex justify-center">

          <img
            src={purple}
            alt=""
            className="w-65 sm:w-[320px] lg:w-85 rounded-3xl shadow-2xl object-cover"
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;