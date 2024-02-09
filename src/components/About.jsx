import React from 'react'

function About() {
  return (
    <div className=' w-full p-20 bg-[#cdea68] rounded-t-3xl'>
      <h1 className='text-black font-[nmreal] text-6xl leading-[4.5vw] tracking-tight' >Ochi is a strategic partner for fast-grow­ing tech businesses that need to <a href='#' className='underline'>raise funds</a>, <a href='#'  className='underline'>sell prod­ucts</a>, <a href='#'  className='underline'>ex­plain com­plex ideas</a>, and <a href='#'  className='underline'>hire great peo­ple</a>.</h1>

      <div className='flex w-full border-t-[.1vw] mt-20 border-[#57622a]'>
        <div className='w-1/2'>
          <h1 className='text-7xl text-black my-10 font-[nmreal]' >Our approach:</h1>
          <button className='px-10 py-4 bg-zinc-900 rounded-full text-white text-md uppercase flex items-center  gap-5'>Read more 
            <div className='w-2 h-2 bg-white rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-red-400 my-8 '>
          <img className='w-[100%] h-[100%] object-cover rounded-3xl ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About