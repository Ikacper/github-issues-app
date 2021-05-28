import React from 'react'
import data from '../../data.json'
import Issue from '../Issue/Issuse'

export default function IssuesWindow() {
    return (
        <div>
            {data.map(day => 
                <ul>
                    <span>{day.date}</span>
                    {day.issues.map( issue => 
                        <Issue key={issue.id} issue={issue.issue}/>
                    )}
                </ul>
            )}
        </div>
    )
}