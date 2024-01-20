'use client'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
const Textarea = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
   
    console.log('Text submitted:', text);
  };
    return (
        <div className="w-1/3 flex flex-cols">
          <textarea
            value={text}
            onChange={handleChange}
            className="border-2 border-black pl-3 w-full rounded-3xl focus:outline-none placeholder:text-black bg-gradient-to-b from-gal-pink-200 to-gal-purple-200 resize-none"
            name={"Womp WOmp"}
            placeholder={"Paste Text Here"}
          />
          <button
            className="ml-2 bg-gal-pink-200/80 hover:bg-gal-pink-200 text-white font-bold px-3 rounded-full"
            onClick={handleSubmit}
          >
            <FaSearch className='text-2xl'/>
          </button>
        </div>
      );
    };
    
    export default Textarea;
    