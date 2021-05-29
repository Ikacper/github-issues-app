import React from 'react';
import data from '../../data.json';
import Issue from '../Issue/Issue';
import styles from './IssuesWindow.module.css';

export default function IssuesWindow() {
  return (
    <div className={styles.issuesWindowWrapper}>
      {data.map((day) => (
        <ul>
          <span>{day.date}</span>
          {day.issues.map((issue) => (
            <Issue key={issue.id} issue={issue.issue} />
          ))}
        </ul>
      ))}
    </div>
  );
}
