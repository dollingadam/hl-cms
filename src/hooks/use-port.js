import { useStaticQuery, graphql } from "gatsby"

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
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
  `)
    return data.allContentfulPosts.edges;
}

export default UsePort
