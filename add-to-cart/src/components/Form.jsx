import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Form = () => {
  const [email, setemail] = useState('')

  const submithandler=(e)=>{
    setemail(e)
    
  }
   const submitting=(e)=>{
    e.preventDefault()
    if(email){
      toast.success('congratulations!!! you have 10% discount on purchasing')
      setemail('')
    }
     else{
      toast.error('Please complete the detail')
     }
    
   }
  return (
    <div className='flex justify-center items-center h-90 my-5'>
        <div className='bg-cyan-800 md:w-100  md:h-80 h-100 w-3/4 rounded-3xl text-white  flex flex-col  items-center gap-7'>
           <h1 className='text-3xl py-5 font-bold'>Stay In the Fashion Loop</h1>
           <p className='w-2/6 text-[12px]'>Subscribe to unlock 10% on your first order and receive customized lookbooks of new ice blue seasonal highlights.</p>
           
            <form action="" onSubmit={submitting} className='flex flex-col md:flex-row gap-5'>
            <input className='border border-gray-400 rounded-lg  py-2 ' type="email" placeholder='Enter Email Address' value={email} onChange={(e)=>{
           submithandler(e.target.value)
           }}/>
           <button type='submit' className='bg-white text-cyan-600 rounded-lg p-2' > Subscribe Now</button>
           </form>
         
        </div>


    </div>
  )
}

export default Form