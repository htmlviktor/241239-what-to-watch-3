import React from 'react';
import {AppRoute, AUTH_STATUS} from "../../../const";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getAuthStatus} from "../../../reducer/user/selectors";
import {AvatarImg} from './parts';

const LoginLink = () => (<Link className={`user-block__link`} to={AppRoute.LOGIN}>Sign in</Link>);

const Avatar = ({status}) => {
  return (
    <React.Fragment>
      {status === AUTH_STATUS.NO_AUTH && <LoginLink />}
      {status === AUTH_STATUS.AUTH && <AvatarImg />}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  status: getAuthStatus(state)
});

export default connect(mapStateToProps)(Avatar);

