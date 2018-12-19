import React from 'react';
import style from './Navbar.css';

const Navbar = () => {
    return(
        <div style={style} className="navbar-fixed">
            <nav className="nav-wrapper navbar">
                <div className="container">
                    <a href="/" className="brand-logo center">[eStats]</a>
                    <ul className="left">
                        <li><a href="/">Main</a></li>
                        <li><a href="/matches">Pro Matches</a></li>
                        <li><a href="/players"> Pro Players</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};
export default Navbar;
