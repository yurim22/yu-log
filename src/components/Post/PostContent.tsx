import React, {FunctionComponent} from "react";
import styled from '@emotion/styled';

interface PostContentProps {
    html: string;
}

const MarkdownRenderer = styled.div`
    display: flex;
    flex-direction: column;
    width: 768px;
    margin: 0 auto;
    padding: 100px 0;
`;

const PostContent: FunctionComponent<PostContentProps> = function ({html}) {
    return <MarkdownRenderer dangerouslySetInnerHTML={{__html: html}}/>
};

export default PostContent;

// `dangerouslySetInnerHTML` :  문자열 형태의 HTML 코드를 출력하기 위함