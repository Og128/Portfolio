import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Information(props) {
    return (
        <>
            <div className='information-broad'>
                <FontAwesomeIcon icon={props.icon} style={props.color} />
                <div className='full-info'>
                    <div className='title-full-info'>{props.title}</div>
                    <div className='text-full-info'>{props.details}</div>
                </div>
            </div>
            <div className='split'></div>
        </>

    )
}

export default Information;