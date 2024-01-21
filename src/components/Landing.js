import React from 'react'
import Textarea from '@/components/Textarea';
import Image from 'next/image';
import bubbles from '@/public/cyberpunkBackground.svg';

const Landing = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r bg-[#051A38] overflow-hidden relative">


      <Image className="w-full absolute" src={bubbles} />

      <div className="text-8xl font-bold z-10 text-[#0E1836] text-center relative">
        GALS PRESS
      </div>
      <hr className="text-[#C63B61] z-10" />

      <div className="grid grid-cols-2 mt-20 relative">
        <div className="grid relative">
          <Textarea />
          {/* <Image className="w-full" src={woman} /> */}
        </div>
      </div>
    </div>
  )
}

export default Landing

//from-[#53A1FB]/50 via-[#81A0FA] to-[#9A93E1]/90