import React from 'react'
import {motion} from "framer-motion"

function  Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-8 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex items-center justify-center whitespace-nowrap uppercase overflow-hidden ">
            <motion.h1 inherit={{x:"0"}} animate={{x: "-100%"}} transition={{ease:'linear',repeat:Infinity,duration:10}} className='text-[18vw] font-[fsm] mr-8 pt-10 -mb-[1vw] '>we are ochi</motion.h1>
            <motion.h1 inherit={{x:"0"}} animate={{x: "-100%"}} transition={{ease:'linear',repeat:Infinity,duration:10}} className='text-[18vw] font-[fsm] pt-10 -mb-[1vw] mr-8'>we are ochi</motion.h1>
            <motion.h1 inherit={{x:"0"}} animate={{x: "-100%"}} transition={{ease:'linear',repeat:Infinity,duration:10}} className='text-[18vw] font-[fsm] pt-10 -mb-[1vw] mr-8'>we are ochi</motion.h1>
            <motion.h1 inherit={{x:"0"}} animate={{x: "-100%"}} transition={{ease:'linear',repeat:Infinity,duration:10}} className='text-[18vw] font-[fsm] pt-10 -mb-[1vw]'>we are ochi</motion.h1>

        </div>
    </div>
  )
}

export default  Marquee