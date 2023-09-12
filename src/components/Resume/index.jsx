import Recard from '../Recard';
import Tags from '../Tags';
import './styles.css'

function Resume() {
    return (
        <>
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

            <div className='work-title'>
                <h3 className='work'>Work Skills</h3>
                <h3 className='work'>Soft Skills</h3>
            </div>
            <div className='work-container'>
                <div className='work-tags'>
                    <Tags texte={'ReactJs'}/>
                    <Tags texte={'Javascript'}/>
                    <Tags texte={'HTML/CSS'}/>
                    <Tags texte={'NodeJs'}/>
                    <Tags texte={'MongoDb'}/>
                </div>
                <div className='work-tags'>
                    <Tags />
                </div>
            </div>
        </>
    )
}

export default Resume;