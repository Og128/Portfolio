import { useTranslation } from 'react-i18next';
import Mecard from '../Mecard';
import Title from '../Title';
import './styles.css'

function Home() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transTextEN' : 'transTextFR';

    return (
        <>
            <Title title={t(`${currentNamespace}:accueil.title`)} />
            <div className="home-container">
                <p className="home-text">
                    {t(`${currentNamespace}:accueil.text`)}
                </p>
                <div className="do-container">
                    <h3 className="do-title">{t(`${currentNamespace}:accueil.who`)}</h3>
                    <div className="do-grid">
                        <Mecard 
                        title={t(`${currentNamespace}:accueil.cards.card1.titlecard`)}
                        text= {t(`${currentNamespace}:accueil.cards.card1.textcard`)} />
                        <Mecard 
                        title={t(`${currentNamespace}:accueil.cards.card2.titlecard`)}
                        text= {t(`${currentNamespace}:accueil.cards.card2.textcard`)} />
                        <Mecard 
                        title={t(`${currentNamespace}:accueil.cards.card3.titlecard`)}
                        text= {t(`${currentNamespace}:accueil.cards.card3.textcard`)} />
                        <Mecard 
                        title={t(`${currentNamespace}:accueil.cards.card4.titlecard`)}
                        text= {t(`${currentNamespace}:accueil.cards.card4.textcard`)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;