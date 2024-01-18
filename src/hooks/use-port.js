import { useStaticQuery, graphql } from "gatsby";

const UsePort = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPosts {
        edges {
          node {
            title
            slug
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
      }
    }
  `);

  return data.allContentfulPosts.edges;
};

export default UsePort;
