import React from 'react';
import GithubWindow from './components/GithubWindow/GithubWindow';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.background}>
      <GithubWindow />
    </div>
  );
}
