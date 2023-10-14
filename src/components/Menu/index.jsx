import React from 'react'
import './styles.css'
import Icons from '../Icons'
import { faBriefcase, faHouse, faNewspaper, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Menu() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transTextEN' : 'transTextFR';
        const toTheTop= () => {
            if (window.matchMedia('(max-width: 500px)').matches) {
                window.scrollTo({
                  top: 100,
                  behavior: 'instant',
                });
              }
            };
    return (
        <div className='menu-container'>
            <Link to="/" className='link-menu' onClick={toTheTop}> <Icons
                color={{ color: 'var(--text-theme)' }}
                icon={faHouse}
                title={t(`${currentNamespace}:accueil.info.icons.home`)} /> </Link>
            <Link to="/resume" className='link-menu' onClick={toTheTop}> <Icons
                color={{ color: 'var(--text-theme)' }}
                icon={faNewspaper}
                title={t(`${currentNamespace}:accueil.info.icons.resume`)} /> </Link>
            <Link to="/work" className='link-menu' onClick={toTheTop}> <Icons
                color={{ color: 'var(--text-theme)' }}
                icon={faBriefcase}
                title={t(`${currentNamespace}:accueil.info.icons.work`)} /> </Link>
            <Link to="/contact" className='link-menu' onClick={toTheTop}><Icons
                color={{ color: 'var(--text-theme)' }}
                icon={faAddressBook}
                title={t(`${currentNamespace}:accueil.info.icons.contact`)} /> </Link>
        </div>
    )
}

export default Menu;