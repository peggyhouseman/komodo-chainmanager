import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <header>
        <nav className="navbar navbar-expand navbar-dark bg-primary"> 
            <NavLink to='/' className="navbar-brand">Komodo</NavLink>
            <div className="navbar-nav mr-auto">
                <NavLink to='/create-chain' className="nav-item nav-link active">Create Chain</NavLink>
                </div>
        </nav>
    </header>
);

export default Nav;