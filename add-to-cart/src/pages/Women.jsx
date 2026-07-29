import React from 'react'
import ProductCard from '../components/productCard'
import productDetail from '../components/Product'

const Women = () => {

  const womenProducts = productDetail.filter(
    item => item.type === "WOMEN"
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Women's Collection</h1>

      <ProductCard product={womenProducts} />
    </div>
  )
}

export default Women