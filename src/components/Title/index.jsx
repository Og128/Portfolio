import './styles.css'
import { useTranslation } from 'react-i18next';

function Title() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transResumEN' : 'transResumFR';

    return (
            <div className='title-separator'>
                <h2 className="section-title"> Bijour</h2>
                <div className='separator'></div>
            </div>
    )
}

export default Title;