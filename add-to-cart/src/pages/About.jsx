import React from 'react'
import shopping from '../assets/shopping.avif'
import { Award, Eye } from 'lucide-react'
import boy1 from '../assets/boy1.avif'
import boy2 from '../assets/boy2.avif'
import girl3 from '../assets/girl3.avif'
import Facilities from '../components/Facilities'
const info =[
  {
    icon : <Eye />,
    head : 'Our Clear Vision',
    descri : 'To become the premier globally acknowledged destination for eco-conscious minimalist fashion. We envision a society where garments are treated as long-term assets rather than temporary single-use sheets.',
  },
  {
    icon : <Award />,
    head : 'Our Dedicated Mission',
    descri : 'To assemble outstanding organic apparel lines using 100% GOTS-certified flax linen, mulberry silk, and mongolian cashmere. We commit to complete transparent labor pricing and zero carbon waste across assembly lines.',
  },

]

const About = () => {
  return (
    <div>
    <div className='flex p-10 flex-col md:flex-row'>
      <div className='w-full md:w-1/2 p-10 flex flex-col gap-5'>
        <h4 className='text-cyan-700 uppercase font-bold'>Our Story</h4>
        <h1 className='text-3xl font-bold'>Crafting Minimalist Luxury and Ethical Compositions</h1>
        <p className='text-gray-500 text-[14px]'>Founded in 2024, WearVerse set out to rewrite modern apparel paradigms. Tired of fast-fashion cycles that sacrifice fabric integrity and human labor values, we engineered a direct-to-patron clothing circle focusing on longevity, breathable organic linen weaves, and timeless ice blue colorways.
        <br />
         Every thread spun at our Florentine design hubs undergoes heavy calibration tests. The result is pure comfort, clean fits, and premium minimalist aesthetics that outlast temporary runway trends.</p>
      </div>
      <div >
        <img className='rounded-2xl' src={shopping} alt="ShoppingGirl" />
      </div>
        </div>
       
        <div className='justify-between gap-5 p-10 m-3  flex'>
        {info.map((item,index)=>(
          <div key={index}>
            <div className='text-cyan-800 font-bold '>{item.icon}</div>
        <h4 className='font-bold'>{item.head}</h4>
        <p className='text-gray-500 text-[12px]'>{item.descri}</p>
        </div>
        ))}
        </div>
        <div className='flex flex-col items-center gap-2' >
        <p className='text-cyan-800 uppercase font-bold'>Design Architects</p>  
        <h1 className='font-bold text-2xl'>Meet the Creative Guild</h1>
        <p className='text-gray-600 text-[12px]'>Behind every knit is a dedicated styling expert.</p>
        </div>  
        <div className='flex flex-col md:flex-row gap-10 h-350 md:h-100  m-5 justify-evenly'>
          
         <div className=''> 
         <img src={boy1} alt="person1" className='object-cover h-100 w-80 rounded-xl'/> 
         <p className='font-bold mx-5'>Rahul Mishra</p>
         <p className='text-cyan-800 font-extrabold mx-5 text-[10px] uppercase'>UI/UX Designer</p>
         </div>
         <div>
          <img src={boy2} alt="person2" className='object-cover h-100 w-80 rounded-xl'/>
          <p className='font-bold mx-5'>Nenaram Kumawat</p>
          <p className='text-cyan-800 font-extrabold mx-5 text-[10px] uppercase'>Product Designer</p>
          </div>
         <div>
         <img src={girl3} alt="person3" className='object-cover h-100 w-80 rounded-xl'/>
         <p className='font-bold mx-5'>Shaily jain</p>
         <p className='text-cyan-800 font-extrabold mx-5 text-[10px] uppercase'>SEO Manager</p>
        </div>
        </div>
       <Facilities />
     </div>
  
 )
}

export default About