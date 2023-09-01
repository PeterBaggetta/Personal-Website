import React from "react";
import { GrClose, GrMenu } from 'react-icons/gr';

import './Header.css';

export function Navbar ({setMobileNavOpen}) {
    return (
        <>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <a href="#about" className="nav-link" onClick={() => setMobileNavOpen(false)}>About</a>
                    </li>
                    <li>
                        <a href="#skills" className="nav-link" onClick={() => setMobileNavOpen(false)}>Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-link" onClick={() => setMobileNavOpen(false)}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="nav-link" onClick={() => setMobileNavOpen(false)}>Contact</a>
                    </li>
                </ul>
            </nav>
            <button className="nav-mobile-btn" onClick={() => setMobileNavOpen(prev => !prev)}>
                <GrMenu className="mobile-icon mobile-icon-open" size="35" />
                <GrClose className="mobile-icon mobile-icon-close" size="35" />
            </button>
        </>
    )
}