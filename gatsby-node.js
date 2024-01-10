

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
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
    `);

  response.data.allContentfulPosts.edges.forEach(({ node }) => {
    createPage({
      path: `/portfolio/${node.slug}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};
