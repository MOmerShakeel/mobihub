import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import logo from "./img/logo.png"

function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <nav className="navbar">
                        <Link to="/"><img alt="Head" className="headerLogo" src={logo}></img></Link>
                    </nav>
                </div>

                <div className="menubar">
                    <nav className="menu-under">
                        <ul className="headerUl">
                            <li className="headerLi">
                                <Link to="/" className="menulink">HOME</Link>
                            </li>
                            <li className="headerLi">
                                <Link to="/repairs" className="menulink">REPAIRS</Link>
                            </li>
                            <li className="headerLi">
                                <a href="https://mobihubrepairs.com/shop" className="menulink" target="_blank" rel="noreferrer">VISIT SHOP</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>);
}

export default Header;

