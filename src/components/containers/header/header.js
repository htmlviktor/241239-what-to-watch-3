import React from 'react';
import {Link} from "react-router-dom";
import {AppRoute, AUTH_STATUS} from "../../../const";
import {connect} from 'react-redux';
import {getAuthStatus} from "../../../reducer/user/selectors";


const Avatar = () => {
  return (
    <div className="user-block__avatar">
      <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
    </div>
  );
};

const Header = ({status}) => {
  return <header className="page-header movie-card__head">
    <div className="logo">
      <Link to={AppRoute.ROOT} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
    <div className="user-block">
      {status === AUTH_STATUS.NO_AUTH ? <Link className={`catalog__genres-link`} to={AppRoute.LOGIN}>Sign in</Link> :
        <Avatar />
      }
    </div>
  </header>;

};

const mapStateToProps = (state) => ({
  status: getAuthStatus(state)
});

export default connect(mapStateToProps)(Header);
