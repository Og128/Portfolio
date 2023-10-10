import './styles.css'


function Workcard(props) {
    return (
        <>
            <div className='work-card'>
                <div className="img-background">
                    <img src={props.image}
                        alt={props.title}></img></div>
                <div className="work-title-text">
                    <h6 className="work-title">
                        {props.title}
                    </h6>
                    <p className="work-text">
                        {props.text}
                    </p>
                </div>
            </div >
        </>
    )
}

export default Workcard;