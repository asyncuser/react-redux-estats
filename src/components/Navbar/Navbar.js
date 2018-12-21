import React from 'react';
import style from './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={style} className="navbar-fixed">
            <nav className="nav-wrapper navbar">
                <div className="container">
                    <a href="/" className="brand-logo center">[eStats]</a>
                    <ul className="left">
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/matches">Pro Matches</Link></li>
                        <li><Link to="/players"> Pro Players</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};
export default Navbar;
