import React, { useState } from 'react'
import human1 from '../assets/human1.avif'

const reviews = [
  {
    name: "Priya Sharma",
    text: "Fashion Designer",
    description : '"An outstanding shopping experience. The local-first minimalist UI  matches their premium Banarasi Silk Saree beautifully. Fast delivery and stunning packaging!"',
  },
  {
    name: "Rohan Verma",
    text: "Stylist & Editor",
    description : '"The quality of the Velvet Bandhgala Jacket is remarkable. I was skeptical about  local storage auth, but the dashboard orders list loads instantly. Highly recommended."',
  },
  
  {
    name: "Aarav Patel",
    text: "Sustainability Consultant",
    description:'"I love their organic fabrics, handloom items, and the completely recycled packaging.  Navigating categories dropdown is extremely satisfying and fast."',
  },
];
const QuantitySelector = () => {
     const [Current, setCurrent] = useState(0)
  return (
    <div className='h-100 w-full flex flex-col items-center justify-center gap-5'>
     <p className='text-cyan-600 font-bold uppercase'>User Stories</p>
     <p className=' italic font-semibold text-xl w-1/2'>{reviews[Current].description}</p>
     <div className='flex gap-3'>
          <img className='h-12 w-12 border border-cyan-600 rounded-3xl' src={human1} alt="" />
       <div>
         <h3 className='font-bold'>{reviews[Current].name}</h3>
        <p className='font-bold italic text-[10px]'>{reviews[Current].text}</p>
       </div>
     
     </div>
     <div className="flex justify-center gap-2 mt-6">
      {reviews.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`h-3 w-3 rounded-full transition-all duration-300 ${
        Current === index
          ? "bg-blue-600 w-8"
          : "bg-gray-300"
      }`}
    ></button>
  ))}
</div>
    </div>
  )
}

export default QuantitySelector