import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"


const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <Link to="/">Go home</Link>
  </Layout>
)

export const Head = () => <title>Portfolio Page</title>

export default NotFoundPage
