import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Toggle({ onToggle }) {

    const [theme, setTheme] = useState('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        onToggle(newTheme);
    }

    return (
        <>
            <div className="dark-light"
                onClick={switchTheme}>
                <FontAwesomeIcon icon={faMoon} size="lg" />
            </div>
        </>
    )
}

export default Toggle;