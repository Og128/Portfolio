import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className="navigation-bar">
            <div className='logo'>Olivier GAUTHERON</div>
            <div className="dark-light">
                <FontAwesomeIcon icon={faMoon} size="lg" />
            </div>
        </header>
    );
}

