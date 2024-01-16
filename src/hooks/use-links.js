import { useStaticQuery, graphql } from "gatsby"

const UseLinks = () => {
    const data = useStaticQuery(graphql`
  {
    allContentfulLinks {
        edges {
      node {
        url
        name
        image {
            gatsbyImageData(

              width: 500

            )
          }
      }
    }
    }
  }
`)
    return data.allContentfulLinks.edges;
}

export default UseLinks
