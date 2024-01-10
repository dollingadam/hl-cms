import React from 'react';
import UseNav from '../hooks/use-nav';
import { Link } from 'gatsby';

const Header = () => {
    const navData = UseNav();
    return (
        <nav>
            <ul>
                {navData.map(({ node }, index) => (
                    <li key={index}>
                        <Link to={node.url}>{node.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
