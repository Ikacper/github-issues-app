import React from 'react';
import issuesList from '../../data/issues.json';
import Issue from '../Issue/Issue';
import styles from './IssuesWindow.module.css';

export default function IssuesWindow() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.issuesWindowWrapper}>
        {issuesList.map(({ id, date, issues }) => (
          <ul key={id}>
            <div className={styles.issueDate}>{date}</div>
            {issues.map((issue) => (
              <Issue key={issue.id} issue={issue.issue} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
