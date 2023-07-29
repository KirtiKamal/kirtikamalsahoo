import React from 'react'
import Type from './Type'
import img from './hero.jpg'

export default function Hero() {
  return (
    <div id='home' className="relative  shadow-cyan-400">



      <div className="sticky top-0 flex h-screen items-center justify-center">
        <img src={img} className="h-full w-full object-cover" />


        <div className="absolute left-0 top-[10%] md:top-[40%] flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
          <h1 className="text-6xl text-white">Hello,</h1>
          <div className="text-6xl text-white overflow-hidden"> I am
            <span className="font-sans text-6xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text overflow-hidden"> Kirti Kamal</span>
          </div>

          <div className=''>
            <Type />
          </div>
        </div>
      </div>


    </div>
  )
}
