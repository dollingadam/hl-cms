/* import * as React from "react"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const SecondPage = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulPosts {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
  `)



  return (
    <div>
      {data.allContentfulPosts.edges.map(({ node }) => (
        <h2 key={node.slug}>{edge.node.title}</h2>
      ))}
    </div>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
 */
/* import * as React from "react"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const SecondPage = () => {
  const portfolioData = useStaticQuery(graphql`
    query {
      allContentfulPosts {
        edges {
          node {
            title
            slug
            description {
              description
            }
          }
        }
      }
      allContentfulPage {
        nodes {
          title
        }
      }
    }
  `)

  const portfolioItems = portfolioData?.allContentfulPosts?.edges || []
  const pageTitle =
    portfolioData?.allContentfulPage?.nodes[0]?.title || "Portfolio Page"

  return (
    <div>
      <div className="heading-container">
        <h1>{pageTitle}</h1>
      </div>
      <div className="container mb-5">
        <ul className="list-unstyled row">
          {portfolioItems.map((edge) => (
            <li className="col-md-6">
              <Link to={`/portfolio/${edge.node.slug}`}>
                <h2 className="portfolio-title">{edge.node.title}</h2>
              </Link>
              {  <GatsbyImage
                className="img-fluid border-dark"
                style={{ width: "100%" }}
                image={getImage(edge.node.img)}
                alt={edge.node.title}
              /> }
              <p className="text-center">{edge.node.description.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
 */
