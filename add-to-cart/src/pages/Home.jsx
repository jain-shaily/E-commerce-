import React from 'react'

import Hero from '../components/Hero'
import CartItem from '../components/CartItem'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import ProductCard from '../components/productCard'
import Heading2 from '../components/Heading2'
import QuantitySelector from '../components/QuantitySelector'
import Form from '../components/Form'
import { ToastContainer } from 'react-toastify'
import Facilities from '../components/Facilities'
import productDetail from '../components/Product'
const Home = () => {
  return (
    <div>
        <div>
     
      <Hero />
      <Heading />
     <CartItem />
     <Banner />
     <Heading2 />
   <ProductCard product={productDetail}/>
     <QuantitySelector />
     <Form />
     <ToastContainer />
     <Facilities />

    </div>
    </div>
  )
}

export default Home