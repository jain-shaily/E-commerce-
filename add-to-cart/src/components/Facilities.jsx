import { Headphones, RefreshCw, ShieldCheck, Truck } from 'lucide-react'
import React, { useContext } from 'react'
import { themehandler } from '../context/ThemeContext'

const Facilities = () => {
    const [theme] = useContext(themehandler)
  return (
    <div className=' grid grid-cols-2 md:grid-cols-4 p-10 gap-5  h-70'>
        <div className='flex gap-4'>
            <Truck className='text-cyan-700'/>
            <div className='flex flex-col'>
                <h3 className={`${theme === "dark" ? "text-white" : "text-black"} font-bold text-[14px]`}>Free Standard Shipping</h3>
                <p className='text-gray-600 text-[12px]'>On orders over ₹10,000 or winter tags</p>
            </div>
        </div>
         <div className='flex gap-4'>
           <RefreshCw className='text-cyan-700'/>
            <div className='flex flex-col'>
                <h3 className={`${theme === "dark" ? "text-white" : "text-black"} font-bold text-[14px]`}>30-Day Free Returns</h3>
                <p className='text-gray-600 text-[12px]'>Easy return shipping label included</p>
            </div>
        </div>
         <div className='flex gap-4'>
            <ShieldCheck className='text-cyan-700'/>
            <div className='flex flex-col'>
                <h3 className={`${theme === "dark" ? "text-white" : "text-black"} font-bold text-[14px]`}>Secure Encrypted Checkout</h3>
                <p className='text-gray-600 text-[12px]'>Surgical military-grade gateways</p>
            </div>
        </div>
         <div className='flex gap-4'>
            <Headphones className='text-cyan-700'/>
            <div className='flex flex-col'>
                <h3 className={`${theme === "dark" ? "text-white" : "text-black"} font-bold text-[14px]`}>24/7 Dedicated Help</h3>
                <p className='text-gray-600 text-[12px]'>Direct support hotline anywhere</p>
            </div>
        </div>
    
    </div>
  )
}

export default Facilities