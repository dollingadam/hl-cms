// Import necessary modules/components
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutTemplate from "../../templates/about-template"
import HomeTemplate from "../../templates/home-template"
import PostTemplate from "../../templates/post"
import SecondPage from "../../templates/portfolio-template"
import ContactTemplate from "../../templates/contact-template"

const Page = (props) => {
  const { data } = props
  console.log("data:", data);
  const { contentfulPage } = data



  // Log contentfulPage object
  console.log("contentfulPage:", contentfulPage)

  const getTemplate = (contentfulPage) => {
    // Log template type
    console.log("Template Type:", contentfulPage.template)

    switch (contentfulPage.template.toLowerCase()) {
      case "about-template":
        return <AboutTemplate {...contentfulPage} />
      case "contact-template":
        return <ContactTemplate {...contentfulPage} />
      case "portfolio-template":
        return <SecondPage {...contentfulPage} />

      default:
        return <HomeTemplate {...contentfulPage} />
    }
  }

  return (<Layout>{getTemplate(contentfulPage)}</Layout>)
}

export const query = graphql`
  query ($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      content {
        content
      }
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 500
          height: 300
          placeholder: BLURRED
        )
      }
      template

    }
  }
`

export default Page
