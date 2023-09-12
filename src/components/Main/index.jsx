import Home from '../Home';
import Resume from '../Resume';
import './styles.css';

function Main(props) {
    return (
        <>
            <div className='main-container'>
            <div className='separator'></div>
                <div className='title-separator'>
                    <h2 className="section-title">Projet</h2>
                </div>
                <div className='global-container'>
                    <Resume />
                </div>
            </div>
        </>
    )
}


export default Main;