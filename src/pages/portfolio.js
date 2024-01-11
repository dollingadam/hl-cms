/* import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"

const SecondPage = () => {
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
            gatsbyImage(width: 200)
          }
        }
      }
    }
  }



  `
  )

  return (
    <Layout>
      <ul className="posts">
        {data.allContentfulPosts.edges.map((edge) => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>{edge.node.title}</h2>
              <GatsbyImage image={edge.node.heroImage.gatsbyImage} />
              <p>{edge.node.description.description}</p>
              <Link to={`/post.js/${edge.node.slug}`}>Läs mer</Link>
            </li>

          )
        })}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
 */
