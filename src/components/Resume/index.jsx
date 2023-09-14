import Recard from '../Recard';
import Tags from '../Tags';
import Title from '../Title';
import './styles.css'

function Resume() {
    return (
        <>
            <Title />
            <div className="resume-main">
                <div className='resumes-titles'>
                    <h3 className='resume-title'>Education</h3>
                    <h3 className='resume-title'>Experience</h3>
                </div>
                <div className='resume-container'>
                    <Recard />
                    <Recard />
                    <Recard />
                    <Recard />
                </div>

                <div className='tags-title'>
                    <h3 className='tag-title'>Work Skills</h3>
                    <h3 className='tag-title'>Soft Skills</h3>
                </div>
                <div className='tags-container'>
                    <div className='tag'>
                        <Tags texte={'ReactJs'} />
                        <Tags texte={'Javascript'} />
                        <Tags texte={'HTML/CSS'} />
                        <Tags texte={'NodeJs'} />
                        <Tags texte={'MongoDb'} />
                    </div>
                    <div className='tag'>
                        <Tags />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;