import React from 'react'
import './styles.css'

function Mecard(props) {

  return (
    <>
    <div className='mecard-container'>
        <h4 className='mecard-title'>{props.title}</h4>
        <p className='mecard-text'>{props.text}</p>
    </div>
    </>
  )
}

export default Mecard;