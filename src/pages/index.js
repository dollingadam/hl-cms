import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"



const IndexPage = () => (
  <Layout>
    <Link to="/portfolio">Se min portfolio</Link>
  </Layout>
)
export const Head = () => <title>Home Page</title>

export default IndexPage;
