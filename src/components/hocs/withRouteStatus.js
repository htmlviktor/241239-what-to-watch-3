import React from 'react';

const withRouteStatus = (Component) => {
  return (props) => {
    return <Component {...props}/>;
  }
};




export default withRouteStatus;
