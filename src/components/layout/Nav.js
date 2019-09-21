import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <nav>
                <div class="nav-wrapper">
                <Link to="/" class="brand-logo">Logo</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/createGroup">New Group</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;