import React from 'react'
import ProductCard from '../components/productCard'
import productDetail from '../components/Product'

const Accessories  = () => {

  const JewelleryProducts = productDetail.filter(
    item => item.type === "ACCESSORIES"
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Accessories's Collection</h1>

      <ProductCard product={JewelleryProducts} />
    </div>
  )
}

export default Accessories