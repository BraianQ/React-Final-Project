import React from 'react';
import logo from '../assets/logo.png'
import '../routes/mainView/mainView'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="Header">
            <Link className="link" to='/'><h1 className="tittlespori">Spotisearch</h1></Link>
            <img src={logo} className="main-view__logo" alt="logo" />
        </div>
    )
}

export default Header;