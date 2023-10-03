import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next';

function Mecard(props) {

  const { t } = useTranslation(['transTextEN', 'transTextFR']);

  return (
    <>
    <div className='mecard-container'>
        <h4 className='mecard-title'>{t(`accueil.cards.${props.props}.titlecard`)}</h4>
        <p className='mecard-text'>{t(`accueil.cards.${props.props}.textcard`)}</p>
    </div>
    </>
  )
}

export default Mecard;