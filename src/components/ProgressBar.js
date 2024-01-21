import React from 'react';

const ProgressBar = ({ value }) => {
  const isLeftNegative = value < 0;
  const isRightNegative = value >= 0;

  const leftValue = isLeftNegative ? Math.abs(value*100) : 0;
  const rightValue = isRightNegative ? value*100 : 0;

  const rightBarColor = isRightNegative ? 'bg-green-500' : 'bg-gray-300';
  const leftBarColor = isLeftNegative ? 'bg-red-500' : 'bg-gray-300';

  const leftTranslateY = isLeftNegative ? `translateY(${100 - leftValue}%)` : 'translateY(0)';
  const rightTranslateY = isRightNegative ? `translateY(${100 - Math.abs(rightValue)}%)` : 'translateY(0)';

  return (
    <div className="mb-5 ml-5 flex flex-cols gap-5 items-end mt-10  justify-center items-center">
      <div className="h-72 w-16 overflow-hidden rounded-md bg-gray-300">
        <div className="ml-1.5 text-md text-gray-600">{leftValue}%</div>
        <div
          className={`h-full ${leftBarColor}`}
          style={{ height: `${leftValue}%`, transform: leftTranslateY }}
        ></div>
      </div>
      <div className="h-72 w-16 overflow-hidden rounded-md bg-gray-300">
        <div className="ml-1.5 text-md text-gray-600">{rightValue}%</div>
        <div
          className={`h-full ${rightBarColor}`}
          style={{ height: `${Math.abs(rightValue)}%`, transform: rightTranslateY }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
