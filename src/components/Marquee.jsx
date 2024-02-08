import React from 'react'
import {motion} from "framer-motion"

function  Marquee() {
  return (
    <div className='w-full py-8 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex justify-center items-center whitespace-nowrap gap-1 uppercase">
            <motion.h1 inherit={{x:0}} animate={{x: "-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[18vw] font-[fsm]  mr-8'>we are ochi</motion.h1>
            <motion.h1 inherit={{x:0}} animate={{x: "-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[18vw] font-[fsm]'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default  Marquee