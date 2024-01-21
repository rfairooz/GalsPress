import { map } from "d3";
import { items } from "@/data/words";
const Results = () => {

    return (
<div className="w-full h-screen flex justify-center bg-[#051A3B] text-white ">
    <div className="flex flex-col">
        <p className="text-6xl mt-3">  RESULTS</p>


    {items.map((item, index) => (
          <div
            key={index}
          >{item.name}</div>
        ))}
    </div>
</div>
    );

};

export default Results