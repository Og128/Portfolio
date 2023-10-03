import { useTranslation } from 'react-i18next';
import Recard from '../Recard';
import Tags from '../Tags';
import Title from '../Title';
import './styles.css'

function Resume() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transResumEN' : 'transResumFR';

    return (
        <>
            <Title props={'résume'} />
            <div className="resume-main">
                <div className='resumes-titles'>
                    <h3 className='resume-title'>{t(`${currentNamespace}:resume.title1`)}</h3>
                    <h3 className='resume-title'>{t(`${currentNamespace}:resume.title2`)}</h3>
                </div>
                <div className='resume-container'>
                    <Recard props={'card1'} />
                    <Recard props={'card3'} />
                    <Recard props={'card2'} />
                    <Recard props={'card4'} />
                </div>

                <div className='tags-title'>
                    <h3 className='tag-title'>{t(`${currentNamespace}:resume.skill.title1`)}</h3>
                    <h3 className='tag-title'>{t(`${currentNamespace}:resume.skill.title2`)}</h3>
                </div>
                <div className='tags-container'>
                    <div className='tag'>
                        <Tags texte={'1'} />
                        <Tags texte={'2'} />
                        {/* <Tags texte={'3'} /> */}
                        <Tags texte={'4'} />
                        <Tags texte={'5'} />
                        <Tags texte={'6'} />
                    </div>
                    <div className='tag'>
                        <Tags texte={'7'} />
                        <Tags texte={'8'} />
                        <Tags texte={'9'} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;