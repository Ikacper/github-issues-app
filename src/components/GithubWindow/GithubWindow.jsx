import React from 'react';
import IssuesWindow from '../IssuesWindow/IssuesWindow';
import Sidebar from '../Sidebar/Sidebar';
import styles from './GithubWindow.module.css';

export default function GithubWindow() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <IssuesWindow />
    </div>
  );
}
