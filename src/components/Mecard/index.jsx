import React from 'react'
import './styles.css'
import data from '../../locales/fr/texte.json'

function Mecard(props) {

  const cardData = data.accueil.cards[props.props];

  return (
    <>
    <div className='mecard-container'>
        <h4 className='mecard-title'>{cardData.titlecard}</h4>
        <p className='mecard-text'>{cardData.textcard}</p>
    </div>
    </>
  )
}

export default Mecard;