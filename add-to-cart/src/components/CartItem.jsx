import React from "react";
import Cart from "./Cart";

import men from "../assets/men.png";
import women from "../assets/women.png";
import kids_kurta from "../assets/kids_kurta.png";
import footwear from "../assets/footwear.png";
import jwellery from "../assets/jwellery.png";
import { useNavigate } from "react-router-dom";
const data = [
  {
    image: men,
    title: "Men Outfit",
    subtitle: "Explore Department",
    path: "/men",
  },
  {
    image: women,
    title: "Women Outfit",
    subtitle: "Explore Department",
        path: "/women",
  },
  {
    image: kids_kurta,
    title: "Kids Outfit",
    subtitle: "Explore Department",
        path: "/kids",
  },
  {
    image: jwellery,
    title: "Accessories",
    subtitle: "Explore Department",
        path: "/accessories",
  },
  {
    image: footwear,
    title: "Footwear",
    subtitle: "Explore Department",
        path: "/footwear",
  },
];

const CartItem = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-hidden py-6">
      <div className="flex w-max gap-6 animate-marquee">
         
        {[...data, ...data].map((item, index) => (
            <div
          key={index}
          onClick={() => navigate(item.path)}
          className="cursor-pointer"
           >
          <Cart
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
          </div>
        ))}

      </div>
    </div>
  );
};

export default CartItem;

