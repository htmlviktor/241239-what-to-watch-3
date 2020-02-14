import React from 'react';
import PropTypes from 'prop-types';

const PageContentWrapper = ({children}) => {
  return <div className="page-content">{children}</div>;
};

PageContentWrapper.propTypes = {
  children: PropTypes.array
};

PageContentWrapper.propTypes = {
  children: PropTypes.object
};

export default PageContentWrapper;
