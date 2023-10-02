import Title from '../Title';
import './styles.css'
import Workcard from './Workcard';

function Work() {
    return (
        <>
            <Title />
            <div className="work-container">
                <div className="work-left">
                    <Workcard bijour={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae numquam repudiandae minus fugit voluptatem dolorum ratione ullam nostrum, at facilis dolore cum aut magnam porro a maiores. Neque, ea.un textze plus long juste pour celui là pour comprendre comment fonctionne le display grid dans ce container et peut etre en savoir plus sur le ofnctionnement du système solaire et de notre planête bien aimé'} />
                    <Workcard />
                </div>
                <div className="work-right">
                    <Workcard />
                    <Workcard />
                </div>
            </div>
        </>
    )
}
export default Work;