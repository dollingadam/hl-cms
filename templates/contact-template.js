import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import UseLinks from '../src/hooks/use-links';
import { Link } from 'gatsby';

export const query = graphql`
  query {
    contentfulPage {
        edges {
          node {
            content {
              content
            }
          }
        }
      }
  }
`;
const ContactTemplate = (contentfulPage) => {
    const LinksData = UseLinks();

    return (
        <>
            <h2 className='text-center p-5'>{contentfulPage.content.content}</h2>

            <ul className='d-flex justify-content-around p-0'>
                {LinksData.map(({ node }, index) => (
                    <li key={index} className='d-flex row'>
                        <h2>{node.content}</h2>

                        <Link to={node.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {/* Content inside the Link component */}
                            <GatsbyImage image={node.image.gatsbyImageData} alt={node.name} />
                            <h3>{node.name}</h3>
                        </Link>

                    </li>
                ))}
            </ul>
        </>
    );
};

export default ContactTemplate;
