import Title from '../Title';
import './styles.css'
import Workcard from './Workcard';

function Work() {
    return (
        <>
            <Title />
            <div className="work-container">
                <div className="work-left">
                    <Workcard projet={'project1'} />
                    <Workcard projet={'project2'} />
                </div>
                <div className="work-right">
                    <Workcard projet={'project3'} />
                    <Workcard projet={'project4'} />
                </div>
            </div>
        </>
    )
}
export default Work;