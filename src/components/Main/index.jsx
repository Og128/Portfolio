import './styles.css';
import Card from '../Card';

function Main(props) {
    return (
        <>
            <div className='main-container'>
            <div className='separator'></div>
                <div className='title-separator'>
                    <h2 className="section-title">{props.title}</h2>
                </div>
                <div className='container-stuff'>
                    <Card />
                </div>
            </div>
        </>
    )
}


export default Main;