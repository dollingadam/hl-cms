import React from 'react'

const HomeTemplate = ({ contentfulPage }) => {
    console.log("contentfulPage in HomeTemplate:", contentfulPage);

    if (contentfulPage && contentfulPage.title) {
        return (
            <main>
                <h2>{contentfulPage.title}</h2>
            </main>
        );
    } else {
        return null; // or render a default component/message if title is not available
    }
}

export default HomeTemplate
