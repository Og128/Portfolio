import './styles.css'
import data from '../../../locales/fr/projet.json'


function Workcard(props) {

    const projetData = data.project.projects[props.projet]

    return (
        <>
                <div className='work-card'>
                    <div className="img-background"><img src={projetData.cover} alt={projetData.title}></img></div>
                    <div className="work-title-text">
                        <h6 className="work-title">
                            {projetData.text}
                        </h6>
                        <p className="work-text">
                            {projetData.title}
                        </p>
                    </div>
                </div>
        </>
    )
}

export default Workcard;