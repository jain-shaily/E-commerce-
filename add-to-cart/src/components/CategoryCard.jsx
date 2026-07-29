import React, { useContext } from 'react'
import { themehandler } from '../context/ThemeContext'
const CategoryCard = ({img,price,description,type,pattern,off,arrival}) => {
    const [theme] = useContext(themehandler)
  return (
    <div className=' relative w-full md:w-55  flex flex-col rounded-2xl overflow-hidden shadow-md'>
        <img className='h-full md:h-70 w-full object-cover rounded-2xl'src={img} alt="" />
        <div className='flex flex-col items-start justify-start absolute top-3 left-2 gap-2 '>
        <span className='h-fit w-fit p-1 bg-red-700 text-white font-bold rounded-3xl text-[12px]'>{off}</span>
        <span className='h-fit w-fit p-1 bg-blue-700 text-white font-bold rounded-3xl text-[12px]'>{arrival}</span>
        </div>
        <div className='py-5 rounded-xl hover:shadow-2xl shadow-gray-500'>
            <p className ='text-cyan-700 font-bold'>{type}</p>
            <h3 className={`${theme === "dark" ? "text-white" : "text-black"} font-bold`}>{pattern}</h3>
            <p className={`${theme === "dark" ? "text-white" : "text-gray-600"} text-[10px]`}>{description}</p>
            <h2 className={`${theme === "dark" ? "text-white" : "text-black"} font-bold`}>{price}</h2>
        </div>
    </div>
   )
}

export default CategoryCard