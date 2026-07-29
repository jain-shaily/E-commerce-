import React from "react";
import { useParams } from "react-router-dom";
import productDetail from "./Product"; // apne path ke hisaab se check kar lena

const Productinfo = () => {
  const { id } = useParams();

  const product = productDetail.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-10 flex flex-col md:flex-row gap-10">
      
      {/* Image */}
      <div className="flex-1">
        <img
          src={product.img}
          alt={product.pattern}
          className="w-full rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <p className="text-red-500 font-bold">Sale : {product.off}</p>

        <h1 className="text-3xl font-bold mt-2">
          {product.pattern}
        </h1>

        <p className="text-white mt-2 bg-red-500 w-fit p-2 rounded-xl">
          {product.arrival}
        </p>

        <p className="mt-5 text-[12px]">
          {product.description}
        </p>

        <h2 className="text-3xl text-green-600 mt-6 font-bold">
          ₹{product.price}
        </h2>

        <button className="bg-cyan-700 text-white px-6 py-3 rounded mt-6">
          Add To Cart
        </button>
      </div>

    </div>
  );
};

export default Productinfo;