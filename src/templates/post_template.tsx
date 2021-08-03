import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Template from 'components/Common/Template';
import PostHead, { PostHeadProps } from 'components/Post/PostHead';

interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: string;
            frontmatter: PostHeadProps & {summary: string};
          };
        },
      ];
    };
  };
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: { html, frontmatter },
  } = edges[0];

  return (
    <Template>
      <PostHead {...frontmatter} />
    </Template>
  );
};

export default PostTemplate;
