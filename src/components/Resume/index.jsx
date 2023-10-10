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
            <Title title={t(`${currentNamespace}:resume.title`)} />
            <div className="resume-main">
                <div className='resume-container'>
                    <div className="resume-container-left">
                        <h3 className='resume-title'>{t(`${currentNamespace}:resume.title1`)}</h3>
                        <Recard
                            date={t(`${currentNamespace}:resume.cards.card1.year`)}
                            title={t(`${currentNamespace}:resume.cards.card1.titlecard`)}
                            text={t(`${currentNamespace}:resume.cards.card1.textcard`)} />
                        <Recard
                            date={t(`${currentNamespace}:resume.cards.card2.year`)}
                            title={t(`${currentNamespace}:resume.cards.card2.titlecard`)}
                            text={t(`${currentNamespace}:resume.cards.card2.textcard`)} />
                    </div>
                    <div className="resume-container-right">
                        <h3 className='resume-title'>{t(`${currentNamespace}:resume.title2`)}</h3>
                        <Recard
                            date={t(`${currentNamespace}:resume.cards.card3.year`)}
                            title={t(`${currentNamespace}:resume.cards.card3.titlecard`)}
                            text={t(`${currentNamespace}:resume.cards.card3.textcard`)} />
                        <Recard
                            date={t(`${currentNamespace}:resume.cards.card4.year`)}
                            title={t(`${currentNamespace}:resume.cards.card4.titlecard`)}
                            text={t(`${currentNamespace}:resume.cards.card4.textcard`)} />
                    </div>
                </div>
            </div>
            <div className='tags-container'>
                <div className='tag tag-left'>
                        <h3 className='tag-title'>{t(`${currentNamespace}:resume.skill.title1`)}</h3>
                        <div className="tags-left">
                        <Tags tags={t(`${currentNamespace}:resume.skill.lists.1`)} />
                        <Tags tags={t(`${currentNamespace}:resume.skill.lists.2`)} />
                        {/* <Tags tags={'3'} /> */}
                        <Tags tags={t(`${currentNamespace}:resume.skill.lists.4`)} />
                        <Tags tags={t(`${currentNamespace}:resume.skill.lists.5`)} />
                        <Tags tags={t(`${currentNamespace}:resume.skill.lists.6`)} />
                    </div>
                </div>
                <div className='tag tag-right'>
                    <h3 className='tag-title'>{t(`${currentNamespace}:resume.skill.title2`)}</h3>
                    <div className="tags-right">
                        <Tags tags={t(`${currentNamespace}:resume.skill.lists.7`)} />
                        <Tags tags={t(`${currentNamespace}:resume.skill.lists.8`)} />
                        <Tags tags={t(`${currentNamespace}:resume.skill.lists.9`)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;