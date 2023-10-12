import Information from '../Information';
import './styles.css'
import { faLocationDot, faMobileScreen, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Socialink from '../Socialink';
import Portrait from '../../assets/portraitanon.png'
import { useTranslation } from 'react-i18next';

function Hero() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transTextEN' : 'transTextFR';

    return (
        <div className="container-hero">
            <div className='portrait'>
                <img src={Portrait} alt="Portrait d'Olivier Gautheron" />
            </div>
            <div className="info-me">
                <p className='me-name'>Olivier Gautheron</p>
                <p className='work-title'>{t(`${currentNamespace}:accueil.info.hero.title`)}</p>
                <div className="info-link">
                    <a href={t(`${currentNamespace}:accueil.info.link.linked`)}>
                        <Socialink
                            icon={faLinkedin}
                            color={{ color: '#0077B5' }} /></a>
                    <a href={t(`${currentNamespace}:accueil.info.link.face`)}>
                        <Socialink
                            icon={faFacebookF}
                            color={{ color: '#1877F2' }} /></a>
                    <a href={t(`${currentNamespace}:accueil.info.link.twitter`)}>
                        <Socialink
                            icon={faTwitter}
                            color={{ color: '#1DA1F2' }} /></a>
                    <a href={t(`${currentNamespace}:accueil.info.link.github`)}>
                        <Socialink
                            icon={faGithub}
                            color={{ color: 'var(--text-theme)' }} /></a>

                </div>
                <div className='container-information'>
                    <div className='information'>
                        <Information
                            icon={faMobileScreen}
                            color={{ color: 'var(--gradient-infos)' }}
                            title={t(`${currentNamespace}:accueil.info.hero.phone`)}
                            details={'+23306587'} />
                        <Information
                            icon={faEnvelope}
                            color={{ color: 'var(--gradient-info)' }}
                            title={t(`${currentNamespace}:accueil.info.hero.email`)}
                            details={'gautheron.og@gmail.com'} />
                        <Information
                            icon={faLocationDot}
                            color={{ color: 'var(--gradient-infos)' }}
                            title={t(`${currentNamespace}:accueil.info.hero.location`)}
                            details={'Tavernes, France'} />

                    </div>
                    <div className='btn-dl'>
                        <FontAwesomeIcon icon={faDownload} />
                        <p>{t(`${currentNamespace}:accueil.info.hero.load`)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;