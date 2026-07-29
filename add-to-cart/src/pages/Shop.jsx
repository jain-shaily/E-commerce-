import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import productDetail from '../components/Product'
import ProductCard from '../components/productCard'
const Shop = () => {
const [selectedcategory, setselectedcategory] = useState('')
const [search, setsearch] = useState('')
const handle=(e)=>{
  setsearch(e)
}
const resetFilter = () => {
  setselectedcategory("");

};
const filtredproduct= productDetail.filter((item)=>{
  const categorymatch = 
  selectedcategory === '' || 
  item.type === selectedcategory
  const searchmatch =
    item.pattern.toLowerCase().includes(search.toLowerCase());
  return categorymatch && searchmatch ;
})
  return (
    <div className='p-10  flex gap-10'>
    <div className='flex flex-col'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold'>Shop Directory</h1>
        <p className='text-gray-500 font-bold text-[11px]'>Showing 21 premium creations matching your filters.</p>
      </div>
        <hr className='my-10 text-gray-200'/>
        <div className='flex flex-col gap-5 '>
        <div className='flex justify-between'>
        <p className='font-bold'>Filter Parameters</p>
   
        <button onClick={resetFilter} className='text-red-500 font-bold'>Reset Filter</button>
      </div>
         <div className='flex flex-col gap-3'>
          <h1 className='uppercase text-gray-400 font-bold text-[14px]'>Search Keywords</h1>
          <input  className='border border-gray-300 rounded-xl p-1' type="text" placeholder='search apparel...' value={search} onChange={(e)=>{
            handle(e.target.value)
          }}/>
         </div>
      <div className='flex flex-col gap-3 mt-5 text-gray-400 font-bold '>
       <button className='focus:text-cyan-700' onClick={()=>{
        setselectedcategory('MEN')
       }}>Men's Outfit</button>
       <button className='focus:text-cyan-700' onClick={()=>{
        setselectedcategory('WOMEN')
       }}>Women's Outfit</button>
       <button className='focus:text-cyan-700'onClick={()=>{
        setselectedcategory('KIDS')
       }}>Kid's Outfit</button>
       <button className='focus:text-cyan-700'onClick={()=>{
        setselectedcategory('ACCESSORIES')
       }}>Elegant Accessories</button>
       <button className='focus:text-cyan-700'onClick={()=>{
        setselectedcategory('FOOTWEAR')
       }}>Premium Footwear</button> 
    </div>
      </div> 
      </div>
      <div className='flex gap-5 '>
           <ProductCard product={filtredproduct} className='h-50 w-full '/>
      </div>
    </div>
  )
}

export default Shop