import React from "react";
import { ArrowRight } from "lucide-react";

const Cart = ({ image, title, subtitle }) => {
  return (
    <div className="">
    <div className="relative w-60 h-80 overflow-hidden shrink-0 border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 ">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
        <h5 className="text-white text-3xl font-semibold">
          {title}
        </h5>

        <p className="text-gray-900 font-semibold uppercase text-sm mt-2 flex items-center gap-2">
          {subtitle}
          <ArrowRight size={18} />
        </p>
      </div>
    </div>
    </div>
  );
};

export default Cart;