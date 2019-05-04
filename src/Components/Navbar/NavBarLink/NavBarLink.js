import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavbarLink(props){
    return(
        <Link onClick={() => {props.close()}} to={props.path} className={`navbar-item ${props.active}`} href="#"><FontAwesomeIcon icon={props.icon} /> {props.name} </Link>
    )
}