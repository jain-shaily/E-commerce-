import React from 'react'
import ProductCard from '../components/productCard'
import productDetail from '../components/Product'

const Footwear = () => {

  const footProducts = productDetail.filter(
    item => item.type === "FOOTWEAR"
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Footwear's Collection</h1>

      <ProductCard product={footProducts} />
    </div>
  )
}

export default Footwear