import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-3  px-20'>
        <div className="cardContainer h-96 w-1/2">
            <div className='w-full h-full relative rounded-xl  bg-[#004d43] flex items-center justify-center'>
                <img className=' w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute bottom-10 left-10 px-5 py-3 border-2 rounded-full border-[#cdea68] text-sm text-[#cdea68]'>©️2019-2020</button>
            </div>

        </div>
        <div className="cardContainer w-1/2 h-96 flex items-center justify-center gap-5">
            <div className=' relative w-1/2 h-full rounded-xl flex items-center justify-center  bg-[#004d43]'>
                <img className=' w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute bottom-10 left-10 px-5 py-3 border-2 rounded-full border-[#cdea68] text-sm text-[#cdea68] uppercase'>rating 5.0 on cluthch</button>
            </div>
            <div className='relative w-1/2 h-full rounded-xl bg-[#004d43] flex items-center justify-center '>
                <img className=' w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute bottom-10 left-10 px-5 py-3 border-2 rounded-full border-[#cdea68] text-sm text-[#cdea68] uppercase'>business bootcamp alumni</button>
            </div>

        </div>
    </div>
  )
}

export default Cards