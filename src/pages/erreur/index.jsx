import { useTranslation } from 'react-i18next';
import './styles.css'


function Error(){

    const { t, i18n } = useTranslation();
    const currentNamespaceProjet =
        i18n.language === 'en' ? 'transTextEN' : 'transTextFR';
    return(
        <div className='error'>
            <p className="error-num">404</p>
            <p className="error-text">{t(`${currentNamespaceProjet}:accueil.error`)}</p>
        </div>
    )
}

export default Error;