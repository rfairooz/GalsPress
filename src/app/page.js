import React from 'react'
import Landing from '@/components/Landing'
import WordCloudComponent from '@/components/Word'
import Results from '@/components/Results';

const page = () => {
  return (
    <>

      <Landing />
      <Results/>
    { <WordCloudComponent/> }
      </>
  );

}

export default page