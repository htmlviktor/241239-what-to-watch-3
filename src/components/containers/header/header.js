import React from 'react';
import {Link} from "react-router-dom";
import {AppRoute, AUTH_STATUS} from "../../../const";
import {connect} from 'react-redux';
import {getAuthStatus, getUserInfo} from "../../../reducer/user/selectors";
import {compose} from 'redux';
import withLoadIndicator from "../../hocs/withLoadIndicator";

const Avatar = ({url}) => {
  return (
    <div className="user-block__avatar">
      <img src={`https://htmlacademy-react-3.appspot.com/${url}`} alt="User avatar" width={63} height={63} />
    </div>
  );
};

const Header = ({status, item}) => {
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
        <Avatar url={item.avatar}/>
      }
    </div>
  </header>;

};

const mapStateToProps = (state) => ({
  status: getAuthStatus(state),
  item: getUserInfo(state)
});

export default compose(
    connect(mapStateToProps),
    withLoadIndicator
)(Header);
