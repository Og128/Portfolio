import React from 'react'
import './styles.css'
import Icons from '../Icons'
import { faBriefcase, faHouse, faNewspaper, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className='menu-container'>
            <Link to="/" className='link-menu'> <Icons
                icon={faHouse}
                title={'Home'} /> </Link>
            <Link to="/resume" className='link-menu'> <Icons
                icon={faNewspaper}
                title={'Resume'} /> </Link>
            <Link to="/work" className='link-menu'> <Icons
                icon={faBriefcase}
                title={'Work'} /> </Link>
            <Link to="/contact" className='link-menu'><Icons
                icon={faAddressBook}
                title={'Contact'} /> </Link>
        </div>
    )
}

export default Menu;