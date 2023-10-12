import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icons(props) {
    return (
        <div className='menu-card'>
            <div className='menu-icon'>
                <FontAwesomeIcon icon={props.icon} style={props.color} />
            </div>
            <p className='menu-title'>{props.title}</p>
        </div>
    )
}

export default Icons;