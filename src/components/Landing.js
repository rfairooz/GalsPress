"use client"
import React from 'react'
import Textarea from '@/components/Textarea';
import Image from 'next/image';
import Footer from './Footer';
// import woman from '@/public/landingWoman.svg';
import WordCloudComponent from './Word';
import { useState } from 'react';

import bubbles from '@/public/cyberpunkBackground.svg';


const Landing = () => {
  const [wordsubmit, setwordsubmit] = useState('')
  const [biasScore, setBiasScore] = useState(null);
  const [barScore, setBarScore] = useState(null);

  const handleTextSubmit = (text) => {
    setwordsubmit(text)
    
  };
  const handleBiasScore = (score) => {
    setBiasScore(score);
  };
  const handleBarScore = (barScore) => {
    setBarScore(barScore);
  };
  // const handleTextSubmit = async (text) => {
  //   setwordsubmit(text);
  //   // Fetch bias score here and update the state
  //   const response = await fetch(`/api/fetch?text=${text}`, {
  //     method: "POST",
  //     body: text
  //   })
  //   const score = await response.json()
  //   console.log(score)
  //   setBiasScore(score.average_probabilities.probability.Biased);
    
  // };
  
  return (
    <div className="h-screen w-full bg-gradient-to-r bg-[#051A38] relative">
      <Image className="w-full absolute z-0" src={bubbles} />
<div className='flex justify-center'>
      <div className="border-3 w-2/5 border-[#450315] text-8xl font-bold z-10 text-[#450315]/80 text-center relative mt-4">
        GALS PRESS
      </div>
      </div>
      <hr className="text-[#C63B61] z-10" />

      <div className="grid grid-cols-2 items-center mt-14 relative">
        <div className="grid relative ml-20 ">
        <Textarea onTextSubmit={handleTextSubmit} onbiasScore={handleBiasScore} onBarScore={handleBarScore}/>
        </div>
      </div>

      {/* <div className="">
        <MyWordCloud submittedText={submittedText} />
      </div> */}
      <WordCloudComponent submittedText={wordsubmit} biasScore={biasScore} barScore={barScore}/>
      <Footer />
    </div>
  )
}

export default Landing

//from-[#53A1FB]/50 via-[#81A0FA] to-[#9A93E1]/90