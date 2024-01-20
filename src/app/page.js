import React from 'react'
import Landing from '@/components/Landing'
import WordCloudComponent from '@/components/Word'

const page = () => {
  return (
    <>

      <Landing />
    { <WordCloudComponent/> }
      </>
  );

}

export default page