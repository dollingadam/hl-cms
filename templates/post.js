
import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../src/components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


export const query = graphql`
  query ($slug: String!) {
    contentfulPosts(slug: { eq: $slug }) {
      title
      description {
        description
      }
      heroImage {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 500
          height: 300
          placeholder: BLURRED
        )
      }
    }
  }
`;

const PostTemplate = (props) => {
  const { heroImage, description, title } = props.data.contentfulPosts;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{description.description}</p>

      <GatsbyImage
        image={getImage(heroImage.gatsbyImageData)}
        alt={title}

      />

    </Layout>
  );
};



export default PostTemplate;
