import Mecard from '../Mecard'
import Tags from '../Tags';
import Title from '../Title';
import './styles.css'
import { useTranslation } from 'react-i18next';
import IMAGES from '../../assets';
import { useParams } from 'react-router-dom';
import Error from '../../pages/erreur';

function Project() {

    const { id } = useParams();
    const path = id.split('work')[1];

    const { t, i18n } = useTranslation();
    const currentNamespaceProjet =
        i18n.language === 'en' ? 'transProjetEN' : 'transProjetFR';

    let workDetails = `${currentNamespaceProjet}:project.works.${id}`;
    let workImg = IMAGES[`${id}`];

    let noRef = id === 'work4' ? '' : 'noreferrer';
    let blank = id === 'work4' ? '' : '_blank';

    if (path < 5) {
        return (
            <>
                <Title title={t(`${currentNamespaceProjet}:project.title`)} />
                <div className="project-container">
                    <h2 className="project-title">{t(`${workDetails}.text`)}</h2>
                    <div className="project-text-img">
                        <div className="project-text">
                            {t(`${workDetails}.textlearn`)} <br /><br />
                            {t(`${workDetails}.textdesc`)}
                        </div>
                        <div className="project-img-link">
                            <div className="project-img">
                                <img src={workImg} alt={t(`${workDetails}.text`)} />
                            </div>
                            <div className="project-link">
                                <a href={t(`${workDetails}.github`)} rel='noreferrer' target='_blank'>
                                    <Tags tags={t(`${workDetails}.tag1`)} /> </a>
                                <a href={t(`${workDetails}.website`)} rel={noRef} target={blank}>
                                    <Tags tags={t(`${workDetails}.tag2`)} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <Mecard
                            title={t(`${currentNamespaceProjet}:project.works.titlecard.titlehard`)}
                            text={t(`${workDetails}.textcardhard`)} />
                        <Mecard
                            title={t(`${currentNamespaceProjet}:project.works.titlecard.titlesolu`)}
                            text={t(`${workDetails}.textcardsolus`)} />
                    </div>

                </div>
            </>
        )
    } else {
        return (
            <>
                <Error />
            </>
        )
    }
}
export default Project;