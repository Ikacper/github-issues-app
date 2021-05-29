import React from 'react';
import PropTypes from 'prop-types';
import styles from './Issue.module.css';
import IconStar from '../../assets/svg/IconStar';

export default function Issue({ issue }) {
  return (
    <li className={styles.issue}>
      {issue}
      <IconStar />
    </li>
  );
}

Issue.propTypes = {
  issue: PropTypes.string,
};

Issue.defaultProps = {
  issue: 'Page changes',
};
