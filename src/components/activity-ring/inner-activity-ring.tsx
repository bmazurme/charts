/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { InnerActivityRingProps } from './interfaces';

import styles from './inner-activity-ring.module.css';

export default function InnerActivityRing(props: InnerActivityRingProps) {
  const radius = props.options.initialRadius
    + (props.index * (8 + props.options.paddingBetweenRings));
  const dashArrayPart = (Math.min(0.999, props.ring.filledPercentage)) * (2 * radius * Math.PI);

  return (
    <>
      <circle
        cx="50%"
        cy="50%"
        r={radius}
        stroke={props.options.background ?? props.ring.color}
        strokeOpacity={props.options.backgroundOpacity}
        strokeWidth={6}
        className={styles.innerActivityRingBackground}
      />
      <circle
        cx="50%"
        cy="50%"
        r={radius}
        strokeDasharray={`${dashArrayPart} ${'9'.repeat(props.index + 4)}`}
        stroke={props.ring.color}
        strokeWidth={6}
        style={{
          animationDuration: `${props.options.animationDurationMillis}ms`,
          animationTimingFunction: props.options.animationTimingFunction,
        }}
        className={styles.innerActivityRing}
      />
    </>
  );
}
