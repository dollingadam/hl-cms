import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
const AboutTemplate = (contentfulPage) => {
    return (
        <>
            <main>
                <h2>{contentfulPage.title}</h2>
                <p>{contentfulPage.content.content}</p>
                <GatsbyImage image={contentfulPage.image.gatsbyImageData} />
            </main>
        </>
    );
}

export default AboutTemplate
