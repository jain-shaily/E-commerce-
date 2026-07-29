import React, { useState, useContext } from "react";
import logo from "../assets/logo.png";

import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  User,
  Moon,
  X,
  Menu,
  
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { themehandler } from "../context/ThemeContext";


const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [theme,settheme] = useContext(themehandler)
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
const { user, logout } = useContext(AuthContext);
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
   
const handleLogout = async () => {
  await logout();
  navigate("/login");
};

  const handleCategory = (e) => {

    const value = e.target.value;

    setCategory(value);

    if(value){
      navigate(`/${value}`);
    }

  };

  const themehandling=()=>{
     if(theme==='light'){
      settheme('dark')
     } else {
      settheme('light')
     }
    }
  return (
 <>

    <div className="flex justify-evenly items-center h-20 max-w-full">


      {/* Logo */}
      <img
        className="h-20 w-20 rounded-full"
        src={logo}
        alt="Logo"
      />
      {/* Brand */}
      <div>

        <h1 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-xl md:text-3xl font-bold tracking-[0.3em] font-serif`}>
          ELVORA
        </h1>

        <p className={`${theme === "dark" ? "text-white" : "text-gray-500"} text-[7px] md:text-[10px] tracking-[0.4em] uppercase `}>
          Elevate Every Style
        </p>

      </div> 
    <button
    className="md:hidden"
    onClick={() => setOpen(!open)}
     >
    {open ?   <X size={28} /> : <Menu size={28} />}
    </button>

    <div className="hidden md:flex items-center gap-6">
      <Link
        to="/"
        className={`${theme === "dark" ? "text-white" : "text-gray-900"} focus:text-cyan-800 font-bold text-gray-600`}
      >
        Home
      </Link>



      {/* Category */}
      <select
        className={`${theme === "dark" ? "text-white" : "text-gray-900"} h-8 focus:text-cyan-800 font-bold text-gray-600`}
        value={category}
        onChange={handleCategory}
      >

        <option value="">
          Select Category
        </option>

        <option value="men">
          Men
        </option>

        <option value="women">
          Women
        </option>

        <option value="kids">
          Kids
        </option>

        <option value="footwear">
          Premium Footwear
        </option>

        <option value="accessories">
          Elegant Accessories
        </option>

        <option value="winter">
          Winter Special
        </option>

        <option value="summer">
          Summer Special
        </option>

      </select>



      <Link
        to="/shop"
        className={`${theme === "dark" ? "text-white" : "text-gray-900"} focus:text-cyan-800 font-bold text-gray-600`}
      >
        Shop
      </Link>



      <Link
        to="/service"
        className={`${theme === "dark" ? "text-white" : "text-gray-900"} focus:text-cyan-800 font-bold text-gray-600`}
      >
        Service
      </Link>



      <Link
        to="/about"
        className={`${theme === "dark" ? "text-white" : "text-gray-900"} focus:text-cyan-800 font-bold text-gray-600`}
      >
        About
      </Link>



      <Link
        to="/contact"
        className={`${theme === "dark" ? "text-white" : "text-gray-900"} focus:text-cyan-800 font-bold text-gray-600`}
      >
        Contact
      </Link>



      {/* Search */}
      <input
        className="h-7 rounded-3xl border-2 p-4 shadow-2xl"
        type="text"
        placeholder="search premium apparel....."
      />


      {/* Cart */}
      <Link
        to="/cart"
        className="relative"
      >

        <ShoppingBag
          className="hover:text-cyan-700"
        />


        {
          cartCount > 0 && (

            <span
              className="
              absolute 
              -top-3 
              -right-3
              bg-red-500
              text-white
              text-xs
              w-5
              h-5
              rounded-full
              flex
              justify-center
              items-center
              "
            >

              {cartCount}

            </span>

          )
        }


      </Link>
    <button onClick={themehandling}>
  <Moon className="cursor-pointer hover:text-cyan-700" />
</button>

      {/* Sign In */}
     {user ? (
  <button
    onClick={handleLogout}
    className="text-red-600 font-bold"
  >
    Logout
  </button>
) : (
  <Link
    to="/login"
    className="text-cyan-600 font-bold flex items-center gap-1"
  >
    <User />
    Sign In
  </Link>
)}

    </div>
   </div>
    {open && (
  <div className="md:hidden flex flex-col gap-4 p-4 shadow-lg">

    <Link to="/" onClick={() => setOpen(false)}>
      Home
    </Link>

    <Link to="/shop" onClick={() => setOpen(false)}>
      Shop
    </Link>

    <Link to="/service" onClick={() => setOpen(false)}>
      Service
    </Link>

    <Link to="/about" onClick={() => setOpen(false)}>
      About
    </Link>

    <Link to="/contact" onClick={() => setOpen(false)}>
      Contact
    </Link>

 </div>
)}
  
</>
  );

};


export default Navbar;