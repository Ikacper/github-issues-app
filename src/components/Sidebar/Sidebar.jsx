import React from 'react'
import SystemButtons from '../SystemButtons/SystemButtons'
import Filters from '../Filters/Filters'
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={styles.sidebarWrapper}>
            <SystemButtons />
            <Filters />
        </div>
    )
}