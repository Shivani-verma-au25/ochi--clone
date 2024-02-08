import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructre mt-40 px-20">
            {["WE Create","eye-opening","presentation"].map((item,index)=> {
                return <div className="maskers">
                    <div className='w-full flex item-center overflow-hidden bg-red-500'>
                        {index === 1 && (<div className='w-[9vw] h-[5.6vw] mt-3 bg-cyan-100 rounded-md mr-4'></div>)}
                        <h1 className='font-[fsm] uppercase leading-[6vw] font-semibold text-9xl' >{item}</h1>
                    </div>
                </div>
            } )}
            
            
        </div>
        <div className="border-t-2 border-zinc-800 mt-32 flex justify-between pl-20 pr-20 ">
            {["For public and private companies","From the first pitch to IPO",].map((item,index)=> {
                return <p className='text-md font-light tracking-tight leading-none mt-5 text-zinc-400'>{item}</p>
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