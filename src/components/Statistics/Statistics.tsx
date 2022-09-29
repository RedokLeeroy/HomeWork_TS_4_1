import React from 'react';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  percentage,
}: {
  good: number,
  neutral: number,
  bad: number,
  total: number,
  percentage: number,
}): JSX.Element => (
  <div>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p>Positive feedback:{percentage}%</p>
  </div>
);
