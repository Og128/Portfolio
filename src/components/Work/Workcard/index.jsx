import './styles.css'
import { useTranslation } from 'react-i18next'


function Workcard(props) {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transProjetEN' : 'transProjetFR';

    return (
        <>
                <div className='work-card'>
                    <div className="img-background"><img src={t(`${currentNamespace}:project.projects.${props.projet}.cover`)} alt={t(`project.projects.${props.projet}.title`)}></img></div>
                    <div className="work-title-text">
                        <h6 className="work-title">
                        {t(`${currentNamespace}:project.projects.${props.projet}.text`)}
                        </h6>
                        <p className="work-text">
                        {t(`${currentNamespace}:project.projects.${props.projet}.title`)}
                        </p>
                    </div>
                </div>
        </>
    )
}

export default Workcard;