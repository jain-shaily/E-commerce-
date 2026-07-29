import { ArrowRight, CircleQuestionMark, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useContext, useState } from 'react'
import Facilities from '../components/Facilities'
import { Navigate, useNavigate } from 'react-router-dom'
import Security from './Security'
import { themehandler } from '../context/ThemeContext'

const Contact = () => {
  const [theme] = useContext(themehandler)
  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [subject, setsubject] = useState('')
 const Navigate = useNavigate();
  const submithandler=(e)=>{
    e.preventDefault()
  }
  return (
    <div className=' h-250 py-20'>
      
     <div className='flex justify-center items-center flex-col gap-2 '>
      <h3 className='text-cyan-700 font-bold'>Communications Hub</h3>
      <h1 className='font-bold text-3xl'>Contact Customer Support</h1>
      <p className={`text-[12px] ${theme === "dark" ? "text-white" : "text-gray-400"} `}>Need styling alignment tips or quick shipping adjustments? Send us a ticket or call directly.</p>
     </div>
     <div className='flex justify-between'>
      <div className='flex flex-col gap-7 p-10'>
        <div className='flex flex-col gap-3'>
          <h2 className='font-bold p-3 m-2'>Direct Channels</h2>
          <div className='flex gap-3'>
            <div >
              <Phone className='text-cyan-800'/>
            </div>
            <div className='flex flex-col '>
            <p className={`text-gray-600 ${theme === "dark" ? "text-white" : "text-GRAY-600"} font-bold uppercase text-[12px]`}>Direct Hotline</p>
            <h3 className={`${theme === "dark" ? "text-white" : "text-slate-800"}  font-bold`}>+1 (800) 555-WEAR</h3>
            <p className={`${theme === "dark" ? "text-white" : "text-gray-800"} text-[12px]`}>Mon - Sun (24/7 dedicated lines)</p>
            </div>
          </div>
          
        </div>
         <div>
       
          <div className='flex gap-3'>
            <div>
              <Mail className='text-cyan-800'/>
            </div>
            <div className='flex flex-col'>
            <p className={`${theme === "dark" ? "text-white" : "text-gray-600"} font-bold uppercase text-[12px]`}>Email Support</p>
            <h3 className={`${theme === "dark" ? "text-white" : "text-gray-800"} font-bold`}>concierge@wearverse.com</h3>
            <p className={`${theme === "dark" ? "text-white" : "text-slate-800"} font-bold`}>Typical reply duration: 4 hours</p>
            </div>
          </div>
          
        </div>
         <div>
        
          <div className='flex gap-3'>
            <div>
              <MapPin className='text-cyan-800'/>
            </div>
            <div className='flex flex-col'>
            <p className={`${theme === "dark" ? "text-white" : "text-gray-600"} font-bold uppercase text-[12px]`}>Creative Studio</p>
            <h3 className={`${theme === "dark" ? "text-white" : "text-slate-800"} font-bold`}>124 Via de' Tornabuoni</h3>
            <p className={`${theme === "dark" ? "text-white" : "text-slate-800"}font-bold`}>Florence, FI 50123, Italy</p>
            </div>
          </div>
          
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='flex text-cyan-600 p-2 gap-3'> <CircleQuestionMark />Quick Faq Reference</h1>
          <p className='text-[12px]'>Save time and explore instant answers to returns, shipping, and sizing questions in our Faqs catalog.</p>
          <button onClick={()=> Navigate ('/Security')} className='flex  text-cyan-800 hover:cursor-pointer hover:underline gap-1 font-bold text-[12px]'>Access Support FAQs <ArrowRight /></button>
        </div>
      </div>
      
      <div className='p-10 m-10 h-150 w-1/2 '>
        <form onSubmit={submithandler} className='flex flex-col gap-10'>
          <h1 className='font-bold py-5 '>Dispatch Support Ticket</h1>
          <div className='flex justify-between flex-col md:flex-row '>
          <div>
            <h3 className={`text-[11px] font-bold ${theme === "dark" ? "text-white" : "text-gray-500"}`}>FULL NAME</h3>
            <input  className ='border border-gray-400 rounded-lg py-2 px-10' type="text" placeholder='e.g.Alex Mercer' value={name} onChange={(e)=>{
              setname(e.target.value)
            }}/>
          </div>
          <div>
            <h3 className={`${theme === "dark" ? "text-white" : "text-gray-500"} text-[11px] font-bold `}>EMAIL ADDRESS</h3>
            <input  className ='border border-gray-400 rounded-lg py-2 px-10' type="email" placeholder='e.g.alex@example.com' value={email} onChange={(e)=>{
              setemail(e.target.value)
            }}/>
          </div>
        </div>
         <div>
            <h3 className={`${theme === "dark" ? "text-white" : "text-gray-500"} text-[11px] font-bold `}>INQUIRY SUBJECT</h3>
            <input  className='border border-gray-400 rounded-lg py-2 px-5 w-full' type="text" placeholder='e.g.shipping delay/customized fits Allignment' value={subject} onChange={(e)=>{
              setsubject(e.target.value)
            }}/>
          </div>
           <div>
            <h3 className={`${theme === "dark" ? "text-white" : "text-gray-500"} text-[11px] font-bold`}>DETAILED MESSAGE</h3>
            <textarea className='border h-50 border-gray-400 rounded-lg py-2 px-5 w-full ' name="detail" id="descri" placeholder='Detail your parameter(sizing,order,ID....)'></textarea>
          </div>
          <div className='flex '>
           <button className='bg-cyan-900 text-white font-bold p-2 rounded-xl w-full flex justify-center'>  <Send className='p-1'/> Dispatch Secure Ticket</button>
           </div>
        </form>
      </div>
    </div>
      <Facilities />

    </div>
  )
}

export default Contact