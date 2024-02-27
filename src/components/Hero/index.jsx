import Information from '../Information';
import './styles.css'
import { faLocationDot, faMobileScreen, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Socialink from '../Socialink';
import Portrait from '../../assets/portrait.webp'
import { useTranslation } from 'react-i18next';
import Encv from '../../assets/Resume_OLIVIER_GAUTHERON.pdf'
import Frcv from '../../assets/CV_FR_OLIVIER_GAUTHERON.pdf'

function Hero() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transTextEN' : 'transTextFR';

    const downloadResume = () => {
        const resumePath =  i18n.language === 'en' ? Encv : Frcv
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Resume_OLIVIER_GAUTHERON.pdf';
        link.click();
    };

    return (
        <div className="container-hero">
            <div className='portrait'>
                <img src={Portrait} alt="Portrait d'Olivier Gautheron" />
            </div>
            <div className="info-me">
                <h2 className='me-name'>Olivier Gautheron</h2>
                <p className='work-title'>{t(`${currentNamespace}:accueil.info.hero.title`)}</p>
                <div className="info-link">
                    <a href={t(`${currentNamespace}:accueil.info.link.linked`)} aria-label='linked' rel='noreferrer' target='_blank'>
                        <Socialink
                            icon={faLinkedin}
                            color={{ color: '#0077B5' }} /></a>
                    <a href={t(`${currentNamespace}:accueil.info.link.face`)} aria-label='facebook' rel='noreferrer' target='_blank'>
                        <Socialink
                            icon={faFacebookF}
                            color={{ color: '#1877F2' }} /></a>
                    <a href={t(`${currentNamespace}:accueil.info.link.twitter`)} aria-label='twitter' rel='noreferrer' target='_blank'>
                        <Socialink
                            icon={faTwitter}
                            color={{ color: '#1DA1F2' }} /></a>
                    <a href={t(`${currentNamespace}:accueil.info.link.github`)} aria-label='github' rel='noreferrer' target='_blank'>
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
                            details={t(`${currentNamespace}:accueil.info.herotext.phone`)} />
                        <Information
                            icon={faEnvelope}
                            color={{ color: 'var(--gradient-info)' }}
                            title={t(`${currentNamespace}:accueil.info.hero.email`)}
                            details={'gautheron.og@gmail.com'} />
                        <Information
                            icon={faLocationDot}
                            color={{ color: 'var(--gradient-infos)' }}
                            title={t(`${currentNamespace}:accueil.info.hero.location`)}
                            details={t(`${currentNamespace}:accueil.info.herotext.location`)} />

                    </div>
                    <div className='btn-dl' onClick={downloadResume}>
                        <FontAwesomeIcon icon={faDownload} />
                        <p>{t(`${currentNamespace}:accueil.info.hero.load`)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;