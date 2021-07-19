import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

// dataType 설정
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

// style 설정
const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`;

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`;

const Text1 = styled.div<{ disable: boolean }>`
  font-sixe: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`;

const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}));

// main funtion
const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      {/* <div css={TextStyle}>{title}</div> */}
      {title}
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={false}>{author}</Text2>
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
