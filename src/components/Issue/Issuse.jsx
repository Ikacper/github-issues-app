import React from 'react'
import styles from './Issue.module.css'
import IconStar from '../../assets/svg/IconStar'

export default function Issuse({issue}) {
    return (
        <li className={styles.issue}>
            {issue}
            <IconStar />
        </li>
    )
}