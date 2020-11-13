import React, {useState, useEffect} from 'react';

const CircleGuage = ({radius, percent}) => {
  const strokeWidth = radius * 0.2;
  const innerRadius = radius - strokeWidth / 2;

  const circumference = innerRadius * 2 * Math.PI;
  const arc = circumference * (percent / 360);
  const dashArray = `${arc} ${circumference}`;
  const transform = `rotate(270, ${radius}, ${radius})`;

  return (
    <div className='gauge_base'>
      {' '}
      <svg height={radius * 2} width={radius * 2}>
        <circle
          cx={radius}
          cy={radius}
          fill='transparent'
          r={innerRadius}
          stroke='gray'
          strokeWidth={strokeWidth}
        />
        <circle
          class='gauge_base'
          cx={radius}
          cy={radius}
          fill='transparent'
          r={innerRadius}
          stroke='black'
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          transform={transform}
        />
        ‍
      </svg>
    </div>
  );
};

export default CircleGuage;
