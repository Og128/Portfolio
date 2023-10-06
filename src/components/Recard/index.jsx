import React from 'react'
import './styles.css'

function Recard(props) {

    return (
        <div className='recard-container'>    
        <div className='xp-date'>{props.date}</div>
            <div className='xp-title'>{props.title}</div>
            <div className='xp-desc'>{props.text}</div>
        </div>
    )
}

export default Recard;