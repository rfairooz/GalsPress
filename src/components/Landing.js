import React from 'react'
import Textarea from '@/components/Textarea';
import Image from 'next/image';
import woman from '@/public/landingWoman.svg';

const Landing = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#53A1FB]/50 via-[#81A0FA] to-[#9A93E1]/90 overflow-hidden ">
        <div className="text-8xl font-bold  text-[#C63B61] text-center">
            GALS PRESS
        </div>
        <hr className="text-[#C63B61]"/>
        <div className="grid grid-cols-2 mt-20">
        <div className="grid ">
       <Image className=" w-full " src={woman}/>
       </div>

       <div className=" flex justify-center items-center">

       <Textarea/>
       </div>

        </div>
       
       
       
    </div>
  )
}

export default Landing

//from-[#53A1FB]/50 via-[#81A0FA] to-[#9A93E1]/90