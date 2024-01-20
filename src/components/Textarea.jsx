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
    <div className="w-full flex flex-cols justify-center">
      <textarea
        value={text}
        onChange={handleChange}
        className="border-0 h-64 w-full border-black pl-3 rounded-3xl focus:outline-none placeholder:text-black bg-gradient-to-b from-gal-pink-200 to-gal-purple-200 resize-none drop-shadow-lg"
        name={"Womp WOmp"}
        placeholder={"Paste Text Here"}
      />
      <div className="flex items-center">
      <button
        className="ml-2 bg-gal-pink-200/80 hover:bg-gal-pink-200 text-white font-bold py-3 px-3 rounded-full"
        onClick={handleSubmit}
      >
        <FaSearch className='text-2xl'/>
      </button>
      </div>
    </div>
  );
};

export default Textarea;