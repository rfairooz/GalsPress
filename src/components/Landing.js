import React from 'react'
import Textarea from '@/components/Textarea';
import Image from 'next/image';
import bubbles from '@/public/cyberpunkBackground.svg';

const Landing = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r bg-[#051A38] overflow-hidden relative">


      <Image className="w-full absolute" src={bubbles} />
<div className='flex justify-center'>
      <div className="border-3 w-2/5 border-[#450315] text-8xl font-bold z-10 text-[#450315]/80 text-center relative mt-4">
        GALS PRESS
      </div>
      </div>
      <hr className="text-[#C63B61] z-10" />

      <div className="grid grid-cols-2 items-center mt-14 relative">
        <div className="grid relative ml-20 ">
          <Textarea />
          {/* <Image className="w-full" src={woman} /> */}
        </div>
      </div>
    </div>
  )
}

export default Landing

//from-[#53A1FB]/50 via-[#81A0FA] to-[#9A93E1]/90