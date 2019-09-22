import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../img/logo.png';

const Nav = () => {
    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    <img src={Logo} className="logo__image" alt="Logo"></img>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/groups">Groups</Link></li>
                    <li><Link to="/createGroup">New Group</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;