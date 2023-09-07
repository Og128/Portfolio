import './styles.css'

function Card(props) {
    return (
        <div className="container-card">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8BwAB/AF0Yt8AAAAASUVORK5CYII=" alt="Placeholder" />
            <h3 className="title-card">Project {props.title}</h3>
            <div className='container-info'>
            <div className="excerpt">This is my first project</div>
            <div className='btn-info'>
                <button>Oui</button>
                <button>Non</button>
            </div>
            </div>
        </div>
    )
}

export default Card;