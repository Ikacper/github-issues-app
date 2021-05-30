import React from 'react';
import data from '../../data.json';
import Issue from '../Issue/Issue';
import styles from './IssuesWindow.module.css';

export default function IssuesWindow() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.issuesWindowWrapper}>
        {data.map((day) => (
          <ul key={day.id}>
            <div className={styles.issueDate}>{day.date}</div>
            {day.issues.map((issue) => (
              <Issue key={issue.id} issue={issue.issue} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
