import React from 'react';
import {getAuthStatus} from "../../reducer/user/selectors";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AUTH_STATUS} from "../../const";
import PropTypes from 'prop-types';

const withRouteStatus = (Component, path) => {
  class WithRouteStatus extends React.PureComponent {

    render() {
      const {status} = this.props;
      if (status === AUTH_STATUS.AUTH) {
        return <Redirect to={path}/>;
      }
      return <Component {...this.props}/>;
    }
  }

  WithRouteStatus.propTypes = {
    status: PropTypes.string
  };


  const mapStateToProps = (state) => ({
    status: getAuthStatus(state),
  });

  return connect(mapStateToProps)(WithRouteStatus);
};


export default withRouteStatus;
