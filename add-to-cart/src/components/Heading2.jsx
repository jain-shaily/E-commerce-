import React, { useContext } from 'react'
import { themehandler } from '../context/ThemeContext'

const Heading2 = () => {
  const [theme] = useContext(themehandler)
  return (
    <div className='flex justify-center items-start flex-col m-3'>
     <h1 className={`${theme === "dark" ? "text-white" : "text-slate-950"} text-[30px] font-extrabold`}>Curated Masterpieces</h1>
     <p className='text-gray-600 text-sm'>Explore premium selection criteria based on seasonal favorites.</p>
    </div>
  )
}

export default Heading2