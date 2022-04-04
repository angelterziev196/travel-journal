import React from 'react';
import logo from 'D:/Coding/travel-journal/src/images/planet-logo.png';

export default function Nav() {
    return (
        <nav className='navigation'>
            <img src={logo} alt='logo' />
            <h3>My Travel Journal</h3>
        </nav>
    );
}
