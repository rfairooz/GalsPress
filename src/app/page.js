import React from 'react'
import Landing from '@/components/Landing';
import Textarea from '@/components/Textarea';
const page = () => {
  return (
    <div className="w-full grid justify-center items-center grid-cols gap-3">
      <div>
      GalsPress - where gals discuss pressing matters in the society!
      </div>
      <Textarea/>
      <Landing />
      </div>
  );
}

export default page