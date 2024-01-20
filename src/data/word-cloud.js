// WordCloud.js
"use client"
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

const MyWordCloud = () => {
  const myWords = [
    { word: 'Running', size: '10' },
    { word: 'Surfing', size: '20' },
    { word: 'Climbing', size: '50' },
    { word: 'Kiting', size: '30' },
    { word: 'Sailing', size: '20' },
    { word: 'Snowboarding', size: '60' },
  ];

  const svgRef = useRef();

  useEffect(() => {
    if (!svgRef.current) {
      // Set the dimensions and margins of the graph
      const margin = { top: 10, right: 10, bottom: 10, left: 10 };
      const width = 450 - margin.left - margin.right;
      const height = 450 - margin.top - margin.bottom;

      // Append the svg object to the body of the page
      const svg = d3
        .select('#my_dataviz')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // Save the svg reference to the ref variable
      svgRef.current = svg;

      // Constructs a new cloud layout instance
      const layout = cloud()
        .size([width, height])
        .words(myWords.map((d) => ({ text: d.word, size: +d.size })))
        .padding(5)
        .rotate(0)
        .fontSize((d) => d.size)
        .on('end', draw);

      layout.start();

      // Draw function
      function draw(words) {
        svg
          .append('g')
          .attr('transform', 'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')')
          .selectAll('text')
          .data(words)
          .enter()
          .append('text')
          .style('font-size', (d) => d.size)
          .style('fill', '#69b3a2')
          .attr('text-anchor', 'middle')
          .style('font-family', 'Impact')
          .attr('transform', (d) => 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')')
          .text((d) => d.text);
      }
    }
  }, [myWords]); // Re-run the effect when myWords change

  return <div id="my_dataviz" />;
};

export default MyWordCloud;
