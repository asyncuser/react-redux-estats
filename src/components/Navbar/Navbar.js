import React from 'react'

const Navbar = () => {
    return(
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <a href="/" className="brand-logo center">eStats</a>
                <ul className="left">
                    <li><a href="/">Home</a></li>
                    <li><a href="/matches">Matches</a></li>
                    <li><a href="/players">Players</a></li>
                </ul>
            </div>
        </nav>
    )
};
export default Navbar;
