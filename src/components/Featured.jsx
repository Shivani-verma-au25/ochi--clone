import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap/src/all'


function Featured() {
  const [ishovering,setisHovering] = useState(false)
  
  return (
    <div className='w-full py-10'>
        <div className='w-full p-10 border-b-[.1vw] border-zinc-700 mb-10'>
            <h1 className='text-7xl font-[nmreal]  pb-7'>Featured projects</h1>
        </div>
        <div className="small-text w-full flex justify-between h-2 mb-10">
          <ul className='px-20'><li  className="pb-8">FYDE</li></ul>
          <ul className='pr-[45vw]'><li>VISE</li></ul>
        </div>
        <div className='px-20'>
        <div  className=" cards w-full flex items-center justify-center gap-10  ">
            <div  className='relative card-container w-1/2 h-[70vh]  '>
              <h1 className='absolute flex left-full overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-[9vw] font-[fsm] leading-none tracking-tighter text-[#cdea68] '>
              {"FYDE".split("").map((item,index) => (
              <span className="inline-block" key={index} >{item}
                </span>
              ))}
              
              </h1>
 
              <div className="card w-full h-full rounded-xl overflow-hidden" >
                  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" /> 
              </div>   
            </div>
            <div className='relative card-container w-1/2 h-[70vh] '>
            <h1 className='absolute flex right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-[9vw] font-[fsm] leading-none tracking-tighter text-[#cdea68] '>
              {"vise".split("").map((item,index) => (<span 
                className="inline-block"
                key={index}>{item}</span>))}
            </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden" > 
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
              </div>   
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured