import React from 'react';
import styles from './SystemButtons.module.css';

export default function SystemButtons() {
  return (
    <div className={styles.systemButtonsWrapper}>
      <button type="button" className={`${styles.btn} ${styles.closeBtn}`} aria-label="close" />
      <button type="button" className={`${styles.btn} ${styles.minimizeBtn}`} aria-label="minimize" />
      <button type="button" className={`${styles.btn} ${styles.maximizeBtn}`} aria-label="maximize" />
    </div>
  );
}
