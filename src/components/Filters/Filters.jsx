import React from 'react';
import styles from './Fiter.module.css';

import { IconGithub, IconOpenIssue, IconClosedIssue } from '../../assets/svg/IconFilters';

const filters = [
  {
    id: 1,
    icon: <IconGithub />,
    name: 'All',
    amountOfIssues: 12,
  },
  {
    id: 2,
    icon: <IconOpenIssue />,
    name: 'Open',
    amountOfIssues: 4,
  },
  {
    id: 3,
    icon: <IconClosedIssue />,
    name: 'Closed',
    amountOfIssues: 8,
  },
];

export default function Filters() {
  return (
    <ul>
      {filters.map((filter) => (
        <li key={filter.id} className={styles.filter}>
          <div className={styles.iconWithName}>
            <div className={styles.filterIcon}>
              {filter.icon}
            </div>
            <span className={styles.filterName}>
              {filter.name}
            </span>
          </div>
          <span className={styles.filterAmountOfIssues}>
            {filter.amountOfIssues}
          </span>
        </li>
      ))}
    </ul>
  );
}
