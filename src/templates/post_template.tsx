import React, { FunctionComponent } from 'react';
import Template from 'components/Common/Template';

interface PostTemplateProps {}

const PostTemplate: FunctionComponent<PostTemplateProps> = function (props) {
  console.log(props);

  return <Template>Post Template</Template>;
};

export default PostTemplate;
