import React from 'react'
import './styles.css'
import data from '../../locales/fr/resume.json'

function Recard(props) {

    const resumeData = data.resume.cards[props.props]
    return (
        <div className='recard-container'>    
        <div className='xp-date'>{resumeData.year}</div>
            <div className='xp-title'>{resumeData.titlecard}</div>
            <div className='xp-desc'>{resumeData.textcard}</div>
        </div>
    )
}

export default Recard;