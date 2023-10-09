import Title from '../Title';
import './styles.css'
import Workcard from './Workcard';
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import IMAGES from '../../assets';


function Work() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transProjetEN' : 'transProjetFR';
    const projectDetails = [
        'work1',
        'work2',
        'work3',
        'work4',
    ].map((id) => ({
        id,
        title: t(`${currentNamespace}:project.works.${id}.title`),
        text: t(`${currentNamespace}:project.works.${id}.text`),
    }));
    

    return (
        <>
            <Title title={t(`${currentNamespace}:project.title`)} />
            <div className="work-container">
                {projectDetails.map((project) => (
                    <Link to={`/work/${project.id}`} key={project.id} className="link-menu">
                        {console.log(project.cover)}
                        <Workcard image={IMAGES[`${project.id}banner`]} title={project.title} text={project.text} />
                    </Link>
                ))}
            </div>
        </>
    )
}
export default Work;