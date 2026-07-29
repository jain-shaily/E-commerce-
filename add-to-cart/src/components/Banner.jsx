import { MoveRight } from 'lucide-react'
import React from 'react'
const Banner = () => {
  return (
    <div className=' flex  justify-center items-center'>
        <div className='flex flex-col md:flex-row  justify-center items-start  bg-slate-950 md:h-50 h-100 w-3/4 m-5 p-10 rounded-2xl'>
        <div className='flex flex-col gap-5'>
        <p className='text-cyan-500 font-bold'>Season Event Offer</p>
        <h1 className='text-white text-3xl font-bold'>Take 20% Off Your Next Purchase</h1>
        <p className='text-white text-[12px] font-semibold'>Use code <b className='border p-0.5 md:p-4 rounded border-blue-500 text-blue-800 test-[10px]'>BLUE20</b> at checkout to claim your discounts on premium organic collections. Minimum spend ₹5,000.</p>
        </div>
        <div className='flex py-5'>
            <button className='bg-white text-slate-950 h-10 w-fit rounded-xl p-2 flex gap-2'>
                Shop Promotional Items <MoveRight />
            </button>
        </div>
    </div>
    </div> 
  )
}
export default Banner