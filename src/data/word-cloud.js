"use client"
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

const MyWordCloud = ({ submittedText }) => {
  const [myWords, setMyWords] = useState([]);
  const svgRef = useRef();

  // Function to process the submitted text into a format for the word cloud
  // const processTextData = (text) => {
  //   const wordCounts = {};
  //   text.split(/\s+/).forEach(word => {
  //     word = word.toLowerCase();
  //     wordCounts[word] = (wordCounts[word] || 0) + 1;
  //   });
  //   return Object.keys(wordCounts).map(word => ({ text: word, size: wordCounts[word] * 10 })); // Adjust size as needed
  // };
  const processTextData = (text) => {
    const wordCounts = {};
    // Split text into words, remove punctuation, and iterate over words
    text.split(/\s+/).forEach(word => {
      // Remove punctuation from each word
      word = word.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
      // Count words
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    // Map word counts to desired format
    return Object.keys(wordCounts).map(word => ({ text: word, size: wordCounts[word] * 10 })); // Adjust size as needed
  };

  useEffect(() => {
    if (submittedText) {
      const processedData = processTextData(submittedText);
      setMyWords(processedData); // Update the state with the processed words
    }
  }, [submittedText]);

  useEffect(() => {
    if (myWords.length > 0) {
      d3.select('#my_dataviz').selectAll('svg').remove(); // Clear existing SVG

      const margin = { top: 10, right: 10, bottom: 10, left: 10 };
      const width = 450 - margin.left - margin.right;
      const height = 450 - margin.top - margin.bottom;

      const svg = d3.select('#my_dataviz')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      const layout = cloud()
        .size([width, height])
        .words(myWords)
        .padding(5)
        .rotate(() => 0)
        .fontSize(d => d.size)
        .on('end', words => {
          svg.selectAll('text')
            .data(words)
            .enter().append('text')
            .style('font-size', d => `${d.size}px`)
            .style('fill', '#FFFFF0')
            .attr('text-anchor', 'middle')
            .style('font-family', 'Impact')
            .attr('transform', d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
            .text(d => d.text);
        });

      layout.start();
    }
  }, [myWords]);

  return <div id="my_dataviz" style={{ backgroundColor: '#051A38'}}/>
};

export default MyWordCloud;

// blah blah test test blah blah fight fine fight fight good good blah blah test