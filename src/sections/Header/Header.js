import React, { useEffect, useRef, useState } from 'react';
import {Navbar} from './Navbar.js';
import './Header.css';
  
export function Header () {

    const [headerFixed, setHeaderFixed] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const headerRef = useRef();

    const headerClasses = `header ${headerFixed ? 'scroll-down' : ''} ${
        mobileNavOpen ? 'nav-open' : ''
    }`;

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (window.pageYOffset >= 2) setHeaderFixed(true);
            else setHeaderFixed(false);
        });
    }, [setHeaderFixed]);

    return (
        <>
            <header ref={headerRef} className={headerClasses}>
                <a href='#Hero' className='brand' onClick={() => setMobileNavOpen(false)}>Peter Baggetta</a>

                <Navbar mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>
                <div className='mobile-nav-circle'></div>
            </header>
        </>
    );
}