import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import NavBarLink from './NavBarLink/NavBarLink.js';

function Navbar(props) {
    const [isActive, setActive] = useState(false);
    const [pageStatus, updatePage] = useState({
        home: true,
        projects: false,
        about: false,
        contact: false});

    function closeNav() {
        setActive(false);
    }

    function functionUpdatePages() {
        var newPages = {
            
        }
    }

    return(
        <nav className='navbar'>
            <div className={`navbar-hamburger ${isActive ? 'is-active' : ''}`}>
                {!isActive && 
                    <span onClick={() => {setActive(isActive ? false : true)}} ><FontAwesomeIcon icon="bars" /> </span>
                }    
            </div>
            <div className={`navbar-items ${isActive ? 'is-active' : ''}`}>
                {isActive &&
                    <span className='close navbar-hamburger' onClick={() => {setActive(isActive ? false : true)}}><FontAwesomeIcon icon="times" /> </span>
                }
                <NavBarLink active={pageStatus.home ? 'active-page' : ''} close={closeNav} path='/' icon='home' name='Home' />
                {/* <NavBarLink active={pageStatus.projects ? 'active-page' : ''} close={closeNav} path='/projects' icon='layer-group' name='Portfolio' /> */}
            </div>
        </nav>
    )
}

export default Navbar;