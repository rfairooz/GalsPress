import React from 'react'
import Textarea from '@/components/Textarea';
import Image from 'next/image';
import woman from '../public/assets/landingWoman.svg';
const Landing = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#53A1FB]/50 via-[#81A0FA] to-[#9A93E1]/90 ">
        <Image src={woman}/>
        <Textarea/>
    </div>
  )
}

export default Landing