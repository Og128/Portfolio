import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";

export default function Header({ onToggle }) {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        onToggle(newTheme);
    };


    return (
        <header className="navigation-bar">
            <div className='logo'>Olivier GAUTHERON</div>
            <div className='btn-lang-dark'>
                <div className="btn-lang"><span className='fr'>FR</span>/<span className='eng'>ENG</span></div>
                <div className="dark-light"
                    onClick={switchTheme}>
                    <FontAwesomeIcon icon={faMoon} size="lg" />
                </div>
            </div>
        </header>
    );
}

