import { useTranslation } from 'react-i18next';
import Recard from '../Recard';
import Tags from '../Tags';
import Title from '../Title';
import './styles.css'

function Resume() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transResumEN' : 'transResumFR';
    let carDetails = `${currentNamespace}:resume.cards`;
    let skillDetails = `${currentNamespace}:resume.skill.lists`

    return (
        <>
            <Title title={t(`${currentNamespace}:resume.title`)} />
            <div className="resume-main">
                <div className='resume-container'>
                    <div className="resume-container-left">
                        <h3 className='resume-title'>{t(`${currentNamespace}:resume.title1`)}</h3>
                        <Recard
                            date={t(`${carDetails}.card1.year`)}
                            title={t(`${carDetails}.card1.titlecard`)}
                            text={t(`${carDetails}.card1.textcard`)} />
                        <Recard
                            date={t(`${carDetails}.card2.year`)}
                            title={t(`${carDetails}.card2.titlecard`)}
                            text={t(`${carDetails}.card2.textcard`)} />
                    </div>
                    <div className="resume-container-right">
                        <h3 className='resume-title'>{t(`${currentNamespace}:resume.title2`)}</h3>
                        <Recard
                            date={t(`${carDetails}.card3.year`)}
                            title={t(`${carDetails}.card3.titlecard`)}
                            text={t(`${carDetails}.card3.textcard`)} />
                        <Recard
                            date={t(`${carDetails}.card4.year`)}
                            title={t(`${carDetails}.card4.titlecard`)}
                            text={t(`${carDetails}.card4.textcard`)} />
                    </div>
                </div>
            </div>
            <div className='tags-container'>
                <div className='tag tag-left'>
                    <h3 className='tag-title'>{t(`${currentNamespace}:resume.skill.title1`)}</h3>
                    <div className="tags-left">
                        <Tags tags={t(`${skillDetails}.1`)} />
                        <Tags tags={t(`${skillDetails}.2`)} />
                        {/* <Tags tags={'3'} /> */}
                        <Tags tags={t(`${skillDetails}.4`)} />
                        <Tags tags={t(`${skillDetails}.5`)} />
                        <Tags tags={t(`${skillDetails}.6`)} />
                    </div>
                </div>
                <div className='tag tag-right'>
                    <h3 className='tag-title'>{t(`${currentNamespace}:resume.skill.title2`)}</h3>
                    <div className="tags-right">
                        <Tags tags={t(`${skillDetails}.7`)} />
                        <Tags tags={t(`${skillDetails}.8`)} />
                        <Tags tags={t(`${skillDetails}.9`)} />
                        <Tags tags={t(`${skillDetails}.10`)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;