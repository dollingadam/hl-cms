
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
        gatsbyImage(width: 200)
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
        image={getImage(heroImage.gatsbyImage)}
        alt={title}

      />

    </Layout>
  );
};



export default PostTemplate;
