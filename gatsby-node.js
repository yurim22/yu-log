/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

// `alias` 에서, components로 시작하는 경로는 모두 src 폴더 내의 components 폴더로 매핑해주어 
// 절대 경로를 사용할 수 있도록 해준다.

// Generate a Slug Each Post Data
exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode});

    createNodeField({node, name: 'slug', value: slug})
  }
}

exports.createPages = async ({actions, graphql, reporter }) => {
  const {createPage} = actions;

  // Get all markdown file for paging
  const queryAllMarkdownData = await graphql(
    `
    {
      allMarkdownRemark(
        sort: {
          order: DESC
          fields: [frontmatter___date, frontmatter___title]
        }
      ) {
        edges{
          node{
            fields{
              slug
            }
          }
        }
      }
    }`
  );

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  // Import Post Template Component
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/templates/post_template.tsx',
  );

  // Page Generating Function
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    };

    createPage(pageOptions);
  };

  // Generate Post Page And Passing Slug Props for Query
  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage);
};
