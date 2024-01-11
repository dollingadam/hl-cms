/*

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulPosts.edges.forEach(({ edge }) => {
    console.log(edge);
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
 */
