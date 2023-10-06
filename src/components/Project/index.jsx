import Mecard from '../Mecard'
import Tags from '../Tags';
import Title from '../Title';
import './styles.css'
import { useTranslation } from 'react-i18next';

function Project() {

    const { t, i18n } = useTranslation();
    const currentNamespaceResume =
        i18n.language === 'en' ? 'transResumEN'  : 'transResumFR';
    const currentNamespaceProjet =
        i18n.language === 'en' ? 'transProjetEN'  : 'transProjetFR';

    return (
        <>
            <Title title={t(`${currentNamespaceProjet}:project.title`)} />
            <div className="project-container">
                <h2 className="project-title">{t(`${currentNamespaceProjet}:project.work.work1.title`)}</h2>
                <div className="project-text-img">
                    <div className="project-text">
                    {t(`${currentNamespaceProjet}:project.work.work2.textlearn`)} <br/><br/>
                    {t(`${currentNamespaceProjet}:project.work.work2.textdesc`)}
                    </div>
                    <div className="project-img-link">
                        <div className="project-img">
                            <img src='https://user.oc-static.com/upload/2022/10/11/16654934257102_DW-P7-Back-end_company-banner.png' alt='oui' />
                        </div>
                        <div className="project-link">
                            <Tags tags={t(`${currentNamespaceResume}:resume.skill.lists.5`)} />
                            <Tags tags={t(`${currentNamespaceResume}:resume.skill.lists.6`)} />
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <Mecard 
                    title= {t(`${currentNamespaceProjet}:project.work.titlecard.titlehard`)}
                    text= {t(`${currentNamespaceProjet}:project.work.work2.textcardhard`)} />
                    <Mecard 
                    title= {t(`${currentNamespaceProjet}:project.work.titlecard.titlesolu`)}
                    text= {t(`${currentNamespaceProjet}:project.work.work2.textcardsolus`)} />
                </div>

            </div>
        </>
    )
}

export default Project;