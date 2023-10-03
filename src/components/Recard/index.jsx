import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next'

function Recard(props) {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transResumEN' : 'transResumFR';

    return (
        <div className='recard-container'>    
        <div className='xp-date'>{t(`${currentNamespace}:resume.cards.${props.props}.year`)}</div>
            <div className='xp-title'>{t(`${currentNamespace}:resume.cards.${props.props}.titlecard`)}</div>
            <div className='xp-desc'>{t(`${currentNamespace}:resume.cards.${props.props}.textcard`)}</div>
        </div>
    )
}

export default Recard;