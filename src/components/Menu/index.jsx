import React from 'react'
import './styles.css'
import Icons from '../Icons'
import { faBriefcase, faHouse, faNewspaper, faAddressBook } from '@fortawesome/free-solid-svg-icons'

function Menu() {
    return (
        <div className='menu-container'>
            <Icons
                icon={faHouse}
                title={'Home'} />
            <Icons
                icon={faNewspaper}
                title={'Resume'} />
            <Icons
                icon={faBriefcase}
                title={'Work'} />
            <Icons
                icon={faAddressBook}
                title={'Contact'} />
        </div>
    )
}

export default Menu;