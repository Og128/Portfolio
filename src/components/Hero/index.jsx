import Information from '../Information';
import './styles.css'
import { faLocationDot, faMobileScreen, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Socialink from '../Socialink';
import Portrait from '../../assets/portraitanon.png'

function Hero() {
    return (
        <div className="container-hero">
            <div className='portrait'>
                <img src={Portrait} alt="Portrait d'Olivier Gautheron"/>
            </div>
            <div className="info-me">
                <p className='me-name'>Olivier Gautheron</p>
                <p className='work-title'>FullStack Developper</p>
                <div className="info-link">
                    <Socialink
                        icon={faLinkedin}
                        color={{ color: '#0077B5' }} />
                    <Socialink
                        icon={faFacebookF}
                        color={{ color: '#1877F2' }} />
                    <Socialink
                        icon={faTwitter}
                        color={{ color: '#1DA1F2' }} />
                    <Socialink
                        icon={faGithub}
                        color={{ color: '#000' }} />

                </div>
                <div className='container-information'>
                    <div className='information'>
                        <Information
                            icon={faMobileScreen}
                            color={{ color: '#EC1C09' }}
                            title={'Phone'}
                            details={'+23306587'} />
                        <Information
                            icon={faEnvelope}
                            color={{ color: '#FF9C1B' }}
                            title={'Email'}
                            details={'gautheron.og@gmail.com'} />
                        <Information
                            icon={faLocationDot}
                            color={{ color: '#E80505' }}
                            title={'Location'}
                            details={'Tavernes, France'} />

                    </div>
                    <div className='btn-dl'>
                        <FontAwesomeIcon icon={faDownload} />
                        <p>Téléchargement CV</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;