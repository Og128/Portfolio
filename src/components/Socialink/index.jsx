import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css'

function Socialink(props) {
    return (
        <div className="btnlink">
            <FontAwesomeIcon 
            style={props.color} icon={props.icon} size='lg'/>
        </div>
        )
}

export default Socialink;