"use client"
import React from 'react'
import { useState } from 'react';
import Textarea from './Textarea';
import MyWordCloud from '@/data/word-cloud'; 

const Results = () => {
  const [submittedText, setSubmittedText] = useState('');

  const handleTextSubmit = (text) => {
    setSubmittedText(text);
  };

  return (
    <div>
      <Textarea onTextSubmit={handleTextSubmit} />
      <MyWordCloud submittedText={submittedText} /> 
    </div>
  );
};

export default Results;
