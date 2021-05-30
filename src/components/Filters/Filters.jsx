import React from 'react';
import styles from './Fiter.module.css';
import filters from '../../data/filters';

export default function Filters() {
  return (
    <ul>
      {filters.map(({
        id, icon, name, amountOfIssues,
      }) => (
        <li key={id} className={styles.filter}>
          <div className={styles.iconWithName}>
            <div className={styles.filterIcon}>
              {icon}
            </div>
            <span className={styles.filterName}>
              {name}
            </span>
          </div>
          <span className={styles.filterAmountOfIssues}>
            {amountOfIssues}
          </span>
        </li>
      ))}
    </ul>
  );
}
