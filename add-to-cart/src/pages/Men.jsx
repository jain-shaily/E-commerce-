import React from 'react'
import ProductCard from '../components/productCard'
import productDetail from '../components/Product'

const Men = () => {

  const menProducts = productDetail.filter(
    item => item.type === "MEN"
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Men's Collection</h1>

      <ProductCard product={menProducts} />
    </div>
  )
}

export default Men