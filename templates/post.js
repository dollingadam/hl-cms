
import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../src/components/layout";
import { GatsbyImage } from "gatsby-plugin-image";


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

  return (
    <Layout>
      <h1>{props.data.contentfulPosts.title}</h1>
      <GatsbyImage image={props.data.contentfulPosts.heroImage.gatsbyImage} />
      <p>{props.data.contentfulPosts.description}</p>
    </Layout>
  );
};

export default PostTemplate;
