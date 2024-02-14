import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate,setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouse_X = e.clientX
            let mouse_Y = e.clientY

            let diffx = mouse_X - window.innerWidth/2
            let diffy = mouse_Y - window.innerHeight/2

            var angle = Math.atan2(diffy,diffx) * (180/Math.PI)
            setRotate(angle-180)
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.3" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div data-scroll data-scroll-speed=".3" className="absolute flex items-center justify-center gap-12 top-1/2 left-[35vw] -translate-x-[50%] -translate-y-[50%]">
                <div  className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
                    <div className='relative bl-circle w-2/3 h-2/3  bg-zinc-900 rounded-full'>
                        <div style={{transform :`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-full h-10 rotate-[450deg]'>
                            <div className='small-cirle w-10 h-10 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
                <div className='relative bl-circle w-2/3 h-2/3  bg-zinc-900 rounded-full'>
                        <div style={{transform :`translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line w-full h-10 rotate-[450deg]'>
                            <div className='small-cirle w-10 h-10 bg-zinc-100 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes