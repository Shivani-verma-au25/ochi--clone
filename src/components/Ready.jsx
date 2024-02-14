import React, { useEffect, useState } from 'react'

function Ready() {

    const [rotate2,setRotate2] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX
            let mouseY = e.clientY

            let diffX = mouseX - window.innerWidth/2
            let diffY = mouseY - window.innerHeight/2

            var angle2 = Math.atan2(diffY,diffX) * (180/Math.PI)
            setRotate2(angle2-180)
        })
    })

  return (
    <div  className='w-full bg-[#cdea68] py-20 relative'>
        <div className="container ">
            <h1 className='font-[fsm] text-[15vw]  text-zinc-900 uppercase  text-center leading-[10vw] pl-[7vw]  tracking-tight'>Ready </h1>
            <h1 className='font-[fsm] text-[15vw] text-zinc-900 uppercase text-center leading-[10vw] pl-[7vw] tracking-tight'>to start </h1>
            <h1 className='font-[fsm] text-[15vw] text-zinc-900 uppercase text-center leading-[10vw] pl-[7vw] tracking-tight'>the project?</h1>

        </div>
        <div className="btns w-full flex items-center justify-center flex-col py-20">
            <button className='px-[1vw] py-3 bg-zinc-900 rounded-full text-zinc-100 text-xl uppercase flex items-center justify-center gap-5'>Start the project
                <div className='w-[1vw] h-[1vw] bg-zinc-100  rounded-full'></div>
            </button>
            <p className='p-4 text-3xl text-zinc-900 uppercase' >or</p>
            <button className='px-[1vw] py-3  rounded-full border-2 border-zinc-900 text-zinc-900 text-xl uppercase flex items-center justify-center gap-5' >hello@ochodesign
                <div className='w-[1vw] h-[1vw] bg-zinc-900  rounded-full'></div>
            </button>
        </div>

        <div className="w-full">
        <div data-scroll data-scroll-speed=".3" className="absolute flex items-center justify-center gap-12 top-1/2 left-[35vw] -translate-x-[50%] -translate-y-[50%]">
                <div  className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
                    <div className='relative bl-circle w-2/3 h-2/3  bg-zinc-900 rounded-full'>
                        <div style={{transform :`translate(-50%, -50%) rotate(${rotate2}deg)`}} className='line absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-full h-10 rotate-[450deg]'>
                            <div className='small-cirle w-10 h-10 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
                <div className='relative bl-circle w-2/3 h-2/3  bg-zinc-900 rounded-full'>
                        <div style={{transform :`translate(-50%, -50%) rotate(${rotate2}deg)`}} className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line w-full h-10 rotate-[450deg]'>
                            <div className='small-cirle w-10 h-10 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        
    </div>
  )
}

export default Ready