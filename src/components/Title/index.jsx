import './styles.css'

function Title(props) {

    return (
            <div className='title-separator'>
                <h2 className="section-title"> {props.title}</h2>
                <div className='separator'></div>
            </div>
    )
}

export default Title;