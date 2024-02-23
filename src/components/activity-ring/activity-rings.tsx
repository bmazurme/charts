/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';
import InnerActivityRing from './inner-activity-ring';
import { ActivityRingsProps, ActivityRingContainerOptions } from './interfaces';

const defaultOptions = {
  containerHeight: '100%',
  containerWidth: '100%',
  paddingBetweenRings: 0.1,
  initialRadius: 30,
  animationDurationMillis: 1000,
  animationTimingFunction: 'ease-in-out',
  backgroundOpacity: 0.4,
};

export default function ActivityRings(props: ActivityRingsProps) {
  const options = { ...defaultOptions, ...props.options } as Required<ActivityRingContainerOptions>;
  const viewBoxSize = 100 + props.rings.length * (21.5 + options.paddingBetweenRings);

  return (
    <svg
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      height={options.containerHeight}
      width={options.containerWidth}
    >
      <g>
        {props.rings.map((ring, index) => (
          <InnerActivityRing
            key={index}
            index={index}
            ring={ring}
            options={options}
          />
        ))}
      </g>
      <g
        opacity="1"
        transform={`translate(${viewBoxSize / 2}, ${viewBoxSize / 2}) rotate(0)`}
      >
        <text
          dx="0"
          dy={props.options?.description ? '-6' : '0'}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fill: 'rgb(0, 0, 0)',
            fontSize: '14px',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            outlineWidth: '0px',
            outlineColor: 'transparent',
          }}
        >
          {props.options?.text}
        </text>
        {props.options?.description
          ? (
            <text
              dx="0"
              dy="6"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fill: 'rgb(106, 124, 137)',
                fontSize: '10px',
                fontFamily: 'sans-serif',
                outlineWidth: '0px',
                outlineColor: 'transparent',
              }}
            >
              {props.options?.description}
            </text>
          ) : null}
      </g>
    </svg>
  );
}
