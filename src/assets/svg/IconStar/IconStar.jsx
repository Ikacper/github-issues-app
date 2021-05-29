import React, { useState } from 'react';
import styles from './IconStar.module.css';

export default function Star() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`${styles.star} ${active ? styles.activeStar : ''}`}
      onClick={() => setActive(!active)}
      onKeyPress={() => setActive(!active)}
      role="button"
      tabIndex={0}
    >
      <svg preserveAspectRatio="xMidYMid" width="17" height="16" viewBox="0 0 17 16" stroke="#e0e0e0">
        <path strokeWidth="1" d="M8.500,0.000 L11.301,5.028 L16.999,6.112 L13.033,10.302 L13.753,16.000 L8.500,13.561 L3.247,16.000 L3.967,10.302 L0.001,6.112 L5.699,5.028 L8.500,0.000 " />
      </svg>
    </div>
  );
}
