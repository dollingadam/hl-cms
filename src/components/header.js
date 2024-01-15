import React, { useState } from 'react';
import UseNav from '../hooks/use-nav';
import { Link } from 'gatsby';

const Header = () => {
    const navData = UseNav();
    const [expanded, setExpanded] = useState(false);

    return (
        <header className="container-fluid" id="header">
            <div className="row">
                <div className="col-12 header-1 head">
                    <h1 className="header1">ADDO portfolio</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 header-2">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                        <button
                            className="navbar-toggler ml-auto"
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
                            <ul className="navbar-nav">
                                {navData.map(({ node }, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link
                                            to={node.url}
                                            className="nav-link"
                                            onClick={() => setExpanded(false)}
                                        >
                                            {node.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
