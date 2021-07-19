import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Text from 'components/Text';
import { Link } from 'gatsby';

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Text text="Hello, my name is bom2" />
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default InfoPage;

//graphql query 요청
export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
//보낸 요청에 대한 응답으로 데이터를 props로 전달해준다.
