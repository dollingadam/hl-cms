


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
import Layout from "../src/components/layout"


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
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }



  `)

  const portfolioItems = data.allContentfulPosts?.edges || []
   const pageTitle =
     data?.allContentfulPage?.nodes[0]?.title || "Portfolio Page"

  return (
    <Layout>
      <div>
        <div className="heading-container">
          <h1>a</h1>
        </div>
        <div className="container mb-5">
          <ul className="list-unstyled row">
            {portfolioItems.map((edge, index) => (
              <li className="col-md-6" key={index}>
                <Link to={`/portfolio/${edge.node.slug}`}>
                  <h2 className="portfolio-title">{edge.node.title}</h2>
                </Link>
                {<GatsbyImage
                  className="img-fluid border-dark"
                  style={{ width: "100%" }}
                  image={getImage(edge.node.heroImage)}
                  alt={edge.node.title}
                />}
                <p className="text-center">{edge.node.description.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage */


/* import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../src/components/layout"

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
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }



  `)

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

import UsePort from "../src/hooks/use-port";
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';

const SecondPage = () => {
  const portData = UsePort();
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {portData.map(({ node }, index) => (
        <li key={index}>
          <h2>
            <Link to={`/portfolio/${node.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {node.title}
            </Link>
          </h2>
          <p>{node.description.description}</p>
          <GatsbyImage className="items" image={node.heroImage.gatsbyImageData} />
        </li>
      ))}
    </ul>
  )
}

export default SecondPage;
