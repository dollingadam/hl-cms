import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import UseLinks from '../src/hooks/use-links';
import { Link } from 'gatsby';

const ContactTemplate = () => {
    const LinksData = UseLinks();

    return (
        <ul>
            {LinksData.map(({ node }, index) => (
                <li key={index}>
                    <Link to={node.url}>{node.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default ContactTemplate;
