import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Link to="/info/">Go To Info page</Link>
    </div>
  );
};

export default IndexPage;
