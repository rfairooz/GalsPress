"use client"
import React from 'react'
import Textarea from '@/components/Textarea';
import Image from 'next/image';
import woman from '@/public/landingWoman.svg';
import MyWordCloud from '@/data/word-cloud'; 
import { useState } from 'react';

const Landing = () => {
  const [submittedText, setSubmittedText] = useState('');
  const handleTextSubmit = (text) => {
    setSubmittedText(text);
  };
  return (
    <div className="h-screen w-full bg-[#051A3B] ">
        <div className="text-8xl font-bold  text-[#C63B61] text-center border-b-2 border-[#C63B61] pb-4">
            GALS PRESS
        </div>
        <div className="grid grid-cols-2 mt-28">
        <div className="grid ">
       <Image className=" w-full " src={woman}/>
       </div>

       <div className=" flex justify-center items-center">

       <Textarea onTextSubmit={handleTextSubmit} />
       </div>

        </div>
        <div className="flex flex-col bg-green-200">
          <p>
            WORD CLOUD
          </p>
        <MyWordCloud submittedText={submittedText} /> 
        </div>
       
       
       
    </div>
  )
}

export default Landing

//from-[#53A1FB]/50 via-[#81A0FA] to-[#9A93E1]/90