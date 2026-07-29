import { ChevronDown, ChevronUp, CircleQuestionMark } from 'lucide-react'
import React, { useState } from 'react'
import Facilities from '../components/Facilities'
 
const questions =[
    {
question : 'What is your return and exchange policy?',
answer : 'We offer easy 30-day hassle-free returns. Items must be in original condition with tags intact. Returns are completely free of cost.',
    },
    {
     question :  "How long does shipping take?",
     answer :  'We offer free standard shipping (3-5 business days) and expedited shipping (1-2 business days). All orders are shipped with tracking.',
    },
    {
      question : 'Are your garments sustainably sourced',
      answer : 'Yes, 85% of our products use certified organic cotton, recycled polyester, or ethically farmed linen/wool from certified global standard partners.', 
    },
    {
        question: 'Can i cancel or modify my order',
        answer : 'Orders can be canceled or changed within 60 minutes of placing them directly from your dashboard Order History.',
    },
    {
        question : 'Do you ship internationally',
        answer : 'Currently, we ship across North America, Europe, Australia, and selected Asian countries. Details are listed on our shipping pages.',
    },
    
]

const Security = () => {
    const [open, setopen] = useState(false)
  return (
    <div className=''>
        <div className='flex flex-col justiify-center items-center gap-7'>
        <h3 className='text-cyan-700 uppercase'>Instant Knowledge</h3>
        <h1 className='text-4xl font-extrabold'>Support FAQs</h1>
        <p className='text-[12px] text-gray-500'>Quickly navigate answers covering shipping thresholds, refund policies, and organic weaves.</p>
        </div>
        {questions.map((item,index)=>(
        <div className='flex flex-col p-10'>
        <button onClick={()=>{
            setopen(!open)
        }}>
        <span className='flex font-bold '><CircleQuestionMark />{item.question}
        {open ? <ChevronUp /> : <ChevronDown /> }</span>
        </button>
        {open && (
        <p className="mt-3 text-gray-400 text-[12px]">
          {item.answer}
        </p>
      )}
      </div>
      ))}
      <Facilities />
    </div>
    
  )
}
export default Security