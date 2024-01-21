"use client"
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '@/utils/firebase'; 

const Textarea = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async () => {
    if (text.trim() !== '') {
      try {
        await addDoc(collection(db, 'texts'), {
          content: text,
          timestamp: new Date()
        });
        console.log('Text submitted to Firestore:', text);
        setText('');
      } catch (error) {
        console.error('Error adding document to Firestore: ', error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <div className='flex justify-center items-center text-white text-center text-xl rounded-xl bg-black w-3/5 ml-24 h-10'>
        Add text to discover the results 
      </div>
      <div className='flex flex-row mt-2'>
      <textarea
        value={text}
        onChange={handleChange}
        className="border-0  h-96 w-11/12 border-black p-3 rounded-3xl focus:outline-none placeholder:text-black bg-gradient-to-b from-gal-pink-200 to-[#6254ed]/80 resize-none drop-shadow-lg"
        name={"Womp Womp"}
        placeholder={"Paste Text Here"}
      />
      <div className="flex justify-end">
        <button
          className="bg-[#051A3B] absolute hover:bg-[#051A3B]/70 text-white font-bold py-3 px-3 rounded-full mt-3 mr-3"

          onClick={handleSubmit}
        >
          <FaSearch className='text-2xl'/>
        </button>
        </div>
        </div>
    </div>
  );
};

export default Textarea;