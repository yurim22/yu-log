import React, { FunctionComponent } from 'react';
import Text from 'components/Text';
import { Link } from 'gatsby';

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Home" />
      <Link to="/info/">Go To Info page</Link>
    </div>
  );
};

export default IndexPage;
