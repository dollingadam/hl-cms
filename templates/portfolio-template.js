import * as React from "react"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const SecondPage = () => {
    const data = useStaticQuery(graphql`
    query {

      allContentfulPage {
        nodes {
          title
        }
      }
    }
  `)



    return (
        <div>
            <h2>{data.allContentfulPage.nodes.title}</h2>
        </div>
    )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
