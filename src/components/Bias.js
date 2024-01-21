import React from 'react'
import {CircularProgress} from "@nextui-org/react";

const Bias = ({rating}) => {
  return (
    <div>
        <CircularProgress
          classNames={{
            svg: "w-48 h-48 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={rating ? rating * 100 : 0}
          strokeWidth={4}
          showValueLabel={false}
        />
        {rating ? (<div className="text-white text-2xl flex justify-center">
            {rating * 100} %
            </div>) : <div className="text-white text-2xl flex justify-center">0 %</div>}
            
    </div>
    
  )
}

export default Bias