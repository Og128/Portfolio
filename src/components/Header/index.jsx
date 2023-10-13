import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as solidLight} from '@fortawesome/free-solid-svg-icons';
import { faSun as regularLight} from '@fortawesome/free-regular-svg-icons';
import React, { useState } from "react";
import LanguageToggle from '../Language';

export default function Header({ onToggle }) {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        onToggle(newTheme);
    };

    let iconTheme = theme ==='light' ? solidLight : regularLight;
    let colorTheme = theme === 'dark' ? 'yellow' : 'black'

    return (
        <header className="navigation-bar">
            <div className='logo'>Olivier GAUTHERON</div>
            <div className='btn-lang-dark'>
                <LanguageToggle />
                <div className="dark-light"
                    onClick={switchTheme}>
                    <FontAwesomeIcon icon={iconTheme} color={colorTheme} size="lg" />
                </div>
            </div>
        </header>
    );
}

