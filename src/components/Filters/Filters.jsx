import React from 'react';
import styles from './Fiter.module.css';

const filters = [
  {
    id: 1,
    name: 'All',
    amountOfIssues: 12,
  },
  {
    id: 2,
    name: 'Open',
    amountOfIssues: 4,
  },
  {
    id: 3,
    name: 'Closed',
    amountOfIssues: 8,
  },
];

export default function Filters() {
  return (
    <ul className={StyleSheet.filtersWrapper}>
      {filters.map((filter) => (
        <li key={filter.id} className={styles.asd}>
          {filter.name}
          {filter.amountOfIssues}
        </li>
      ))}
    </ul>
  );
}
