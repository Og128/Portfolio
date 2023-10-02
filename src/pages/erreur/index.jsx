import './styles.css'

function Error(){
    return(
        <div className='error'>
            <p className="error-num">404</p>
            <p className="error-text">La page que vous recherchez n'est pas disponible</p>
        </div>
    )
}

export default Error;