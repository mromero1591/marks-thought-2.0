import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function Navbar(props) {
    const [isActive, setActive] = useState(false);

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
                <Link onClick={() => {setActive(false)}} to='/' className='navbar-item' href="#"><FontAwesomeIcon icon="home" /> Home </Link>
                <Link onClick={() => {setActive(false)}} to='/projects' className='navbar-item' href="#"><FontAwesomeIcon icon="layer-group" /> Portfolio</Link>
                <Link onClick={() => {setActive(false)}} to='/about' className='navbar-item' href="#"><FontAwesomeIcon icon="info-circle" /> About</Link>
                <Link onClick={() => {setActive(false)}} to='/contact' className='navbar-item' href="#"><FontAwesomeIcon icon="address-card" /> Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;