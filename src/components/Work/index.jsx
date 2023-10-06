import Title from '../Title';
import './styles.css'
import Workcard from './Workcard';
import { useTranslation } from 'react-i18next'




function Work() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transProjetEN' : 'transProjetFR';

    return (
        <>
            <Title title={t(`${currentNamespace}:project.title`)} />
            <div className="work-container">
                <div className="work-left">
                    <Workcard 
                    image ={t(`${currentNamespace}:project.projects.project1.cover`)} 
                    title ={t(`${currentNamespace}:project.projects.project1.title`)}
                    text={t(`${currentNamespace}:project.projects.project1.text`)}
                    />
                    <Workcard 
                    image ={t(`${currentNamespace}:project.projects.project2.cover`)} 
                    title ={t(`${currentNamespace}:project.projects.project2.title`)}
                    text={t(`${currentNamespace}:project.projects.project2.text`)}
                    />
                </div>
                <div className="work-right">
                    <Workcard 
                    image ={t(`${currentNamespace}:project.projects.project3.cover`)} 
                    title ={t(`${currentNamespace}:project.projects.project3.title`)}
                    text={t(`${currentNamespace}:project.projects.project3.text`)} />
                    <Workcard 
                    image ={t(`${currentNamespace}:project.projects.project4.cover`)} 
                    title ={t(`${currentNamespace}:project.projects.project4.title`)}
                    text={t(`${currentNamespace}:project.projects.project4.text`)} />
                </div>
            </div>
        </>
    )
}
export default Work;