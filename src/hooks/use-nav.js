import { useStaticQuery, graphql } from "gatsby"

const UseNav = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPage {
        edges {
          node {
            url
            title
          }
        }
      }
    }
  `)
  return data.allContentfulPage.edges;
}

export default UseNav
