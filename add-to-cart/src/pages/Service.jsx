import { Headphones, RefreshCw, ShieldCheck, Sparkles, Timer, Truck } from 'lucide-react'
import React from 'react'
import Facilities from '../components/Facilities'
 const data =[
   {
    icon : <Truck />,
    heading : 'Free Premium Shipping',
    desc :'Standard ground shipping is completely complimentary on order totals exceeding ₹10,000 or containing designated seasonal winter woolen tags.',
    feat :'Applies globally', 
  },
     {
    icon : <RefreshCw />,
    heading : 'Easy 30-Day Returns',
    desc :'Unhappy with sizing parameter fits? Download a pre-paid return shipment label instantly from your dashboard order logs for direct return drop-offs.',
    feat :'Hassle-free guarantee', 
  },
     {
    icon : <ShieldCheck />,
    heading : 'Secure Payments Shield',
    desc :'Checkout pathways are fortified with AES-256 encrypted frameworks. Rest easy knowing your transaction credentials are fully scrambled.',
    feat :'Bank-level encryption', 
  },
     {
    icon :<Headphones />,
    heading : '24/7 Dedicated Support',
    desc :'Our premium customer support circle stands prepared at any time to align fits configurations, track transit codes, or troubleshoot accounts.',
    feat :'Instant response hotlines', 
  },
     {
    icon :<Timer /> ,
    heading : 'Fast Dispatches & Transit',
    desc :'Apparel catalog dispatches from our logistics centers occur within 18 hours of placements. Standard air mail takes 3 business days max.',
    feat :'Express dispatches', 
  },
     {
    icon :<Sparkles />,
    heading : 'Custom Tailored Fits',
    desc :'Explore detailed material specifications. Every single knit layout is meticulously verified by garment styling formulation teams.',
    feat :'Premium quality guaranteed', 
  },
 ]


const Service = () => {
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
     {data.map((item, index) => (
      <div key={index} className='rounded-xl w-3/4 h-50 flex flex-col m-2 p-5 justify-center items-start gap-2 hover:shadow-xl hover:shadow-gray-400'>
       
        <div className="text-cyan-700">
            {item.icon}
          </div>

      <h3 className='font-bold'>{item.heading}</h3>
      <p className='text-gray-400 text-[10px] '>{item.desc}</p>
      <h6 className='uppercase text-cyan-700 font-bold'>{item.feat}</h6>
      </div>
      ))}
    </div>
    <Facilities />
    </div>
  )

}

export default Service