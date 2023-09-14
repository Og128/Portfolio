import './styles.css'


function Workcard(props) {
    return (
        <>
                <div className='work-card'>
                    <div className="img-background"></div>
                    <div className="work-title-text">
                        <h6 className="work-title">
                            {props.bijour}title work
                        </h6>
                        <p className="work-text">
                            texte work
                        </p>
                    </div>
                </div>
        </>
    )
}

export default Workcard;