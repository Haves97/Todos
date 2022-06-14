import React from 'react';
import cl from './Header.module.css'

const Header = () => {
    return (
        <header >
            <h1 className={cl.title}>todos</h1>
        </header>
    );
};

export default Header;