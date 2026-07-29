import React from 'react'
import ProductCard from '../components/productCard'
import productDetail from '../components/Product'

const Kids = () => {

  const kidsProducts = productDetail.filter(
    item => item.type === "KIDS"
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">kid's Collection</h1>

      <ProductCard product={kidsProducts} />
    </div>
  )
}

export default Kids