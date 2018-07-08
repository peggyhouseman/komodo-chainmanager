import React from 'react';

const Nav = () => (
    <header>
        <nav className="navbar navbar-expand navbar-dark bg-primary"> 
            <a className="navbar-brand" href="/">Komodo</a>
            <div className="navbar-nav mr-auto">
                <a className="nav-item nav-link active" href="/">Chains<span className="sr-only">(current)</span></a>
            </div>
        </nav>
    </header>
);

export default Nav;