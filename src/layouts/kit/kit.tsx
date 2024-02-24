/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';

import ActivityRings from '../../components/activity-ring/activity-rings';

import styles from './kit.module.css';

export default function Kit() {
  return (
    <div className={styles.rings}>
      <ActivityRings
        rings={[
          {
            filledPercentage: 0.15,
            color: '#00FF00',
          },
          {
            filledPercentage: 0.66,
            color: '#0284c7',
          },
          {
            filledPercentage: 0.35,
            color: '#f123ff',
          },
          {
            filledPercentage: 0.25,
            color: '#FF0000',
          },
        ]}
        options={{
          containerWidth: '400px',
          containerHeight: '400px',
          text: '1',
          description: 'место',
        }}
      />
      <ActivityRings
        rings={[
          {
            filledPercentage: 0.75,
            color: '#00FF00',
          },
          {
            filledPercentage: 0.66,
            color: '#0284c7',
          },
          {
            filledPercentage: 0.35,
            color: '#f123ff',
          },
          {
            filledPercentage: 0.25,
            color: '#FF0000',
          },
        ]}
        options={{
          // containerWidth: '30vw',
          containerWidth: '400px',
          containerHeight: '400px',
          text: '2',
          background: '#ccc',
          // description: 'место',
        }}
      />
      <ActivityRings
        rings={[
          {
            filledPercentage: 0.15,
            color: '#00FF00',
          },
          {
            filledPercentage: 0.66,
            color: '#0284c7',
          },
          {
            filledPercentage: 0.35,
            color: '#f123ff',
          },
          {
            filledPercentage: 0.25,
            color: '#FF0000',
          },
        ]}
        options={{
          // containerWidth: '30vw',
          containerWidth: '400px',
          containerHeight: '400px',
          // text: '2',
          background: '#ccc',
          description: 'место',
        }}
      />
    </div>
  );
}
