import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


function LandingPage() {
  return (
    <div data-scroll data-scroll-speed=".3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructre mt-40 px-20">
            {["WE Create","eye-opening","presentation"].map((item,index)=> {
                return <div key={index} className="maskers">
                    <div  key={index} className='w-full flex item-center overflow-hidden'>
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:"10vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='w-[9vw] h-[5.6vw] mt-3  overflow-hidden mr-4'>
                            <img className='rounded-xl w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                        </motion.div>)}
                        <h1 className='font-[fsm] uppercase leading-[6vw] font-semibold text-9xl' >{item}</h1>
                    </div>
                </div>
            } )}
            
            
        </div>
        <div className="border-t-2 border-zinc-800 mt-32 flex justify-between pl-20 pr-20 ">
            {["For public and private companies","From the first pitch to IPO",].map((item,index)=> {
                return <p key={index} className='text-md font-light tracking-tight leading-none mt-5 text-zinc-400'>{item}</p>
            })}
            <div className="start flex item-center gap-3 mt-4">
                <button className='btn uppercase text-md text-zinc-400 px-5 py-1 rounded-full '>Start The Project </button>
                <div className='arrow border-1 rounded-full'>
                    <MdOutlineArrowOutward/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage