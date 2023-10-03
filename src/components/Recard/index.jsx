import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next'

function Recard(props) {

    const {t} = useTranslation(['transResumEN', 'transResumFR'])
    return (
        <div className='recard-container'>    
        <div className='xp-date'>{t(`resume.cards.${props.props}.year`)}</div>
            <div className='xp-title'>{t(`resume.cards.${props.props}.titlecard`)}</div>
            <div className='xp-desc'>{t(`resume.cards.${props.props}.textcard`)}</div>
        </div>
    )
}

export default Recard;