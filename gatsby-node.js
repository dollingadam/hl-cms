const path = require('path')

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

  response.data.allContentfulPosts.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve('./templates/post.js'),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
