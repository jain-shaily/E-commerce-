import React, { useContext } from 'react'
import CategoryCard from './CategoryCard'
import productDetail from './Product';
import { CartContext } from '../context/CartContext';
import { useNavigate } from "react-router-dom";
const productCard = ({ product }) => {
  const {addToCart} = useContext(CartContext)
    const navigate = useNavigate();
  return (
   <div className=' w-full '>
   <div className="w-full  grid grid-cols-1 gap-15 m-4 p-4  items-start md:grid-cols-2 lg:grid-cols-4 ">
 {product.map((item, index) => (
  <div key={item.id}>
    <div
     onClick={() => navigate(`/product/${item.id}`)}
     className="cursor-pointer"
     >
    <CategoryCard
      img={item.img}
      off={item.off}
      type={item.type}
      pattern={item.pattern}
      price={item.price}
      arrival={item.arrival}
      description={item.description}
    />
    </div>
    <button
      onClick={() => addToCart(item)}
      className="bg-cyan-700 text-white px-4 py-2 rounded"
    >
      Add To Cart
    </button>
  </div>
))}
  </div>
</div>
  ) 
}
export default productCard